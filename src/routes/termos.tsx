import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, LEGAL } from "@/components/LegalPage";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos e Condições · Casa & Tendências" },
      {
        name: "description",
        content:
          "Termos e condições de utilização do site e dos serviços de decoração ao domicílio da Casa & Tendências.",
      },
      { property: "og:title", content: "Termos e Condições · Casa & Tendências" },
      {
        property: "og:description",
        content: "Condições de utilização do site, marcações, propostas e resolução de litígios.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermosPage,
});

function TermosPage() {
  return (
    <LegalPage eyebrow="Informação legal" title="Termos e Condições">
      <h2>1. Identificação</h2>
      <p>
        Este site pertence a {LEGAL.company}, NIF {LEGAL.nif}, com sede em {LEGAL.address}, que
        opera sob a marca Casa & Tendências. Contacto: {LEGAL.phone} · {LEGAL.email}.
      </p>

      <h2>2. Utilização do site</h2>
      <p>
        O site tem caráter informativo e permite pedir contacto ou proposta. Ao utilizá-lo,
        compromete-se a fornecer informação verdadeira e a não fazer uso indevido do formulário.
        Procuramos manter a informação correta e atualizada, mas ela pode ser alterada sem aviso.
      </p>

      <h2>3. Marcações e visitas</h2>
      <p>
        As visitas ao domicílio e os atendimentos nas nossas instalações são feitos por marcação
        prévia, em data e hora combinadas consigo. Pedimos que nos avise com antecedência caso
        precise de remarcar.
      </p>

      <h2>4. Propostas e orçamentos</h2>
      <p>
        Os pedidos feitos no site não constituem encomenda. Após a visita e medição, apresentamos
        uma proposta escrita com materiais, prazos e preço. O trabalho só avança depois da sua
        aceitação expressa, nas condições aí indicadas. As fotografias de materiais e projetos são
        ilustrativas; podem existir pequenas diferenças de cor e textura nos materiais reais.
      </p>

      <h2>5. Propriedade intelectual</h2>
      <p>
        Os textos, fotografias, logótipo e restantes conteúdos do site pertencem à Casa &
        Tendências ou são usados com autorização. As marcas e logótipos de parceiros pertencem aos
        respetivos titulares. Não é permitida a sua reprodução sem autorização prévia.
      </p>

      <h2>6. Links externos</h2>
      <p>
        O site inclui links para serviços de terceiros, como WhatsApp e Instagram, que têm os seus
        próprios termos e políticas, pelos quais não somos responsáveis.
      </p>

      <h2>7. Dados pessoais</h2>
      <p>
        O tratamento dos seus dados é descrito na <Link to="/privacidade">Política de
        Privacidade</Link>.
      </p>

      <h2>8. Resolução de litígios</h2>
      <p>
        Em caso de reclamação, pode contactar-nos diretamente ou usar o{" "}
        <a href="https://www.livroreclamacoes.pt" target="_blank" rel="noreferrer">
          Livro de Reclamações Eletrónico
        </a>
        . Em caso de litígio de consumo, pode recorrer a uma entidade de Resolução Alternativa de
        Litígios, como o CICAP, Centro de Informação de Consumo e Arbitragem do Porto (
        <a href="https://www.cicap.pt" target="_blank" rel="noreferrer">
          www.cicap.pt
        </a>
        ). Mais informação no Portal do Consumidor,{" "}
        <a href="https://www.consumidor.gov.pt" target="_blank" rel="noreferrer">
          www.consumidor.gov.pt
        </a>
        .
      </p>

      <h2>9. Lei aplicável</h2>
      <p>Estes termos regem-se pela lei portuguesa.</p>
    </LegalPage>
  );
}
