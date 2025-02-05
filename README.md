# Nosso Amor em Números

A página romântica feita com Next.js para celebrar histórias de amor – desenvolvida com React, Tailwind CSS e várias bibliotecas extras.

## Visão Geral

O projeto exibe uma contagem regressiva a partir de uma data de início (configurada pela variável de ambiente **START_DATE**), junto com animações, mensagens de amor e um carrossel de imagens.  
Ele também vem com um script para converter imagens no formato **HEIC** para **JPEG** usando **Sharp** e **heic-convert**.

## Recursos

- **Contagem Regressiva dinâmico** – Veja o tempo decorrido desde o início do relacionamento (**Timer**).
- **Mensagens de Amor** – Exibe mensagens românticas de um arquivo JSON (**LoveMessages**).
- **Carrossel de Imagens** – Mostra imagens da pasta **images** com efeito de autoplay (**Carousel**).
- **Efeitos Visuais** – Animações com partículas românticas que flutuam pela tela (**RomanticParticles**).

## Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **NPM** ou **Yarn**

## Instalação

1. **Clone o repositório**
2. **Instale as dependências** usando NPM ou Yarn

## Configuração

Crie um arquivo **.env.local** na raiz do projeto e configure a variável **START_DATE**.

## Desenvolvimento

O script de desenvolvimento inclui a conversão das imagens HEIC para JPEG. Para iniciar o servidor de desenvolvimento, execute:

```
npm run dev
```

Isso executará o script **convert-heic** antes de iniciar o Next.js.

Abra [http://localhost:3000](http://localhost:3000) para visualizar o site.

## Build & Produção

Para construir o projeto (incluindo a conversão de imagens):

```
npm run build
```

Depois de construir, inicie o servidor de produção com:

```
npm run start
```

## Hospedagem no Vercel

Você pode hospedar este projeto no **Vercel** facilmente:

1. Crie uma conta e conecte seu repositório.
2. Verifique se a variável de ambiente **START_DATE** está configurada em _Settings > Environment Variables_ no dashboard do Vercel.
3. Clique em **Deploy** para iniciar o processo.  
   Para mais detalhes sobre deploy com Next.js, consulte a [documentação do Next.js sobre deploy](https://nextjs.org/docs).

## Scripts Disponíveis

- **dev**: Inicia o servidor de desenvolvimento e converte imagens HEIC.  
  `npm run dev`
- **build**: Converte as imagens HEIC e gera a build para produção.  
  `npm run build`
- **start**: Inicia o servidor de produção.  
  `npm start`
- **tsc**: Realiza a checagem de typescript sem gerar arquivos de saída.  
  `npm run tsc`
- **format**: Formata o código usando as configurações do Biome.  
  `npm run format`
- **convert-heic**: Executa o script para converter arquivos HEIC para JPEG.  
  `npm run convert-heic`

## Estrutura do Projeto

- **/src/app**: Contém as páginas e layouts do Next.js (_page.tsx_, _layout.tsx_, _globals.css_).
- **/src/components**: Componentes UI reutilizáveis como _Timer_, _LoveMessages_, _Carousel_ e _RomanticParticles_.
- **/src/lib**: Utilitários e helpers, como a função _cn_ para combinar classes.
- **/public**: Arquivos estáticos, incluindo imagens e o arquivo _messages.json_ com mensagens de amor.
- **/scripts**: Contém o script de conversão de imagens HEIC (_convert-heic.js_).
- **Configuração & Assets**: Arquivos como _next.config.ts_, _postcss.config.mjs_, _tailwind.config.ts_ e _biome.json_.

## Licença

Este projeto é privado. Sinta-se livre para adaptá-lo conforme suas necessidades.
