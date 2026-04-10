# Plano: Aplicação do Design System no Tailwind + globals.css

> Executar este plano **primeiro** — antes de prismic-removal e payload.
> Estabelece a base visual do projeto inspirada em watracz.com.
> Consultar `plan-design-system.md` como referência de valores.

---

## Arquivos Modificados

```
src/app/layout.tsx              # Trocar fonte + aplicar variável CSS
src/styles/globals.css          # Reescrever tokens Tailwind e CSS base
src/app/(portfolio)/layout.tsx  # Se existir layout específico do portfolio
src/app/(bussiness)/layout.tsx  # Se existir layout específico do studio
```

---

## 1. Atualizar Fonte em `src/app/layout.tsx`

**Antes:**
```tsx
import { Montserrat } from 'next/font/google'
const montserrat = Montserrat({ subsets: ['latin'], ... })
```

**Depois:**
```tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})

// No JSX, trocar className para usar a variável:
// <html lang="pt-BR" className={`${inter.variable}`}>
```

> **Atenção**: manter as outras classes que existiam no `<html>` (scroll-smooth, etc).
> Verificar se há uso de `font-montserrat` em classes Tailwind e substituir por `font-sans`.

---

## 2. Reescrever `src/styles/globals.css`

Substituir o conteúdo atual pelo seguinte:

```css
@import 'tailwindcss';

/* ─── Design Tokens ──────────────────────────────────────────── */
@theme {
  /* Fonte */
  --font-sans: var(--font-inter), ui-sans-serif, system-ui, sans-serif;

  /* Cores brutas (watracz palette) */
  --color-darkest:   #0f141e;
  --color-dark-alt:  #0e1322;
  --color-gray-dark: #7a808c;
  --color-gray-mid:  #878a8f;
  --color-gray-300:  #ced2d9;
  --color-gray-200:  #cfd0d2;
  --color-gray-100:  #d5d5d7;
  --color-surface:   #f3f3f5;
  --color-surface-2: #f7f7f7;
  --color-white:     #ffffff;
  --color-accent:    #007aff;
  --color-error:     #ff5959;

  /* Cores semânticas (mapeadas para shadcn/ui pattern) */
  --color-background:           #ffffff;
  --color-foreground:           #0f141e;
  --color-muted:                #f3f3f5;
  --color-muted-foreground:     #878a8f;
  --color-border:               #e7e8e9;
  --color-input:                #e7e8e9;
  --color-ring:                 #0f141e;
  --color-primary:              #0f141e;
  --color-primary-foreground:   #ffffff;
  --color-secondary:            #f3f3f5;
  --color-secondary-foreground: #0f141e;
  --color-accent-color:         #007aff;
  --color-accent-foreground:    #ffffff;
  --color-destructive:          #ff5959;
  --color-destructive-foreground: #ffffff;
  --color-card:                 #ffffff;
  --color-card-foreground:      #0f141e;
  --color-popover:              #ffffff;
  --color-popover-foreground:   #0f141e;

  /* Overlays */
  --color-overlay-dark-30:  color-mix(in srgb, #0f141e 30%, transparent);
  --color-overlay-dark-90:  color-mix(in srgb, #0f141e 90%, transparent);
  --color-overlay-dark-95:  color-mix(in srgb, #0f141e 95%, transparent);
  --color-overlay-dark-98:  color-mix(in srgb, #0f141e 98%, transparent);
  --color-overlay-white-95: color-mix(in srgb, #ffffff 95%, transparent);

  /* Border radius — estilo editorial (reto) */
  --radius:    0px;
  --radius-lg: 0px;
  --radius-md: 0px;
  --radius-sm: 0px;
  --radius-pill: 23px;

  /* Easing */
  --ease-default: cubic-bezier(0.3, 0, 0.5, 1);

  /* Container */
  --container-max: 1480px;
  --container-px:  2.5rem;  /* 40px */

  /* Botão */
  --btn-height: 46px;

  /* Alturas customizadas legadas (manter compatibilidade) */
  --height-17: 4.25rem;
}

/* ─── Compatibilidade com bordas (Tailwind v4) ──────────────── */
@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-border);
  }
}

/* ─── Utilitários customizados ───────────────────────────────── */
@utility container {
  margin-inline: auto;
  max-width: var(--container-max);
  padding-inline: var(--container-px);
}

@utility gradient-text {
  background: linear-gradient(to bottom left, var(--color-accent), #75bfff);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

/* ─── Base Layer ─────────────────────────────────────────────── */
@layer base {
  html {
    scroll-behavior: smooth;
    scroll-padding-top: 6rem;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    font-weight: 500;
    overflow-x: hidden;
    line-height: 1.5625rem;
  }

  /* Seleção de texto */
  ::selection {
    background-color: #878a8f;
    color: #ffffff;
  }

  /* Scrollbar customizada */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: var(--color-surface);
  }
  ::-webkit-scrollbar-thumb {
    background: var(--color-gray-200);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-gray-mid);
  }

  /* Headings */
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-sans);
  }

  h1 {
    font-size: clamp(2.125rem, 4vw, 2.75rem);
    line-height: 1.15;
    font-weight: 800;
    letter-spacing: -0.01em;
    color: var(--color-foreground);
  }

  h2 {
    font-size: clamp(1.75rem, 3vw, 2rem);
    line-height: 1.25;
    font-weight: 800;
    letter-spacing: -0.01em;
    color: var(--color-foreground);
  }

  h3 {
    font-size: clamp(1.125rem, 2vw, 1.375rem);
    line-height: 1.36;
    font-weight: 800;
    color: var(--color-foreground);
  }

  h4 {
    font-size: 1.125rem;
    line-height: 1.5625rem;
    font-weight: 800;
    color: var(--color-foreground);
  }

  h5 {
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.4em;
    color: var(--color-muted-foreground);
  }

  p {
    font-size: 1rem;
    line-height: 1.5625rem;
    font-weight: 500;
    color: var(--color-foreground);
  }

  p.small, .text-small {
    font-size: 0.8125rem;
    line-height: 1.25rem;
    font-weight: 400;
    letter-spacing: 0.03em;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s var(--ease-default);
  }

  button {
    cursor: pointer;
  }

  * {
    outline-color: color-mix(in srgb, var(--color-ring) 50%, transparent);
  }
}
```

