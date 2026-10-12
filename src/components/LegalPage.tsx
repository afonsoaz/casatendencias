import type { ReactNode } from "react";

export const LEGAL = {
  company: "Carla Cristina Pereira Estêvão",
  legalForm: "Empresário em Nome Individual",
  nif: "206034113",
  email: "casa.tendencias@gmail.com",
  address: "Rua Abel Alves de Figueiredo n.º 170, 4780-384 Santo Tirso, Portugal",
  phone: "+351 912 042 112",
  updated: "12 de outubro de 2026",
};

export function LegalPage({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <section className="bg-card">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-20">
          <p className="eyebrow text-primary">{eyebrow}</p>
          <h1 className="mt-5 font-display text-4xl leading-tight md:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-muted-foreground">Última atualização: {LEGAL.updated}</p>
        </div>
      </section>
      <article className="legal-prose mx-auto max-w-3xl px-6 py-14 md:py-20">{children}</article>
    </div>
  );
}
