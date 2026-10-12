import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Política de Cookies · Casa & Tendências" },
      {
        name: "description",
        content:
          "A Casa & Tendências não usa cookies de rastreamento nem publicidade. Saiba o que é guardado no seu navegador.",
      },
      { property: "og:title", content: "Política de Cookies · Casa & Tendências" },
      {
        property: "og:description",
        content: "Sem cookies de rastreamento nem publicidade. Apenas o estritamente necessário.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalPage eyebrow="Informação legal" title="Política de Cookies">
      <h2>O que são cookies</h2>
      <p>
        Cookies são pequenos ficheiros que um site guarda no seu navegador. Podem servir para o site
        funcionar ou para medir e acompanhar a navegação.
      </p>

      <h2>Que cookies usamos</h2>
      <p>
        Este site <strong>não utiliza cookies de estatística, publicidade ou redes sociais</strong>,
        nem ferramentas como Google Analytics ou Facebook Pixel. Os tipos de letra e as imagens são
        carregados a partir do nosso próprio site, sem envio de dados a terceiros.
      </p>
      <p>
        Apenas pode ser guardada no seu navegador informação estritamente necessária ao
        funcionamento técnico do site, como a sua escolha sobre cookies, caso esta lhe seja pedida.
        Este tipo de armazenamento não exige consentimento, nos termos da Lei n.º 41/2004.
      </p>

      <h2>Links externos</h2>
      <p>
        Ao clicar nos links para WhatsApp ou Instagram, sai deste site e passa a aplicar-se a
        política de cookies da Meta.
      </p>

      <h2>Se esta política mudar</h2>
      <p>
        Se no futuro adicionarmos ferramentas de estatística, pediremos primeiro o seu
        consentimento e só as ativaremos se aceitar. Pode alterar a sua escolha a qualquer momento.
      </p>

      <h2>Como gerir cookies no navegador</h2>
      <p>
        Pode apagar ou bloquear cookies nas definições do seu navegador. Mais informação sobre os
        seus dados na <Link to="/privacidade">Política de Privacidade</Link>.
      </p>
    </LegalPage>
  );
}
