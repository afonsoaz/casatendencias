import { createFileRoute, Link } from "@tanstack/react-router";
import { LegalPage, LEGAL } from "@/components/LegalPage";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade · Casa & Tendências" },
      {
        name: "description",
        content:
          "Como a Casa & Tendências recolhe, utiliza e protege os seus dados pessoais, de acordo com o RGPD.",
      },
      { property: "og:title", content: "Política de Privacidade · Casa & Tendências" },
      {
        property: "og:description",
        content: "Saiba que dados recolhemos, para quê e quais os seus direitos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: PrivacidadePage,
});

function PrivacidadePage() {
  return (
    <LegalPage eyebrow="Informação legal" title="Política de Privacidade">
      <p>
        A sua privacidade é importante para nós. Esta política explica como tratamos os dados
        pessoais que nos confia através deste site, nos termos do Regulamento Geral sobre a
        Proteção de Dados (RGPD, Regulamento (UE) 2016/679) e da Lei n.º 58/2019.
      </p>

      <h2>1. Responsável pelo tratamento</h2>
      <p>
        {LEGAL.company}, {LEGAL.legalForm.toLowerCase()}, NIF {LEGAL.nif}, com atividade em{" "}
        {LEGAL.address}, que opera sob a marca Casa & Tendências. Contacto: {LEGAL.email} ·{" "}
        {LEGAL.phone}.
      </p>

      <h2>2. Que dados recolhemos</h2>
      <p>Apenas os dados que nos fornece voluntariamente no formulário de contacto:</p>
      <ul>
        <li>Nome e telefone (obrigatórios);</li>
        <li>Email (opcional);</li>
        <li>Localização (localidade da sua casa);</li>
        <li>Serviços pretendidos e a descrição do seu projeto.</li>
      </ul>
      <p>
        Se nos contactar por telefone, WhatsApp ou Instagram, tratamos também os dados que
        partilhar nessa conversa. Este site não utiliza ferramentas de estatística, publicidade
        ou rastreamento.
      </p>

      <h2>3. Para que utilizamos os dados</h2>
      <ul>
        <li>Responder ao seu pedido e agendar a visita ou reunião;</li>
        <li>Preparar e apresentar uma proposta;</li>
        <li>Cumprir obrigações legais, por exemplo de faturação, caso venha a ser cliente.</li>
      </ul>
      <p>
        A base legal é o seu consentimento e as diligências pré-contratuais a seu pedido (artigo
        6.º, n.º 1, alíneas a) e b) do RGPD). Não enviamos publicidade sem o seu consentimento
        expresso e não vendemos os seus dados.
      </p>

      <h2>4. Durante quanto tempo</h2>
      <p>
        Os pedidos de contacto que não resultem em trabalho são conservados durante um máximo de
        24 meses. Os dados de clientes são conservados pelo prazo exigido pela lei fiscal e
        contabilística (atualmente 10 anos).
      </p>

      <h2>5. Onde ficam guardados e quem tem acesso</h2>
      <p>
        Os pedidos ficam guardados num serviço de alojamento seguro na nuvem, com acesso restrito à
        equipa da Casa & Tendências. Os nossos prestadores de alojamento atuam como
        subcontratantes, ao abrigo de contratos que garantem a proteção dos dados. Caso algum
        tratamento ocorra fora do Espaço Económico Europeu, é feito com as garantias previstas no
        RGPD, como as cláusulas contratuais-tipo da Comissão Europeia.
      </p>
      <p>
        Se usar o WhatsApp ou o Instagram para nos contactar, esses serviços são geridos de acordo com as respetivas políticas de privacidade.
      </p>

      <h2>6. Os seus direitos</h2>
      <p>Pode, a qualquer momento e gratuitamente:</p>
      <ul>
        <li>Aceder aos seus dados e obter uma cópia;</li>
        <li>Pedir a sua retificação ou apagamento;</li>
        <li>Limitar ou opor-se ao tratamento;</li>
        <li>Pedir a portabilidade dos dados;</li>
        <li>Retirar o consentimento, sem afetar o tratamento já realizado.</li>
      </ul>
      <p>
        Para exercer estes direitos, contacte-nos através de {LEGAL.email}. Tem ainda o direito de
        apresentar reclamação à Comissão Nacional de Proteção de Dados (CNPD), em{" "}
        <a href="https://www.cnpd.pt" target="_blank" rel="noreferrer">
          www.cnpd.pt
        </a>
        .
      </p>

      <h2>7. Cookies</h2>
      <p>
        Saiba mais na nossa <Link to="/cookies">Política de Cookies</Link>.
      </p>

      <h2>8. Alterações</h2>
      <p>
        Podemos atualizar esta política. A versão em vigor está sempre disponível nesta página, com
        a data da última atualização.
      </p>
    </LegalPage>
  );
}
