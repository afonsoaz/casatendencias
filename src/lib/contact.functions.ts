import { createServerFn } from '@tanstack/react-start'

export interface ContactSubmissionInput {
  name: string
  phone: string
  email: string | null
  location: string
  services: string[]
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(input: ContactSubmissionInput): string | null {
  if (!input.name || input.name.length > 120) return 'Nome inválido.'
  if (!input.phone || input.phone.length > 40) return 'Telefone inválido.'
  if (input.email && (input.email.length > 160 || !EMAIL_RE.test(input.email))) return 'Email inválido.'
  if (!input.location || input.location.length > 160) return 'Localização inválida.'
  if (!input.message || input.message.length > 4000) return 'Mensagem inválida.'
  if (!Array.isArray(input.services) || input.services.length > 10) return 'Serviços inválidos.'
  return null
}

export const submitContact = createServerFn({ method: 'POST' })
  .inputValidator((input: ContactSubmissionInput) => input)
  .handler(async ({ data }) => {
    const input: ContactSubmissionInput = {
      name: String(data.name ?? '').trim(),
      phone: String(data.phone ?? '').trim(),
      email: String(data.email ?? '').trim() || null,
      location: String(data.location ?? '').trim(),
      services: Array.isArray(data.services) ? data.services.map((s) => String(s)).slice(0, 10) : [],
      message: String(data.message ?? '').trim(),
    }

    const validationError = validate(input)
    if (validationError) {
      return { ok: false as const, error: validationError }
    }

    const { supabaseAdmin } = await import('@/integrations/supabase/client.server')
    const { data: row, error } = await supabaseAdmin
      .from('contact_submissions')
      .insert({
        name: input.name,
        phone: input.phone,
        email: input.email,
        location: input.location,
        services: input.services,
        message: input.message,
      })
      .select('id, created_at')
      .single()

    if (error) {
      console.error('contact_submissions insert failed', error)
      return { ok: false as const, error: 'Não foi possível guardar o pedido.' }
    }

    // Notify the owner by email. A send failure must not lose the request:
    // it is already stored, so we log and still report success.
    try {
      const { sendTemplateEmail } = await import('@/lib/email-templates/send-email')
      await sendTemplateEmail('contact-notification', 'casa.tendencias@gmail.com', {
        templateData: {
          ...input,
          submittedAt: new Date(row.created_at).toLocaleString('pt-PT', {
            dateStyle: 'long',
            timeStyle: 'short',
            timeZone: 'Europe/Lisbon',
          }),
        },
        idempotencyKey: `contact-notification-${row.id}`,
        ...(input.email ? { replyTo: input.email } : {}),
      })
    } catch (sendError) {
      console.error('contact notification email failed', sendError)
    }

    return { ok: true as const }
  })
