import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import serviceCortinados from "@/assets/service-cortinados.jpg";
import servicePapelParede from "@/assets/service-papel-parede.jpg";
import serviceConsultoria from "@/assets/service-consultoria.jpg";
import realProject1 from "@/assets/real-project-1.jpg";
import realProject3 from "@/assets/real-project-3.jpg";
import realProject6 from "@/assets/real-project-6.jpg";
import cristinaImg from "@/assets/cristina.jpg";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, SERVICES, BRANDS } from "@/lib/brand";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa & Tendências · Cortinados, Papel de Parede e Consultoria ao Domicílio" },
      {
        name: "description",
        content:
          "Transformamos a sua casa com cortinados por medida, papel de parede e consultoria de interiores. Medição e instalação ao domicílio em Santo Tirso e arredores.",
      },
      { property: "og:title", content: "Casa & Tendências · Decoração ao Domicílio" },
      {
        property: "og:description",
        content:
          "Cortinados por medida, papel de parede e consultoria de interiores. Vamos até sua casa para medir, aconselhar e instalar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const PROCESS = [
  {
    step: "01",
    title: "Marcação",
    text: "Ligue ou envie mensagem e agendamos a visita na nossa loja em Santo Tirso, ou no conforto da sua casa, no dia e hora que lhe convier.",
  },
  {
    step: "02",
    title: "Visita e medição",
    text: "Vamos ao seu domicílio medir com precisão, ouvir as suas ideias e perceber o ambiente de cada divisão. Ou então, visite-nos na nossa loja sob marcação.",
  },
  {
    step: "03",
    title: "Proposta e materiais",
    text: "Apresentamos uma proposta à medida, com amostras de tecidos e papéis de parede para escolher em casa.",
  },
  {
    step: "04",
    title: "Instalação",
    text: "Tratamos de tudo, da produção à instalação final, com acabamento impecável e sem preocupações.",
  },
] as const;

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Sala com cortinados por medida em tons quentes"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/15" />
        <div className="mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 py-24 text-ink-foreground">
          <p className="eyebrow text-ink-foreground/80">Decoração ao domicílio · Santo Tirso</p>
          <h1 className="mt-6 max-w-2xl font-display text-5xl leading-[1.08] md:text-6xl lg:text-7xl">
            <span className="block">A sua casa,</span>
            <span className="block">
              pensada{" "}
              <span className="italic text-primary-soft underline decoration-primary/70 decoration-2 underline-offset-8">
                ao detalhe
              </span>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-ink-foreground/90">
            Cortinados por medida, papel de parede e consultoria de interiores. Vamos até
            si: medimos, aconselhamos e instalamos, tudo em sua casa.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm tracking-widest uppercase text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Ligar {PHONE_DISPLAY}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-md border border-ink-foreground/40 px-7 py-3.5 text-sm tracking-widest uppercase text-ink-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Trusted brands marquee */}
      <section aria-label="Marcas com quem trabalhamos" className="brand-marquee overflow-hidden border-b border-border/60 bg-background">
        <p className="eyebrow mt-10 text-center text-muted-foreground">
          Trabalhamos com marcas de confiança
        </p>
        <div className="relative mt-8 mb-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent md:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent md:w-24" />
          <div className="brand-marquee-track items-center">
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <div
                key={`${brand.name}-${i}`}
                className="mx-8 flex h-14 w-36 shrink-0 items-center justify-center md:mx-10 md:h-16 md:w-44"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  aria-hidden={i >= BRANDS.length}
                  className="h-auto max-h-full w-auto max-w-full object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statement */}

      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-28">
          <p className="eyebrow text-primary">Casa & Tendências</p>
          <h2 className="mt-6 font-display text-3xl leading-snug md:text-4xl">
            Um serviço exclusivo, desenhado para quem valoriza o detalhe, os materiais e a
            comodidade de decidir em casa.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            A Casa & Tendências não é só uma loja; é um atendimento personalizado que pode ir até à sua casa. Levamos tecidos, ideias e soluções até si, e ficamos consigo desde a primeira medição até à última cortina instalada.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-primary">Serviços</p>
            <h2 className="mt-4 font-display text-4xl">O que fazemos por si</h2>
          </div>
          <Link
            to="/servicos"
            className="text-sm uppercase tracking-widest text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Ver todos os serviços
          </Link>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {SERVICES.map((service, i) => {
            const img = [serviceCortinados, servicePapelParede, serviceConsultoria][i];
            return (
              <Link
                key={service.id}
                to="/servicos"
                className="group block overflow-hidden bg-card"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={img}
                    alt={service.label}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={1088}
                    height={1360}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl">{service.label}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <p className="eyebrow text-primary">Como trabalhamos</p>
          <h2 className="mt-4 font-display text-4xl">Do primeiro contacto à casa transformada</h2>
          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item) => (
              <div key={item.step} className="border-t border-ink-foreground/15 pt-6">
                <span className="font-display text-3xl italic text-primary">{item.step}</span>
                <h3 className="mt-4 font-display text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-foreground/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-primary">Portefólio</p>
            <h2 className="mt-4 font-display text-4xl">Transformações recentes</h2>
          </div>
          <Link
            to="/portfolio"
            className="text-sm uppercase tracking-widest text-foreground underline-offset-4 transition-colors hover:text-primary hover:underline"
          >
            Ver portefólio completo
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[realProject1, realProject3, realProject6].map((img, i) => (
            <Link key={i} to="/portfolio" className="group block overflow-hidden bg-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={img}
                  alt="Projeto de decoração Casa & Tendências"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1088}
                  height={1360}
                />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Cristina */}
      <section className="bg-card">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28 lg:gap-16">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full border border-primary/40"
            />
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={cristinaImg}
                alt="Cristina Estêvão, fundadora da Casa & Tendências"
                loading="lazy"
                className="h-full w-full object-cover"
                width={1088}
                height={1360}
              />
            </div>
          </div>
          <div>
            <p className="eyebrow text-primary">Quem está por trás</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Cristina Estêvão</h2>
            <div aria-hidden="true" className="mt-6 h-px w-16 bg-primary/60" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Há mais de 20 anos que a Cristina vive a decoração de interiores. Ao longo deste
              percurso, aconselhou inúmeras casas e negócios locais na região de Santo Tirso,
              sempre com o mesmo cuidado: ouvir primeiro, propor depois.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Na Casa & Tendências, é ela quem o atende do primeiro contacto à instalação
              final. É ela quem visita, mede e aconselha em sua casa, com um olhar experiente
              e um atendimento inteiramente personalizado, pensado para o seu espaço e para a
              sua forma de viver.
            </p>
            <p className="mt-6 font-display text-xl italic text-foreground">
              "Cada casa tem uma história. O meu trabalho é ajudar a contá-la."
            </p>
            <Link
              to="/contacto"
              className="mt-8 inline-flex rounded-md border border-foreground/25 px-7 py-3.5 text-sm uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
            >
              Falar com a Cristina
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-card">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
          <h2 className="font-display text-3xl leading-snug md:text-4xl">
            Pronto para transformar a sua casa?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Fale connosco: respondemos rapidamente e agendamos a visita ao seu domicílio ou à nossa loja, sem
            compromisso.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={PHONE_TEL}
              className="inline-flex rounded-md bg-primary px-7 py-3.5 text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {PHONE_DISPLAY}
            </a>
            <Link
              to="/contacto"
              className="inline-flex rounded-md border border-foreground/25 px-7 py-3.5 text-sm uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
            >
              Pedir proposta
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
