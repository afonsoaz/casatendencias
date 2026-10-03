import { createFileRoute, Link } from "@tanstack/react-router";
import realProject1 from "@/assets/real-project-1.jpg";
import realProject2 from "@/assets/real-project-2.jpg";
import realProject3 from "@/assets/real-project-3.jpg";
import realProject4 from "@/assets/real-project-4.jpg";
import realProject5 from "@/assets/real-project-5.jpg";
import realProject6 from "@/assets/real-project-6.jpg";
import { INSTAGRAM_URL } from "@/lib/brand";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portefólio · Casa & Tendências" },
      {
        name: "description",
        content:
          "Transformações de interiores assinadas pela Casa & Tendências: cortinados, blackouts e toldos à medida, papel de parede e consultoria ao domicílio. Veja mais no Instagram @casaetendencias.",
      },
      { property: "og:title", content: "Portefólio · Casa & Tendências" },
      {
        property: "og:description",
        content:
          "Transformações de interiores: cortinados, blackouts e toldos à medida, papel de parede e consultoria ao domicílio.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

const PROJECTS = [
  {
    img: realProject1,
    title: "Recanto de leitura",
    tag: "Cortinados + Mobiliário",
    text: "Texturas, iluminação e peças de apoio reunidas num ambiente acolhedor.",
  },
  {
    img: realProject2,
    title: "Composição dourada",
    tag: "Iluminação + Decoração",
    text: "Candeeiros, arte e pequenos objetos combinados numa composição equilibrada.",
  },
  {
    img: realProject3,
    title: "Quarto com personalidade",
    tag: "Têxteis + Cortinados",
    text: "Um tapete marcante e cortinados leves dão escala, conforto e identidade ao espaço.",
  },
  {
    img: realProject4,
    title: "Texturas serenas",
    tag: "Têxteis + Mobiliário",
    text: "Camadas suaves e tons neutros criam um quarto elegante e confortável.",
  },
  {
    img: realProject5,
    title: "Arte e matéria",
    tag: "Consultoria de interiores",
    text: "Cor, pedra e madeira articulam um percurso visual contemporâneo.",
  },
  {
    img: realProject6,
    title: "Sala de jantar harmoniosa",
    tag: "Mobiliário + Iluminação",
    text: "Madeira, metal e cerâmica equilibrados por luz quente e formas orgânicas.",
  },
];

function PortfolioPage() {
  return (
    <div>
      <section className="bg-card">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center md:py-24">
          <p className="eyebrow text-primary">Portefólio</p>
          <h1 className="mx-auto mt-5 max-w-2xl font-display text-4xl leading-tight md:text-5xl">
            Transformações que falam <span className="italic text-primary">por si</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground">
            Uma seleção de projetos realizados ao domicílio, cada um desenhado à medida da casa
            e de quem nela vive.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <figure key={i} className="group">
              <div className="overflow-hidden bg-card">
                <img
                  src={project.img}
                  alt={project.title}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1088}
                  height={1360}
                />
              </div>
              <figcaption className="pt-5">
                <p className="eyebrow text-primary">{project.tag}</p>
                <h2 className="mt-2 font-display text-2xl">{project.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
          <p className="eyebrow text-primary">Siga o nosso trabalho</p>
          <h2 className="mt-4 font-display text-3xl md:text-4xl">
            Mais projetos, bastidores e novidades no Instagram
          </h2>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center rounded-md bg-primary px-7 py-3.5 text-sm uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
          >
            @casaetendencias no Instagram
          </a>
          <p className="mt-8 text-sm text-ink-foreground/60">
            Prefere falar connosco diretamente?{" "}
            <Link to="/contacto" className="text-primary underline-offset-4 hover:underline">
              Envie-nos o seu projeto
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
