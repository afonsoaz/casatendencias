# Privacidade, termos, cookies e acessibilidade

## O que encontrei
- **Rastreamento:** o site não tem Google Analytics, pixels do Facebook nem outros rastreadores. Não guarda cookies próprios.
- **Serviços externos:** o único é o Google Fonts (tipos de letra carregados dos servidores da Google), que envia o endereço IP do visitante à Google. Na UE isto já gerou multas.
- **Formulário:** guarda nome, telefone, email, localização, serviços e mensagem. Não há aviso de privacidade junto ao botão.
- **Imagens:** fotografias reais da Casa & Tendências, imagens de exemplo geradas por IA (sem direitos de autor de terceiros) e logótipos de marcas parceiras (uso legítimo enquanto revendedora; convém confirmar com as marcas).
- **Embeds:** não há vídeos, mapas ou widgets de Instagram embebidos; Instagram e WhatsApp são apenas links.

## O que vou fazer
1. **Página "Política de Privacidade"** (/privacidade), conforme o RGPD: quem é o responsável, que dados recolhemos no formulário, para quê, durante quanto tempo, onde ficam guardados, direitos do cliente (acesso, retificação, apagamento) e queixa à CNPD.
2. **Página "Termos e Condições"** (/termos): uso do site, marcações e visitas ao domicílio, propostas e orçamentos, propriedade intelectual, lei portuguesa e resolução de litígios (com a referência obrigatória ao Livro de Reclamações e entidades RAL).
3. **Página "Política de Cookies"** (/cookies): explica que o site usa apenas o estritamente necessário e não usa cookies de rastreamento.
4. **Consentimento:** como não há rastreamento, um banner de cookies não é exigido. Coloco os tipos de letra a carregar a partir do próprio site, para não enviar dados à Google sem consentimento. Fica preparado um banner discreto (Aceitar / Recusar) que só ativa se, no futuro, forem adicionadas ferramentas de estatística.
5. **Formulário:** caixa obrigatória "Li e aceito a Política de Privacidade" com link.
6. **Rodapé:** links para as três páginas e para o Livro de Reclamações eletrónico.
7. **Acessibilidade:**
   - Verificar o contraste de todos os textos (incluindo o rosa claro "ao detalhe", textos cinzentos e textos sobre fundo escuro) e escurecer o que não cumprir o nível AA.
   - Descrições de imagens mais específicas (cada foto do portefólio e dos serviços descreve o que mostra; logótipos com "Logótipo da marca X").
   - Contorno visível ao navegar por teclado, link "Saltar para o conteúdo", tamanhos mínimos de toque no telemóvel, carrossel de marcas pausável e ignorado pelos leitores de ecrã na cópia duplicada.
8. Verificar tudo no computador e telemóvel.

## Preciso de confirmar consigo
Para as páginas legais faltam dados que não posso inventar: nome legal da empresa, NIF, e email de contacto para pedidos de privacidade. Vou deixar espaços marcados e indicar-lhe quais preencher.

Nota: estes textos são um modelo sólido, mas não substituem a revisão de um advogado.

## Detalhes técnicos
- Novas rotas: src/routes/privacidade.tsx, termos.tsx, cookies.tsx, cada uma com head() próprio.
- Fontes: instalar @fontsource/cormorant-garamond e @fontsource/jost, remover os links do Google Fonts em __root.tsx.
- Componente de consentimento guardado em localStorage, sem carregar scripts enquanto não houver consentimento.
- Checkbox de consentimento no formulário (validação apenas no cliente; sem alteração à base de dados).
- Auditoria de contraste com axe-core via Playwright.
