# Design System — Referência (inspirado em watracz.com)

> Documento de referência permanente. Subagents devem consultar este arquivo ao
> tomar decisões de estilo, cor, tipografia e layout.

---

## Fonte

| Papel | Família | Provider |
|---|---|---|
| Principal | `Inter` | `next/font/google` |
| Fallback | `sans-serif` | — |

**Pesos a importar**: 400, 500, 700, 800

```tsx
// src/app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
})
```

---

## Paleta de Cores

### Cores Base

| Token CSS | Valor | Uso |
|---|---|---|
| `--color-darkest` | `#0f141e` | Texto principal, nav overlay, backgrounds escuros |
| `--color-dark-alt` | `#0e1322` | Variante escura alternativa |
| `--color-gray-dark` | `#7a808c` | Texto secundário escuro |
| `--color-gray-mid` | `#878a8f` | Texto muted, labels, h5, footer |
| `--color-gray-300` | `#ced2d9` | — |
| `--color-gray-200` | `#cfd0d2` | Texto em rich text em dark context |
| `--color-gray-100` | `#d5d5d7` | — |
| `--color-border` | `#e7e8e9` | Bordas sutis, separadores |
| `--color-surface` | `#f3f3f5` | Fundo de cards, inputs |
| `--color-surface-2` | `#f7f7f7` | Fundo alternativo de seções |
| `--color-white` | `#ffffff` | Fundo principal do site |
| `--color-accent` | `#007aff` | Azul accent (CTAs, links, destaques) |
| `--color-error` | `#ff5959` | Estados de erro em formulários |

### Cores Semânticas (mapeamento Tailwind)

| Semântico | Valor |
|---|---|
| `background` | `#ffffff` |
| `foreground` | `#0f141e` |
| `muted` | `#f3f3f5` |
| `muted-foreground` | `#878a8f` |
| `border` | `#e7e8e9` |
| `accent` | `#007aff` |
| `accent-foreground` | `#ffffff` |
| `destructive` | `#ff5959` |

### Overlays

| Token | Valor | Uso |
|---|---|---|
| `--overlay-dark-30` | `rgba(15,20,30,0.30)` | Overlay leve |
| `--overlay-dark-90` | `rgba(15,20,30,0.90)` | Project card hover |
| `--overlay-dark-95` | `rgba(15,20,30,0.95)` | Nav overlay |
| `--overlay-dark-98` | `rgba(15,20,30,0.98)` | Nav fullscreen |
| `--overlay-white-95` | `rgba(255,255,255,0.95)` | Header frosted |

### Cor de seleção de texto
```css
::selection {
  background-color: #878a8f;
  color: #ffffff;
}
```

---

## Escala Tipográfica

> Valores extraídos diretamente do CSS compilado do watracz.com.

| Elemento | Mobile | Tablet+ | Desktop | Line-height (desktop) | Letter-spacing | Peso |
|---|---|---|---|---|---|---|
| `h1.large` | `3.875rem` | `3.875rem` | `4.5rem` | `4.6875rem` | `-0.01em` | 800 |
| `h1` | `2.125rem` | `2.75rem` | `2.75rem` | `3.125rem` | `-0.01em` | 800 |
| `h2` | `1.75rem` | `2rem` | `2rem` | `2.5rem` | `-0.01em` | 800 |
| `h3` | `1.125rem` | `1.375rem` | `1.375rem` | `1.875rem` | `normal` | 800 |
| `h4` | `1.125rem` | `1.125rem` | `1.125rem` | `1.5625rem` | `normal` | 800 |
| `h5 / label` | `0.875rem` | `0.875rem` | `0.875rem` | `1.25rem` | `0.4em` | 400 |
| `body` | `1rem` | `1rem` | `1rem` | `1.5625rem` | `normal` | 500 |
| `p.small` | `0.8125rem` | `0.8125rem` | `0.8125rem` | `1.25rem` | `0.03em` | 400 |

### Variantes de heading

- **`header-light`**: `font-weight: 500`, `color: #878a8f` — usado para partes de títulos em tom muted
- **`header-dark`**: `font-weight: 500`, `color: #0f141e` — ênfase dentro de heading light
- **H5 como section label**: `letter-spacing: 0.4em`, `color: #878a8f` — uppercase visual, sem `text-transform`

### Padrão de stacking (hero e seções)
```
h5 (label/categoria)         ← small, muted, letter-spacing 0.4em
h1 / h1.large (título)       ← grande, bold/extrabold, -0.01em
h3 (subtítulo/descrição)     ← médio, muted
```

---

## Layout & Grid

| Propriedade | Valor |
|---|---|
| Max-width container | `1480px` |
| Padding horizontal (wrapper) | `40px` |
| Padding hero top | `60px` (mobile) → `135-140px` (desktop) |
| Gap entre project cards | `14px` (mobile) → `30px` (desktop) |

### Breakpoints

| Nome | Query |
|---|---|
| Mobile | padrão (< 768px) |
| Tablet | `(min-width: 768px) and (min-height: 620px)` ou `(min-width: 1280px)` |
| Desktop | `min-width: 1280px` |
| Large | `min-width: 1480px` |

> **Nota**: O watracz usa breakpoints híbridos (width + height). No Tailwind, usar `sm/md/lg/xl` mapeados para `640/768/1024/1280/1536`.

---

## Border Radius

| Uso | Valor |
|---|---|
| Botões pill (h=46px) | `23px` |
| Elementos circulares | `100%` |
| Cards | `0` (sem radius — estilo reto/editorial) |
| Inputs | `0` (watracz usa bordas retas) |

---

## Transições & Animações

