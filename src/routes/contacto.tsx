import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, SERVICES } from "@/lib/brand";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · Casa & Tendências" },
      {
        name: "description",
        content:
          "Fale com a Casa & Tendências: ligue, envie WhatsApp ou descreva o seu projeto. Atendimento ao domicílio em Santo Tirso e arredores, por marcação prévia.",
      },
      { property: "og:title", content: "Contacto · Casa & Tendências" },
      {
        property: "og:description",
        content: "Ligue, envie WhatsApp ou descreva o seu projeto. Atendimento ao domicílio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactoPage,
});

type Status = "idle" | "sending" | "success" | "error";

function ContactoPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("sending");

    const { error } = await supabase.from("contact_submissions").insert({
      name: String(data.get("name") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim() || null,
      location: String(data.get("location") ?? "").trim(),
      services: selectedServices,
      message: String(data.get("message") ?? "").trim(),
    });

    if (error) {
      console.error(error);
      setStatus("error");
      return;
    }
    form.reset();
    setSelectedServices([]);
    setStatus("success");
  }

  function toggleService(id: string) {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id],
    );
  }

  const inputClass =
    "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring";

  return (
    <div>
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-24">
          <p className="eyebrow text-primary">Contacto</p>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            Fale connosco · <span className="italic text-primary">estamos a um toque</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Ligue, envie uma mensagem de WhatsApp ou descreva o seu projeto abaixo. Agendamos a
            visita ao seu domicílio no dia e hora que lhe convier.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
        {/* Direct contact */}
        <div>
          <div className="space-y-6">
            <a
              href={PHONE_TEL}
              className="block border-b border-border pb-6 transition-colors hover:text-primary"
            >
              <p className="eyebrow text-muted-foreground">Telefone · toque para ligar</p>
              <p className="mt-2 font-display text-3xl">{PHONE_DISPLAY}</p>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="block border-b border-border pb-6 transition-colors hover:text-primary"
            >
              <p className="eyebrow text-muted-foreground">WhatsApp</p>
              <p className="mt-2 font-display text-3xl">{PHONE_DISPLAY}</p>
              <p className="mt-1 text-sm text-muted-foreground">Envie fotos e ideias do seu espaço.</p>
            </a>
            <div className="border-b border-border pb-6">
              <p className="eyebrow text-muted-foreground">Atendimento</p>
              <address className="mt-2 text-base not-italic leading-relaxed text-foreground">
                Rua Abel Alves de Figueiredo n.º 170
                <br />
                4780-384 Santo Tirso, Portugal
              </address>
              <p className="mt-2 text-sm text-muted-foreground">
                Serviço focado em visitas ao domicílio, por marcação prévia.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="bg-card p-8 md:p-10">
          {status === "success" ? (
            <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 font-display text-2xl text-primary">
                ✓
              </span>
              <h2 className="mt-6 font-display text-3xl">Pedido enviado</h2>
              <p className="mt-3 max-w-sm text-muted-foreground">
                Obrigado pelo seu contacto. Recebemos o seu pedido e vamos responder com a maior
                brevidade possível.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-8 text-sm uppercase tracking-widest text-primary underline-offset-4 hover:underline"
              >
                Enviar outro pedido
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="font-display text-2xl">Descreva o seu projeto</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Quanto mais nos contar, melhor preparados chegamos à sua casa.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Nome *</span>
                  <input name="name" required className={`mt-2 ${inputClass}`} placeholder="O seu nome" />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Telefone *</span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className={`mt-2 ${inputClass}`}
                    placeholder="+351 ..."
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Email (opcional)</span>
                  <input name="email" type="email" className={`mt-2 ${inputClass}`} placeholder="email@exemplo.pt" />
                </label>
                <label className="block">
                  <span className="eyebrow text-muted-foreground">Localização *</span>
                  <input
                    name="location"
                    required
                    className={`mt-2 ${inputClass}`}
                    placeholder="Ex.: Santo Tirso, Porto..."
                  />
                </label>
              </div>

              <fieldset>
                <legend className="eyebrow text-muted-foreground">Serviços pretendidos</legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {SERVICES.map((service) => (
                    <label
                      key={service.id}
                      className={`flex cursor-pointer items-center gap-3 rounded-md border px-4 py-3 text-sm transition-colors ${
                        selectedServices.includes(service.id)
                          ? "border-primary bg-primary/5 text-foreground"
                          : "border-input text-muted-foreground hover:border-foreground/30"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service.id)}
                        onChange={() => toggleService(service.id)}
                        className="h-4 w-4 accent-[var(--primary)]"
                      />
                      {service.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <label className="block">
                <span className="eyebrow text-muted-foreground">O que pretende fazer na sua casa *</span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  className={`mt-2 ${inputClass} resize-none`}
                  placeholder="Ex.: Quero cortinados novos para a sala e uma nova iluminação para o quarto..."
                />
              </label>

              {status === "error" && (
                <p className="rounded-md bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  Ocorreu um erro ao enviar. Tente novamente ou contacte-nos por telefone.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full rounded-md bg-primary px-7 py-4 text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
              >
                {status === "sending" ? "A enviar..." : "Enviar pedido"}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
