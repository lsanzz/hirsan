## Sobre a Hirsan

A Hirsan cria sites profissionais para pequenas e médias empresas que precisam ser encontradas no Google e atender bem quem chega pelo celular. O foco são **landing pages** e **sites de uma página com seções**, além de sites com páginas internas para quem precisa de mais conteúdo.

O trabalho cobre o caminho inteiro, com uma equipe só:

- **Texto e SEO local**: títulos, descrições e conteúdo pensados para o cliente certo encontrar a empresa.
- **Design sob medida**: visual próprio para cada marca, limpo e fácil de ler no celular.
- **Prévia antes de publicar**: o cliente vê o site funcionando e aprova antes de ir ao ar.
- **Publicação**: domínio, hospedagem e certificado de segurança configurados.
- **Google Meu Negócio**: ficha da empresa organizada para aparecer na busca e no mapa.
- **Manutenção mensal**: trocas de texto, foto, telefone e horário sem o cliente precisar mexer em nada.

## Sobre este repositório

Este é o código do site da própria Hirsan, a vitrine da marca. Ele apresenta:

- **Abertura animada** com a marca, respeitando quem prefere menos movimento na tela.
- **Serviços**: o que um site precisa, do conteúdo à publicação.
- **Projetos entregues**: sites desenvolvidos pelo estúdio em produção.
- **Processo**: do primeiro contato ao site no ar, passo a passo, com uma demonstração visual.
- **Dúvidas frequentes**: preço, textos, prévia, domínio e manutenção.
- **Contato direto**: chamada para conversar e pedir uma proposta.

## Princípios

- **Celular primeiro**: tudo pensado para telas pequenas, sem rolagem lateral e com toques fáceis.
- **Leve e rápido**: site estático, sem frameworks pesados no navegador e com poucas requisições.
- **Acessível**: contraste conferido, navegação por teclado, link para pular ao conteúdo e textos alternativos nas imagens.
- **Encontrável**: estrutura semântica, título e descrição pensados para busca e para compartilhamento.
- **Minimalista**: paleta quase toda em preto e cinza, com um tom pêssego pontual, e tipografia editorial.

## Identidade visual

| | |
|---|---|
| **Marca** | wordmark `hirsan.` em caixa baixa, com ponto final, e o símbolo `hs.` |
| **Cores** | Ink Black `#17191C`, Paper White `#FFFFFF`, Mist Gray `#F2F2F3`, Blush Peach `#FBE1D1` |
| **Tipografia** | Source Serif 4 nos títulos e Inter no texto, ambas fontes livres (SIL Open Font License) |
| **Arquivos de marca** | logos e favicon em SVG, com letras convertidas em contornos para aparecer igual em qualquer tela |

## Tecnologia

| | |
|---|---|
| **Framework** | [Astro](https://astro.build), gerando HTML estático |
| **Estilo** | CSS próprio com variáveis de design (tokens), sem biblioteca de componentes |
| **Hospedagem** | [Cloudflare Pages](https://pages.cloudflare.com) |
| **Domínio** | hirsan.com.br, com HTTPS e redirecionamento do `www` |

## Estrutura

```
src/
  pages/        página inicial do site
  layouts/      estrutura base (cabeçalho, metadados, fontes)
  components/   cabeçalho, logo, abertura animada e demonstração do processo
  styles/       tokens de cor, tipografia e estilos globais
  assets/       arquivos da marca usados no site
public/         favicon, ícones e logos dos projetos entregues
```

## Direitos

© 2026 Hirsan. Todos os direitos reservados. A marca, os textos e o design deste site pertencem à Hirsan. Os logos de projetos entregues pertencem às respectivas empresas.
