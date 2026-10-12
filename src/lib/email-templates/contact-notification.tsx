import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import type { TemplateEntry } from './registry'

export interface ContactNotificationProps {
  name?: string
  phone?: string
  email?: string
  location?: string
  services?: string[]
  message?: string
  submittedAt?: string
}

const brand = {
  terracotta: '#C05868',
  ink: '#1A1A1A',
  cream: '#FAF7F2',
  muted: '#6B6560',
}

function Row({ label, value }: { label: string; value?: string }) {
  if (!value) return null
  return (
    <Text style={{ margin: '0 0 10px', fontSize: '15px', lineHeight: '22px', color: brand.ink }}>
      <span style={{ color: brand.muted, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
        {label}
      </span>
      <br />
      {value}
    </Text>
  )
}

export function ContactNotificationEmail({
  name = 'Visitante',
  phone = '',
  email = '',
  location = '',
  services = [],
  message = '',
  submittedAt = '',
}: ContactNotificationProps) {
  return (
    <Html lang="pt">
      <Head />
      <Preview>Novo pedido de contacto de {name}</Preview>
      <Body style={{ backgroundColor: brand.cream, fontFamily: 'Georgia, serif', margin: 0, padding: '24px 0' }}>
        <Container
          style={{
            backgroundColor: '#FFFFFF',
            border: `1px solid #E8E0D6`,
            borderRadius: '8px',
            margin: '0 auto',
            maxWidth: '560px',
            padding: '32px',
          }}
        >
          <Text
            style={{
              color: brand.terracotta,
              fontSize: '12px',
              letterSpacing: '3px',
              margin: '0 0 8px',
              textTransform: 'uppercase',
            }}
          >
            Casa &amp; Tendências
          </Text>
          <Heading style={{ color: brand.ink, fontSize: '24px', fontWeight: 500, margin: '0 0 24px' }}>
            Novo pedido de contacto
          </Heading>

          <Section>
            <Row label="Nome" value={name} />
            <Row label="Telefone" value={phone} />
            <Row label="Email" value={email} />
            <Row label="Localização" value={location} />
            <Row label="Serviços" value={services.length ? services.join(', ') : undefined} />
          </Section>

          <Hr style={{ borderColor: '#E8E0D6', margin: '20px 0' }} />

          <Text style={{ color: brand.muted, fontSize: '12px', letterSpacing: '1px', margin: '0 0 6px', textTransform: 'uppercase' }}>
            Mensagem
          </Text>
          <Text style={{ color: brand.ink, fontSize: '15px', lineHeight: '24px', margin: '0 0 20px', whiteSpace: 'pre-wrap' }}>
            {message}
          </Text>

          {submittedAt ? (
            <Text style={{ color: brand.muted, fontSize: '12px', margin: 0 }}>
              Recebido a {submittedAt}
            </Text>
          ) : null}
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, any>) => `Novo pedido de contacto · ${data.name ?? 'Visitante'}`,
  displayName: 'Notificação de pedido de contacto',
  to: 'casa.tendencias@gmail.com',
  previewData: {
    name: 'Maria Silva',
    phone: '912 000 000',
    email: 'maria@exemplo.pt',
    location: 'Santo Tirso',
    services: ['Cortinados por medida', 'Papel de parede'],
    message: 'Quero cortinados com blackout para o quarto e papel de parede para a sala.',
    submittedAt: '12 de outubro de 2026, 18:45',
  },
} satisfies TemplateEntry
