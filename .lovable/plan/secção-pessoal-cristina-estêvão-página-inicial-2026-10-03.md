# Secção pessoal: Cristina Estêvão (página inicial)

Nova secção pessoal na home que dá rosto ao negócio: quem atende os clientes, há quanto tempo e porquê confiar. Tom íntimo, premium e arejado, em pt-PT, sem em dashes, sem inventar factos ou compromissos.

## 1. Retoque da fotografia

- Fonte: upload do utilizador (`user-uploads://mae.jpg`), retrato da Cristina a sorrir com papel de parede floral ao fundo.
- `imagegen--edit_image`: recentrar o rosto no enquadramento, equilibrar o balanço de brancos (luz quente de interior, tons de pele naturais), suavizar sombras e leve limpeza geral. Não alterar fisionomia, cabelo, roupa, brincos ou o fundo floral; sem texto.
- Guardar como `src/assets/cristina.jpg`, vertical 4:5 (1088x1360) para alinhar com as grelhas do site. Import direto como imagem do projeto.

## 2. Secção na home (`src/routes/index.tsx`)

- Posição: entre o teaser do portefólio ("Transformações recentes") e a faixa final de CTA.
- Layout split: retrato à esquerda (com moldura suave/deslocada no estilo do site), texto à direita.
- Conteúdo (a escrever em pt-PT, tom premium):
  - Eyebrow: "Quem está por trás" ou similar.
  - Título display: "Cristina Estêvão".
  - Texto pessoal: mais de 20 anos de experiência na decoração; aconselhou inúmeras casas e negócios locais na região de Santo Tirso; atendimento inteiramente personalizado, do primeiro contacto à instalação; é ela própria quem visita, mede e aconselha em casa do cliente.
  - Detalhe visual: assinatura/linha fina terracota, sem números inventados para além de "mais de 20 anos".
- CTA discreto no fim da secção: link para /contacto ("Falar com a Cristina" ou similar) mantendo o clique para telefone proeminente onde já existe.

## 3. Verificação

- Build OK (sem erros em /tmp/observability/build-errors.log).
- Playwright: secção visível na home, imagem carrega, sem erros de consola; verificar também em viewport móvel.
