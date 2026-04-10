# Plano: Implementação PayloadCMS v3 + Supabase

> Executar este plano **após** `plan-prismic-removal.md`.
> O stub de serviço criado lá será substituído pelas chamadas reais aqui.

---

## Dependências a Instalar

```bash
pnpm add payload @payloadcms/next @payloadcms/db-postgres @payloadcms/richtext-lexical
pnpm add sharp               # otimização de imagens (exigido pelo Payload)
pnpm add @payloadcms/ui      # componentes admin UI (incluso em @payloadcms/next)
```

> **Versões alvo**: PayloadCMS v3 (stable). Verificar versão atual com `npm info payload version`.

---

## Variáveis de Ambiente

Adicionar ao `.env.local` (e documentar no `.env.example`):

```env
# PayloadCMS
PAYLOAD_SECRET=sua-chave-secreta-longa-e-aleatoria   # mínimo 32 chars

# Supabase / Postgres
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.[PROJECT-REF].supabase.co:5432/postgres

# URL base do site (necessário para o Payload)
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### Como obter o DATABASE_URL no Supabase:
1. Acessar supabase.com → projeto → Settings → Database
2. Copiar "Connection string" no formato URI (não pooler)
3. Substituir `[YOUR-PASSWORD]` pela senha do banco

---

## Estrutura de Arquivos a Criar

```
payload.config.ts                          # config principal do Payload (raiz do projeto)
src/
  app/
    (payload)/
      admin/
        [[...segments]]/
          page.tsx                         # admin UI handler
          not-found.tsx
      api/
        [...slug]/
          route.ts                         # API routes handler
  collections/
    Projects.ts                            # collection de projetos
    Media.ts                               # collection de mídia/imagens
  services/
    payload/
      projects.ts                          # funções de query (substituir stub)
```

---

## 1. Criar `payload.config.ts` (raiz)

```typescript
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { nextAdminDashboard } from '@payloadcms/next/utilities'
import { Projects } from './src/collections/Projects'
import { Media } from './src/collections/Media'

export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '— Portfolio Admin',
    },
  },
  collections: [Projects, Media],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: 'src/payload-types.ts',
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
  sharp,
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL,
})
```

---

## 2. Criar Collection `Projects` (`src/collections/Projects.ts`)

Equivalente ao tipo `projects` do Prismic:

```typescript
import { CollectionConfig } from 'payload'

const STACK_OPTIONS = [
  { label: 'TypeScript', value: 'TypeScript' },
  { label: 'JavaScript', value: 'JavaScript' },
  { label: 'Next.js', value: 'Next.js' },
  { label: 'React', value: 'React' },
  { label: 'React Native', value: 'React Native' },
  { label: 'Node.js', value: 'Node.js' },
  { label: 'Go', value: 'Go' },
  { label: 'Python', value: 'Python' },
  { label: 'Kotlin', value: 'Kotlin' },
  { label: 'Java', value: 'Java' },
  { label: 'PostgreSQL', value: 'PostgreSQL' },
  { label: 'Docker', value: 'Docker' },
  { label: 'Tailwind CSS', value: 'Tailwind CSS' },
  { label: 'Framer Motion', value: 'Framer Motion' },
  { label: 'Styled Components', value: 'Styled Components' },
  { label: 'Redux', value: 'Redux' },
  { label: 'Jest', value: 'Jest' },
  { label: 'Cypress', value: 'Cypress' },
]

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'isHighlighted', 'yearStarted', 'yearFinished'],
  },
  access: {
    read: () => true,  // público
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Nome do Projeto',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      label: 'Slug (URL)',
      required: true,
      unique: true,
      admin: {
        description: 'Usado na URL: /projects/[slug]',
      },
    },
    {
      name: 'isHighlighted',
      type: 'checkbox',
      label: 'Projeto em Destaque',
      defaultValue: false,
    },
    {
      name: 'projectLink',
      type: 'text',
      label: 'Link do Projeto (URL)',
    },
    {
      name: 'repositoryLink',
      type: 'text',
      label: 'Link do Repositório (GitHub)',
    },
    {
      name: 'yearStarted',
      type: 'number',
      label: 'Ano de Início',
    },
    {
      name: 'yearFinished',
      type: 'number',
      label: 'Ano de Conclusão',
      admin: {
        description: 'Deixe em branco se ainda em andamento',
      },
    },
    {
      name: 'stack',
      type: 'select',
      label: 'Tecnologias',
      hasMany: true,
      options: STACK_OPTIONS,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagem do Card',
    },
    {
      name: 'banner',
      type: 'upload',
      relationTo: 'media',
      label: 'Banner (imagem grande)',
    },
    {
      name: 'content',
      type: 'richText',
      label: 'Conteúdo / Descrição',
    },
  ],
}
```

---

## 3. Criar Collection `Media` (`src/collections/Media.ts`)

```typescript
import { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      label: 'Texto Alternativo',
    },
  ],
  upload: {
    staticDir: 'public/media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 800,
        height: 600,
        position: 'centre',
      },
      {
        name: 'banner',
        width: 1920,
        height: 1080,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
}
```

---

## 4. Configurar Rotas Next.js do Admin

### `src/app/(payload)/admin/[[...segments]]/page.tsx`

```typescript
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import config from '@payload-config'