| Propriedade | Valor |
|---|---|
| Easing padrão | `cubic-bezier(0.3, 0, 0.5, 1)` |
| Duração de interações | `0.2s` |
| Duração de animações de entrada | `1.8s` |
| Animação de letras (stagger) | delay incremental por caractere |

### Padrões de animação

- **Page curtain**: overlay fullscreen que sobe/desce ao navegar entre páginas
- **Nav overlay**: `opacity` + `transform` do container fullscreen dark
- **Project card hover**: `background-color` de `transparent` para `rgba(15,20,30,.9)`, texto faz `translateY` para visível
- **Link underline**: pseudo-elemento `::after` com `width: 0 → 100%`
- **Botão ativo**: ícone de check/loading substitui texto com `opacity` transition

---

## Componentes — Anatomia

### Header (fixed)
```
position: fixed | top: 0 | width: 100%
background: rgba(255,255,255,0.95)
logo (left) — espaçamento 40px desktop, 30px tablet
menu hamburguer (right) — espaçamento 40px desktop
```

### Nav Overlay (fullscreen)
```
background: rgba(15,20,30,0.98)
Links: h2 size, font-weight 800, color: #878a8f
Links hover: color: #ffffff
Close button: top-right
Footer com contatos/sociais: color: #878a8f
Logo: visible, color: #878a8f
```

### Hero Section
```
Estrutura:
  h5 (label)      — color: #878a8f, letter-spacing: 0.4em
  h1.large        — color: #0f141e, font-weight: 800
  h3 (subtitle)   — color: #878a8f, font-weight: 500
  CTAs (buttons)  — pill shape, 46px height, font-weight: 800
```

### Project Cards
```
Aspect ratio: ~46.4% (padding-bottom trick — ou aspect-ratio CSS)
Background: imagem de capa
Overlay: rgba(15,20,30,0.9) no hover
Info (bottom-left):
  h5 label (tipo/ano)   — cor muted
  h2/h3 nome do projeto — cor branca
  "ver projeto" link    — cor branca, com seta →
Transição: 0.2s cubic-bezier(0.3,0,0.5,1)
```

### Botões
```
height: 46px
border-radius: 23px (pill)
font-weight: 800
font-size: 1.125rem
padding: horizontal generoso
Variantes:
  - filled dark:  bg #0f141e, text #fff
  - filled white: bg #fff, text #0f141e
  - outline:      border 1px #0f141e, text #0f141e
```

### Footer
```
background: #ffffff (ou #0f141e para dark variant)
Logo + copyright: color: #878a8f
Links sociais: color: #878a8f, hover: #0f141e
```

### Labels de Seção (h5)
```
font-size: 0.875rem
font-weight: 400
letter-spacing: 0.4em
color: #878a8f
text-transform: none (o wide letter-spacing já dá visual uppercase)
```

---

## Ícones

O watracz usa SVG inline com `<symbol>` + `<use>`. No projeto atual temos `lucide-react` e `react-icons` — manter esses.

Ícones identificados no watracz:
- Seta direita (`icon_arrow_link`) — nos CTAs de projeto
- Seta para baixo — scroll indicator
- Hamburguer / close — nav toggle
- Instagram, marker, heart, mail, check, loading

---

## Decisões de Adaptação

| Original (watracz) | Adaptação no projeto |
|---|---|
| Helvetica Now Display DW | Inter |
| Breakpoint híbrido (width+height) | Breakpoints Tailwind padrão |
| jQuery + custom SPA | Next.js 15 App Router |
| `cubic-bezier(0.3,0,0.5,1)` | Manter — adicionar como CSS var |
| Cards sem border-radius | Manter `rounded-none` ou radius muito sutil (2-4px) |
| Nav fullscreen dark overlay | Implementar via Zustand (já existe no projeto) |
| Page curtain loader | Opcional — pode usar `next/navigation` loading.tsx |

---

## Tokens CSS Finais (para globals.css)

```css
@theme {
  /* Fonte */
  --font-sans: var(--font-inter), sans-serif;

  /* Cores */
  --color-darkest:    #0f141e;
  --color-dark-alt:   #0e1322;
  --color-gray-dark:  #7a808c;
  --color-gray-mid:   #878a8f;
  --color-gray-300:   #ced2d9;
  --color-gray-200:   #cfd0d2;
  --color-gray-100:   #d5d5d7;
  --color-border-clr: #e7e8e9;
  --color-surface:    #f3f3f5;
  --color-surface-2:  #f7f7f7;
  --color-white:      #ffffff;
  --color-accent:     #007aff;
  --color-error:      #ff5959;

  /* Semânticas (shadcn-compatible) */
  --color-background:         #ffffff;
  --color-foreground:         #0f141e;
  --color-muted:              #f3f3f5;
  --color-muted-foreground:   #878a8f;
  --color-border:             #e7e8e9;
  --color-primary:            #0f141e;
  --color-primary-foreground: #ffffff;

  /* Overlays */
  --overlay-dark-30:  rgba(15,20,30,0.30);
  --overlay-dark-90:  rgba(15,20,30,0.90);
  --overlay-dark-95:  rgba(15,20,30,0.95);
  --overlay-dark-98:  rgba(15,20,30,0.98);
  --overlay-white-95: rgba(255,255,255,0.95);

  /* Easing */
  --ease-default: cubic-bezier(0.3, 0, 0.5, 1);

  /* Border radius */
  --radius-pill: 23px;
  --radius-none: 0px;
  --radius: 0px;

  /* Container */
  --container-max: 1480px;
  --container-px:  40px;

  /* Altura de botão padrão */
  --btn-h: 46px;
}
```
