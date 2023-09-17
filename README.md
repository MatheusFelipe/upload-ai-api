# upload-ai-api

Backend da aplicação desenvolvida na NLW IA da [Rocketseat], a [upload-ai-web]

## Funcionalidades

- Armazenar modelos iniciais de prompts
- Armazenar faixas de áudio de vídeos
- Gerar a transcrição das faixas de áudio utilizando a API da [OpenAI]
- Gerar texto (ex.: sugestões de títulos e descrições de vídeos) a partir de um modelo de prompt, da temperatura e da transcrição da faixa de áudio

## Ferramentas

- [Node.js] - Ambiente de runtime Javascript
- [Fastify] - Framework web para Node.js
- [Prisma] - ORM para Node.js
- [openai-node] - biblioteca para acesso à API da [OpenAI] via Typescript ou Javascript
- [ai] - pacote da [Vercel] para streaming de APIs de IA
- [zod] - validação de formulários

## Pré-requisitos

- [Node.js](https://nodejs.org/) v18+
- [pnpm] v8+ (ou outro gerenciador de pacotes à sua escolha)
- [PostgreSQL] v15+ (ou outro banco de dados compatível com o [Prisma])
- Créditos e chave de API na [OpenAI]

## Variáveis de ambiente

```sh
cp .env.example .env
```

### Valores

- `DATABASE_URL` - string de conexão com o banco de dados
- `OPENAI_KEY` - chave de API na [OpenAI]

## Instalação

```sh
pnpm install --frozen-lockfile
```

Caso o [Prisma] não tenha gerado o seu client:

```sh
pnpm prisma generate client
```

### Migrations e seeds

```sh
pnpm prisma migrate dev # novas migrations
pnpm prisma migrate deploy # produção
pnpm prisma db seed
```

## Execução

```sh
pnpm run dev
```

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Rocketseat]: <https://www.rocketseat.com.br/>
   [OpenAI]: <https://openai.com/>
   [Fastify]: <https://fastify.dev/>
   [Node.js]: <https://nodejs.org/>
   [Prisma]: <https://www.prisma.io/>
   [openai-node]: <https://github.com/openai/openai-node>
   [ai]: <https://www.npmjs.com/package/ai>
   [Vercel]: <https://vercel.com/>
   [zod]: <https://zod.dev/>
   [pnpm]: <https://pnpm.io/pt/>
   [PostgreSQL]: <https://www.postgresql.org/>
   [upload-ai-web]: <https://github.com/MatheusFelipe/upload-ai-web>