export const generateMetadata = ({ params }) => generatePageMetadata({ config, params })

const Page = ({ params, searchParams }) =>
  RootPage({ config, params, searchParams })

export default Page
```

### `src/app/(payload)/admin/[[...segments]]/not-found.tsx`

```typescript
import { NotFoundPage } from '@payloadcms/next/views'
import config from '@payload-config'

const NotFound = () => NotFoundPage({ config })
export default NotFound
```

### `src/app/(payload)/api/[...slug]/route.ts`

```typescript
import { REST_DELETE, REST_GET, REST_PATCH, REST_POST, REST_PUT } from '@payloadcms/next/routes'
import config from '@payload-config'

export const GET = REST_GET(config)
export const POST = REST_POST(config)
export const DELETE = REST_DELETE(config)
export const PATCH = REST_PATCH(config)
export const PUT = REST_PUT(config)
```

---

## 5. Adicionar `@payload-config` ao `tsconfig.json`

```json
{
  "compilerOptions": {
    "paths": {
      "@payload-config": ["./payload.config.ts"]
    }
  }
}
```

---

## 6. Criar Serviço de Projetos (`src/services/payload/projects.ts`)

Substitui o stub criado em `plan-prismic-removal.md`:

```typescript
import { getPayload } from 'payload'
import config from '@payload-config'

export type Project = {
  id: string
  slug: string
  name: string
  isHighlighted: boolean
  projectLink?: string | null
  repositoryLink?: string | null
  yearStarted?: number | null
  yearFinished?: number | null
  stack: string[]
  imageUrl?: string | null
  imageAlt?: string | null
  bannerUrl?: string | null
  content?: unknown  // Lexical JSON
}

async function getPayloadClient() {
  return getPayload({ config })
}

function toProject(doc: any): Project {
  return {
    id: String(doc.id),
    slug: doc.slug,
    name: doc.name,
    isHighlighted: doc.isHighlighted ?? false,
    projectLink: doc.projectLink ?? null,
    repositoryLink: doc.repositoryLink ?? null,
    yearStarted: doc.yearStarted ?? null,
    yearFinished: doc.yearFinished ?? null,
    stack: doc.stack ?? [],
    imageUrl: doc.image?.url ?? null,
    imageAlt: doc.image?.alt ?? doc.name,
    bannerUrl: doc.banner?.url ?? null,
    content: doc.content ?? null,
  }
}

export async function getAllProjects(max?: number): Promise<Project[]> {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'projects',
    limit: max ?? 100,
    sort: '-yearStarted',
  })
  return docs.map(toProject)
}

