import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import logoMark from "@/assets/logo.svg";
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "@/lib/brand";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-medium text-foreground">404</h1>
        <h2 className="mt-4 font-display text-2xl text-foreground">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl tracking-tight text-foreground">
          Esta página não carregou
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ocorreu um erro do nosso lado. Pode tentar novamente ou voltar ao início.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Tentar novamente
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-2.5 text-sm tracking-wide text-foreground transition-colors hover:bg-accent"
          >
            Voltar ao início
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Casa & Tendências · Cortinados, Mobiliário e Consultoria ao Domicílio" },
      {
        name: "description",
        content:
          "Cortinados por medida, mobiliário, iluminação e consultoria de interiores ao domicílio, em Santo Tirso e arredores. Medição, aconselhamento e instalação em sua casa.",
      },
      { property: "og:title", content: "Casa & Tendências · Decoração ao Domicílio" },
      {
        property: "og:description",
        content:
          "Cortinados por medida, mobiliário e consultoria de interiores. Vamos até sua casa para medir, aconselhar e instalar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500;600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const NAV = [
  { to: "/", label: "Início" },
  { to: "/servicos", label: "Serviços" },
  { to: "/portfolio", label: "Portefólio" },
  { to: "/contacto", label: "Contacto" },
] as const;

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoMark} alt="Casa & Tendências" className="h-11 w-11" />
          <span className="font-display text-xl tracking-wide text-foreground">
            Casa <span className="text-primary">&</span> Tendências
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="eyebrow text-muted-foreground transition-colors hover:text-foreground [&.active]:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={PHONE_TEL}
            className="hidden rounded-md border border-foreground/20 px-4 py-2 text-sm tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary sm:inline-flex lg:hidden xl:inline-flex"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm tracking-wide text-primary-foreground transition-colors hover:bg-primary/90"
          >
            WhatsApp
          </a>
        </div>
      </div>
      <nav className="flex items-center justify-center gap-6 border-t border-border/60 py-3 lg:hidden">
        {NAV.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="text-xs uppercase tracking-widest text-muted-foreground"
            activeProps={{ className: "text-primary" }}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoMark} alt="" className="h-10 w-10 rounded-md bg-white p-1" />
            <span className="font-display text-lg tracking-wide">Casa & Tendências</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-foreground/70">
            Cortinados por medida, mobiliário, iluminação e consultoria de interiores, com
            atendimento ao domicílio.
          </p>
        </div>
        <div>
          <p className="eyebrow text-ink-foreground/60">Contactos</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={PHONE_TEL} className="text-lg font-display text-ink-foreground transition-colors hover:text-primary">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="text-ink-foreground/80 transition-colors hover:text-primary"
              >
                WhatsApp · {PHONE_DISPLAY}
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/casaetendencias"
                target="_blank"
                rel="noreferrer"
                className="text-ink-foreground/80 transition-colors hover:text-primary"
              >
                Instagram · @casaetendencias
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-ink-foreground/60">Atendimento</p>
          <address className="mt-4 text-sm not-italic leading-relaxed text-ink-foreground/80">
            Rua Abel Alves de Figueiredo n.º 170<br />
            4780-384 Santo Tirso, Portugal
          </address>
          <p className="mt-3 text-xs leading-relaxed text-ink-foreground/60">
            Serviço por marcação prévia, nas nossas instalações ou no seu domicílio.
          </p>
        </div>
      </div>
      <div className="border-t border-ink-foreground/10 py-5 text-center text-xs text-ink-foreground/50">
        © {new Date().getFullYear()} Casa & Tendências. Todos os direitos reservados.
      </div>
    </footer>
  );
}

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-PT">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background">
        <SiteHeader />
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