---

## 3. Remover Referências ao Tema Escuro Antigo

Buscar e substituir nos componentes:

| Buscar | Substituir |
|---|---|
| `bg-g-background` | `bg-background` |
| `text-white` (globais) | `text-foreground` |
| `text-g-light` | `text-foreground` |
| `text-g-light-gray` | `text-muted-foreground` |
| `text-g-blue` | `text-accent` |
| `bg-g-dark-gray` | `bg-muted` |
| `bg-g-medium-gray` | `bg-muted` |
| `border-g-medium-gray` | `border-border` |
| `gradient-text` | manter (atualizado para novo accent) |

> **Atenção**: Fazer um `grep -r "g-background\|g-blue\|g-light\|g-dark\|g-medium" src/` para encontrar todos os usos.

---

## 4. Atualizar Componentes de UI (`src/components/ui/`)

### `button.tsx`
Atualizar variantes usando os novos tokens:
```tsx
// variant "default": bg-primary text-primary-foreground
// variant "secondary": bg-secondary text-secondary-foreground  
// variant "outline": border border-border bg-transparent hover:bg-muted
// variant "ghost": hover:bg-muted
// Adicionar variant "pill": rounded-[23px] h-[46px] font-extrabold
```

### `dialog.tsx`, `tabs.tsx`, `tooltip.tsx`
Verificar se usam cores hardcoded do tema escuro e substituir pelos tokens semânticos.

---

## 5. Atualizar Layout do Portfolio

**`src/app/(portfolio)/layout.tsx`** (se existir):
- Remover qualquer `dark` class aplicada ao `<html>` ou `<body>`
- O layout agora é light por padrão via globals.css

**Componentes de navegação:**
- Header: adicionar `backdrop-blur-sm` e `bg-[var(--color-overlay-white-95)]` quando scrollado
- Nav overlay mobile: usar `bg-[var(--color-overlay-dark-98)]` com texto `text-[#878a8f]` → `hover:text-white`

---

## 6. Atualizar Layout do Studio

**`src/app/(bussiness)/studio/`**:
- Studio já era light — verificar se tem classes de cor conflitantes com o novo sistema
- Remover qualquer tema escuro residual
- Usar os mesmos tokens semânticos

---

## 7. Verificar Componentes de Animação

`src/components/animations/marquee.tsx`:
- Verificar se usa `text-white` hardcoded (deve ser `text-foreground`)
- Cards do marquee: no hover, usar `bg-[var(--color-overlay-dark-90)]` ao invés de classe hardcoded

---

## 8. Adicionar Classe `.h1-large` (utilitário)

Para headings hero maiores que o h1 padrão:

```css
/* em globals.css, dentro de @layer base ou como @utility */
@utility h1-large {
  font-size: clamp(3.875rem, 6vw, 4.5rem);
  line-height: 1.04;
  font-weight: 800;
  letter-spacing: -0.01em;
}
```

---

## 9. Variável de Easing no Tailwind

Para usar `ease-[var(--ease-default)]` nas classes:

```css
/* No @theme, adicionar: */
--ease-watracz: cubic-bezier(0.3, 0, 0.5, 1);
```

Uso: `transition-all duration-200 ease-[cubic-bezier(0.3,0,0.5,1)]`

---

## Verificação Final

```bash
# Buscar tokens antigos que ainda existam
grep -r "g-background\|g-blue\|g-light\|g-dark\|g-medium\|030917\|1b6cff\|e9e5ff" src/ --include="*.tsx" --include="*.css"

pnpm dev
# Verificar:
# - / (hub page): fundo branco, texto escuro
# - /portfolio: fundo branco, tipografia Inter
# - /studio: sem regressões
# - Modo escuro do browser não quebra o layout (remover next-themes se não for usado)

pnpm lint
pnpm build
```

---

## Ordem de Execução

1. Atualizar `src/app/layout.tsx` com Inter
2. Reescrever `src/styles/globals.css` com novos tokens
3. Buscar e substituir classes antigas (`bg-g-*`, `text-g-*`)
4. Atualizar componentes `ui/button.tsx` e demais
5. Verificar layouts portfolio e studio
6. `pnpm dev` para revisão visual
7. `pnpm lint && pnpm build`