export async function getHighlightedProjects(max?: number): Promise<Project[]> {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'projects',
    where: { isHighlighted: { equals: true } },
    limit: max ?? 10,
    sort: '-yearStarted',
  })
  return docs.map(toProject)
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  if (!docs[0]) return null
  return toProject(docs[0])
}
```

---

## 7. Atualizar Rota Dinâmica de Projetos

**Arquivo:** `src/app/(portfolio)/projects/[projectId]/page.tsx`

Renomear pasta `[projectId]` → `[slug]` (ou manter e ajustar `params`):

```typescript
// Antes: getProjectByUid(params.projectId)
// Depois:
const project = await getProjectBySlug(params.slug)
```

---

## 8. Renderizador de Rich Text (Lexical)

O Payload com Lexical retorna um objeto JSON. Para renderizar no frontend:

```bash
pnpm add @payloadcms/richtext-lexical   # já instalado
```

**`src/components/rich-text/index.tsx`:**

```tsx
import {
  SerializedEditorState,
  convertLexicalToHTML,
  consolidateHTMLConverters,
  defaultHTMLConverters,
} from '@payloadcms/richtext-lexical/html'

interface RichTextProps {
  content: SerializedEditorState
  className?: string
}

export async function RichText({ content, className }: RichTextProps) {
  if (!content) return null

  const html = await convertLexicalToHTML({
    converters: consolidateHTMLConverters({ defaultConverters: defaultHTMLConverters }),
    data: content,
  })

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}
```

---

## 9. Migração de Conteúdo (Prismic → Payload)

### Opção A: Manual (recomendado para poucos projetos)
1. Acessar `/admin` no projeto rodando
2. Criar cada projeto manualmente no admin do Payload
3. Fazer upload das imagens

### Opção B: Script de migração
```typescript
// scripts/migrate-from-prismic.ts
// 1. Busca todos os projetos do Prismic via API
// 2. Cria cada projeto no Payload via REST API
// 3. Faz download e re-upload das imagens para o Payload Media

// Executar com: npx ts-node scripts/migrate-from-prismic.ts
```

---

## 10. Configurar Revalidação

**Arquivo:** `src/app/api/revalidate/route.ts`

O hook do Payload pode chamar este endpoint ao salvar projetos:

```typescript
import { revalidateTag } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-revalidate-secret')
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  revalidateTag('projects')
  return NextResponse.json({ revalidated: true })
}
```

Adicionar hook no `payload.config.ts`:
```typescript
hooks: {
  afterChange: [
    async () => {
      await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/revalidate`, {
        method: 'POST',
        headers: { 'x-revalidate-secret': process.env.REVALIDATE_SECRET || '' },
      })
    },
  ],
},
```

---

## 11. Gerar Tipos TypeScript

```bash
pnpm payload generate:types
# Gera src/payload-types.ts com tipos de todas as collections
```

---

## Verificação Final

```bash
pnpm dev
# Acessar http://localhost:3000/admin
# Criar primeiro usuário admin
# Criar um projeto de teste com imagem
# Verificar que aparece em /portfolio

pnpm build   # sem erros de tipos
pnpm lint    # sem warnings
```

---

## Ordem de Execução

1. `pnpm add payload @payloadcms/next @payloadcms/db-postgres @payloadcms/richtext-lexical sharp`
2. Criar `.env.local` com `DATABASE_URL`, `PAYLOAD_SECRET`, `NEXT_PUBLIC_SERVER_URL`
3. Criar `payload.config.ts`
4. Criar `src/collections/Projects.ts` e `src/collections/Media.ts`
5. Criar rotas admin: `(payload)/admin/[[...segments]]/page.tsx` e `not-found.tsx`
6. Criar rota API: `(payload)/api/[...slug]/route.ts`
7. Atualizar `tsconfig.json` com `@payload-config`
8. Substituir stub por `src/services/payload/projects.ts` real
9. Criar `src/components/rich-text/index.tsx`
10. `pnpm payload generate:types`
11. `pnpm dev` → criar admin user → testar
12. Migrar conteúdo (manual ou via script)
