# Plano: Remoção do Prismic CMS

> Executar este plano **antes** de `plan-payload-supabase.md`.
> Objetivo: remover toda dependência do Prismic sem quebrar o build,
> substituindo chamadas por stubs que serão preenchidos pelo PayloadCMS.

---

## Dependências a Remover

```bash
pnpm remove @prismicio/client @prismicio/next @prismicio/react
pnpm remove --save-dev @slicemachine/adapter-next slice-machine-ui
```

Remover também do `package.json` o script `"slicemachine"`.

---

## Arquivos e Pastas a Deletar

```
src/prismicio.ts
src/prismicio-types.d.ts          # se existir
prismicio-types.d.ts              # raiz, se existir
slicemachine.config.json
src/slices/                       # pasta inteira
```

---

## Substituições de Imports e Componentes

### `<PrismicNextImage>` → `<Image>` do Next.js

**Antes:**
```tsx
import { PrismicNextImage } from '@prismicio/next'
<PrismicNextImage field={project.data.image} />
```

**Depois:**
```tsx
import Image from 'next/image'
<Image src={project.imageUrl} alt={project.name} fill />
```

> O campo `image` do Prismic retornava `{ url, alt, dimensions }`.
> No Payload, o campo de imagem retornará `{ url, alt, width, height }`.
> Adaptar os tipos conforme `plan-payload-supabase.md`.

### `<PrismicNextLink>` → `<Link>` do Next.js

**Antes:**
```tsx
import { PrismicNextLink } from '@prismicio/next'
<PrismicNextLink field={project.data.project_link} />
```

**Depois:**
```tsx
import Link from 'next/link'
<Link href={project.projectLink ?? '#'} target="_blank" />
```

### `<PrismicRichText>` → Componente próprio

**Antes:**
```tsx
import { PrismicRichText } from '@prismicio/react'
<PrismicRichText field={project.data.content} components={richTextComponents} />
```

**Depois:**
Criar `src/components/rich-text/index.tsx`:
```tsx
// Renderizador simples de rich text para o formato Lexical do Payload
// Ver plan-payload-supabase.md para o formato exato do campo content

export function RichText({ content }: { content: string | object }) {
  // PayloadCMS com Lexical retorna HTML serializado ou JSON
  // Implementar conforme a configuração do Payload (ver plan-payload-supabase.md)
  if (typeof content === 'string') {
    return <div dangerouslySetInnerHTML={{ __html: content }} />
  }
  return null
}
```

---

## Serviços a Substituir

### Arquivo: `src/services/prismic/projects.ts`

Deletar este arquivo e criar `src/services/payload/projects.ts` (ver `plan-payload-supabase.md`).

Enquanto o Payload não está configurado, criar um **stub** temporário para não quebrar o build:

**`src/services/payload/projects.ts` (stub temporário):**
```typescript
// STUB — substituir pelas chamadas reais ao Payload após plan-payload-supabase.md

export type Project = {
  id: string
  slug: string
  name: string
  isHighlighted: boolean
  projectLink?: string
  repositoryLink?: string
  yearStarted?: number
  yearFinished?: number
  stack: string[]
  imageUrl?: string
  bannerUrl?: string
  content?: string
}

export async function getAllProjects(max?: number): Promise<Project[]> {
  return []
}

export async function getHighlightedProjects(max?: number): Promise<Project[]> {
  return []
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  return null
}
```

---

## Atualizar Páginas que Usam o Serviço Prismic

### Páginas afetadas (buscar com `grep -r "prismic\|prismicio\|PrismicNext\|PrismicRich" src/`):

1. **`src/app/(portfolio)/portfolio/page.tsx`** (ou `components/recent-projects`, `selected-projects`, `all-projects`)
   - Substituir `import { getAllProjects, getHighlightedProjects } from '@/services/prismic/projects'`
   - Por: `import { getAllProjects, getHighlightedProjects } from '@/services/payload/projects'`
   - Adaptar tipos: `project.data.project_name` → `project.name`, etc.

2. **`src/app/(portfolio)/projects/[projectId]/page.tsx`**
   - Substituir `getProjectByUid(uid)` → `getProjectBySlug(slug)`
   - Adaptar: `params.projectId` se tornou `params.slug`
   - Substituir `PrismicNextImage` e `PrismicRichText` como descrito acima

3. **`src/app/providers.tsx`** (se contiver `<PrismicPreview>`)
   - Remover o componente `<PrismicPreview repositoryName="..." />`
   - Remover o import correspondente

### Mapeamento de campos (Prismic → Payload)

| Campo Prismic | Campo Payload | Notas |
|---|---|---|
| `project.data.project_name` | `project.name` | — |
| `project.data.project_link.url` | `project.projectLink` | string direta |
| `project.data.repository_link.url` | `project.repositoryLink` | string direta |
| `project.data.year_started` | `project.yearStarted` | — |
| `project.data.year_finished` | `project.yearFinished` | — |
| `project.data.is_highlighted` | `project.isHighlighted` | — |
| `project.data.stack[].technology` | `project.stack[]` | array de strings |
| `project.data.image.url` | `project.imageUrl` | via media collection |
| `project.data.banner.url` | `project.bannerUrl` | via media collection |
| `project.data.content` | `project.content` | Lexical JSON ou HTML |
| `project.uid` | `project.slug` | renomear parâmetro de rota |

---

## Atualizar Rota de Revalidação

**Arquivo:** `src/app/api/revalidate/route.ts`

**Antes:**
```typescript
revalidateTag('prismic')
```

**Depois:**
```typescript
revalidateTag('projects')
```

---

## Atualizar ISR Tags nas Funções de Fetch

Nos service functions do Payload, usar:
```typescript
fetch(url, {
  next: { tags: ['projects'] },
})
```

---

## Remover Tipos Gerados pelo Prismic

Deletar/ignorar `prismicio-types.d.ts` (auto-gerado pelo SliceMachine). Os tipos dos projetos passarão a vir de `src/services/payload/projects.ts`.

---

## Verificação Final

```bash
# Verificar que não há imports restantes do Prismic
grep -r "prismicio\|@prismicio\|PrismicNext\|PrismicRich\|slicemachine" src/ --include="*.tsx" --include="*.ts"
# Deve retornar vazio

pnpm lint        # sem erros
pnpm build       # build sem erros de tipos
```

---

## Ordem de Execução

1. `pnpm remove @prismicio/client @prismicio/next @prismicio/react`
2. `pnpm remove --save-dev @slicemachine/adapter-next slice-machine-ui`
3. Deletar arquivos Prismic
4. Criar stub `src/services/payload/projects.ts`
5. Substituir imports em todas as páginas afetadas
6. Substituir componentes Prismic (`PrismicNextImage`, `PrismicNextLink`, `PrismicRichText`)
7. Remover `<PrismicPreview>` do `providers.tsx`
8. Atualizar `revalidate/route.ts`
9. `pnpm lint && pnpm build` — validar
