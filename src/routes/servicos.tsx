import { createFileRoute, Link } from "@tanstack/react-router";
import realProject1 from "@/assets/real-project-1.jpg";
import realProject2 from "@/assets/real-project-2.jpg";
import realProject3 from "@/assets/real-project-3.jpg";
import realProject4 from "@/assets/real-project-4.jpg";
import realProject5 from "@/assets/real-project-5.jpg";
import realProject6 from "@/assets/real-project-6.jpg";
import { PHONE_TEL, PHONE_DISPLAY, WHATSAPP_URL, SERVICES } from "@/lib/brand";

export const Route = createFileRoute("/servicos")({
  staticData: { sitemap: true },
  head: () => ({
    meta: [
      { title: "Serviços · Casa & Tendências" },
      {
        name: "description",
        content:
          "Cortinados, blackouts e toldos à medida, papel de parede e consultoria de interiores ao domicílio. Medição, aconselhamento e instalação em Santo Tirso e arredores.",
      },
      { property: "og:title", content: "Serviços · Casa & Tendências" },
      {
        property: "og:description",
        content:
          "Cortinados, blackouts e toldos à medida, papel de parede e consultoria de interiores ao domicílio.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://casatendencias.lovable.app/servicos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://casatendencias.lovable.app/servicos" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@graph": [{"@type":"Service",name:"Cortinados, blackouts e toldos à medida",serviceType:"Cortinados, blackouts e toldos à medida",areaServed:"Santo Tirso e arredores",provider:{"@type":"HomeAndConstructionBusiness",name:"Casa & Tendências",telephone:"+351912042112"}},{"@type":"Service",name:"Papel de parede",serviceType:"Papel de parede",areaServed:"Santo Tirso e arredores",provider:{"@type":"HomeAndConstructionBusiness",name:"Casa & Tendências",telephone:"+351912042112"}},{"@type":"Service",name:"Consultoria de interiores",serviceType:"Consultoria de interiores",areaServed:"Santo Tirso e arredores",provider:{"@type":"HomeAndConstructionBusiness",name:"Casa & Tendências",telephone:"+351912042112"}}] }) }],
  }),
  component: ServicosPage,
});

const DETAILS = [
  {
    ...SERVICES[0],
    img: realProject1,
    alt: "Recanto de leitura com cortinados, cadeirão e candeeiro de pé em tons quentes",
    points: [
      "Medição precisa feita em sua casa",
      "Tecidos e estores de qualidade premium",
      "Confeção à medida das suas janelas",
      "Instalação e acabamento incluídos",
    ],
  },
  {
    ...SERVICES[1],
    img: realProject2,
    alt: "Parede texturizada com quadros e candeeiros dourados numa composição equilibrada",
    points: [
      "Padrões e cores aconselhados em sua casa",
      "Amostras reais para decidir com calma",
      "Aplicação profissional com acabamento impecável",
      "Harmonização com têxteis e restante decoração",
    ],
  },
  {
    ...SERVICES[2],
    img: realProject4,
    alt: "Quarto em tons neutros com camadas de têxteis suaves",
    points: [
      "Aconselhamento na sua casa",
      "Paletas de cores e materiais",
      "Disposição de móveis e têxteis",
      "Um plano concreto e executável",
    ],
  },
];

function ServicosPage() {
  return (
    <div>
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-24">
          <p className="eyebrow text-primary">Serviços</p>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            Tudo o que a sua casa precisa, <span className="italic text-primary">sem sair dela</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Levamos o ateliê até si: medição, aconselhamento e instalação ao domicílio, com
            atendimento personalizado e por marcação prévia.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-24 px-6 py-20 md:py-28">
        {DETAILS.map((item, i) => (
          <article
            key={item.id}
            className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
              i % 2 === 1 ? "lg:[&>figure]:order-first" : ""
            }`}
          >
            <figure className="overflow-hidden bg-card">
              <img
                src={item.img}
                alt={item.alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
                width={1088}
                height={816}
              />
            </figure>
            <div>
              <p className="eyebrow text-primary">0{i + 1}</p>
              <h2 className="mt-3 font-display text-3xl md:text-4xl">{item.label}</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">{item.description}</p>
              <ul className="mt-7 space-y-3">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-3 md:py-24">
          {[
            { img: realProject6, alt: "Sala de jantar com mesa de madeira, cadeiras e iluminação quente" },
            { img: realProject3, alt: "Quarto com tapete marcante e cortinados leves junto à janela" },
            { img: realProject5, alt: "Ambiente contemporâneo com arte, pedra e madeira" },
          ].map(({ img, alt }, i) => (
            <figure key={i} className="overflow-hidden">
              <img
                src={img}
                alt={alt}
                loading="lazy"
                className="aspect-square w-full object-cover"
                width={1088}
                height={1088}
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-24">
        <h2 className="font-display text-3xl md:text-4xl">Vamos começar pela sua casa?</h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
          Agende uma visita ao domicílio, sem compromisso. Também pode descrever o que pretende
          através do nosso formulário.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={PHONE_TEL}
            className="inline-flex rounded-md bg-primary px-7 py-3.5 text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Ligar {PHONE_DISPLAY}
          </a>
          <Link
            to="/contacto"
            className="inline-flex rounded-md border border-foreground/25 px-7 py-3.5 text-sm uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
          >
            Pedir proposta
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-md border border-foreground/25 px-7 py-3.5 text-sm uppercase tracking-widest transition-colors hover:border-primary hover:text-primary"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
