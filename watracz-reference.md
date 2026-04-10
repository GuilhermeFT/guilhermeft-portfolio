# Watracz.com — Relatório de Referência Completo

> Análise detalhada de https://watracz.com/ — mapa de site, layout, design system, animações e padrões de componentes.

---

## 1. Mapa de Site (Sitemap)

```
/ (Home — página principal)
├── /about              → Sobre mim
├── /contact            → Contato
├── /project/basicux    → Case study: Basic UX
├── /project/triniso    → Case study: Triniso
├── /project/symova     → Case study: Symova
├── /project/pmr        → Case study: PMR
├── /project/sonicsmith → Case study: Sonicsmith
├── /project/lessdoing  → Case study: Less Doing
├── /project/iceland    → Projeto pessoal: Iceland
├── /project/photography → Projeto pessoal: Photography
└── /project/pencildrawings → Projeto pessoal: Drawings
```

**Links externos (redes sociais):**
- Dribbble: https://dribbble.com/damianwatracz
- Instagram: https://www.instagram.com/damianwatracz/
- Behance: https://www.behance.net/damianwatracz
- LinkedIn: https://www.linkedin.com/in/damianwatracz

---

## 2. Design System

### 2.1 Tipografia

**Fonte única:** `"Helvetica Now Display DW", sans-serif`

| Token     | Tamanho        | Peso | Line-height    | Letter-spacing | Transform  | Cor             |
|-----------|---------------|------|---------------|----------------|------------|-----------------|
| `h1 / .large` | 2.125rem (34px) | 800  | 2.5rem (40px)  | -0.01em        | —          | `#0F141E`       |
| `h2 / .h2`    | 1.75rem (28px)  | 800  | 2.1875rem (35px)| -0.01em       | —          | `#0F141E`       |
| `h3`          | 1.125rem (18px) | 500  | 1.5625rem (25px)| normal        | —          | `#0F141E`       |
| `h4`          | 1.125rem (18px) | 800  | 1.5625rem (25px)| normal        | —          | `#0F141E`       |
| `h5 / .h5`    | 0.875rem (14px) | 400  | 1.25rem (20px) | 0.4em (5.6px)  | UPPERCASE  | `#878A8F`       |
| `p / .small`  | 0.8125rem (13px)| 400  | 1.25rem (20px) | 0.03em (0.39px)| —          | `#878A8F`       |
| `a (base)`    | 1rem (16px)    | 500  | 1.5625rem (25px)| normal        | —          | `#878A8F`       |
| `span (label)`| 0.8125rem (13px)| 800  | 1.0625rem (17px)| 0.2em (2.6px) | UPPERCASE  | `#878A8F`       |
| `nav menu li` | 2.125rem (34px)| 800  | 2.8125rem (45px)| -0.01em       | —          | `#878A8F`       |

**Variante `.header-light`** (subtítulo): `font-weight: 500`, `color: #878A8F`, sem letter-spacing.
**Variante `.header-dark`**: `font-weight: 500`, `color: #0F141E`.

---

### 2.2 Paleta de Cores

| Nome          | Valor                     | Uso                                              |
|---------------|--------------------------|--------------------------------------------------|
| Dark          | `#0F141E` (rgb 15,20,30) | Texto principal, body, elementos UI              |
| Gray          | `#878A8F` (rgb 135,138,143)| Labels h5, parágrafos, links secundários        |
| Border        | `#E7E8E9` (rgb 231,232,233)| Divisores, bordas                               |
| Background    | `#FFFFFF`                 | Fundo da página                                  |
| Header bg     | `rgba(255,255,255,0.95)` | Fundo do header fixo (leve translucidez)         |
| Placeholder   | `#F3F3F5` (rgb 243,243,245)| Skeleton loader de imagens                      |
| Overlay hover | `rgba(15,20,30,0.9)`     | Overlay dark ao fazer hover nos cards            |
| Instagram overlay | `rgba(15,20,30,0.95)` | Overlay escuro nos cards do Instagram           |
| Scroll-top btn | `rgba(15,20,30,0.3)`    | Botão de scroll ao topo (estado normal)          |
| White         | `#FFFFFF`                 | Texto sobre fundos escuros, link ativo no menu   |
| Gray SVG heart | `rgb(206,210,217)`      | Ícone de coração no footer                       |

**Cores de cards de projetos (bg custom):**

| Projeto        | Background             |
|----------------|------------------------|
| Basic UX       | `#0F0F0F` (quase preto)|
| Triniso        | `#21211E` (cinza escuro)|
| Symova         | `#E6E6E6` (cinza claro)|
| PMR            | `#009091` (teal)       |
| Sonicsmith     | `#4E4C4C` (cinza médio)|
| Less Doing     | `#4C58D9` (azul-roxo)  |
| Iceland        | `#E4E4E4` (cinza claro)|
| Photography    | `#EDEDED` (cinza suave)|
| Drawings       | `#EDEDED` (cinza suave)|

---

### 2.3 Espaçamento e Layout

**Container / Wrapper:**
- `width: 100%`
- `padding: 0 14px`
- Largura efetiva em 1440px: ~1102px visible (padding lateral mínimo)

**Grid responsivo (sistema customizado):**
- Breakpoints: `sm` / `md` / `smd` / `lg`
- Notação: `col-lg-4-12` = 4 colunas de 12
- Exemplos de uso no footer:
  - `.col-lg-4-12` → 33.3% (Contact info)
  - `.col-lg-2-12` + `offset-1-12` → ~16.6% + offset
  - `.col-lg-12-12` → 100% (copyright)

**Seções — padding-top:**

| Seção              | Padding-top | Padding-bottom |
|-------------------|-------------|----------------|
| `.home-top`        | 370px       | 0              |
| `#portfolio`       | 60px        | 0              |
| `.home-portfolio.personal` | 70px | 0          |
| `.home-instagram`  | 70px        | 0              |
| `.quick-contact`   | 70px        | 70px           |
| `footer .row`      | 74px (border-top) | pb: 76px |

---

### 2.4 Easing e Timing

| Contexto                     | Valor                                    |
|------------------------------|------------------------------------------|
| Padrão global (links, hovers) | `0.2s cubic-bezier(0.3, 0, 0.5, 1)`    |
| Header padding resize        | `0.4s cubic-bezier(0.3, 0, 0.5, 1)`    |
| Nav overlay (abrir/fechar)   | `0.5s cubic-bezier(0.3, 0, 0.5, 1) 0.1s` |
| Menu items (stagger)         | `0.4s cubic-bezier(0.3, 0, 0.5, 1)` + delays 0.3s→0.4s |
| Scroll-to-top                | `0.4s linear`                            |
| Imagens lazy load fade       | `0.3s` (delay 0.1s)                      |
| Cards hover overlay          | `0.2s linear`                            |
| Scroll reveal (fadeInView)   | `0.7s cubic-bezier(0.3, 0, 0.5, 1)`    |
| Logo path fill               | `0.2s linear`                            |
| Close button rotate          | `0.15s linear`                           |

---

## 3. Estrutura da Página (Wireframe por Seção)

```
┌──────────────────────────────────────────────────────────────────┐
│ HEADER (fixed, z-index: 20, h: 85px, bg: #fff 95%)              │
│ [Logo SVG]                                        [MENU ≡]       │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION: HOME-TOP (hero)                                         │
│ padding-top: 370px                                               │
│                                                                  │
│ [bg SVG watermark "designer" — grande, cinza claro, absoluto]    │
│ [bg-image: foto do designer — posição absoluta, direita]         │
│                                                                  │
│ .wrapper .main-copy (z-index: 2, relativo)                       │
│   h5       DAMIAN WATRACZ                                        │
│   h1       Website and user interface                            │
│            designer                                              │
│   h3       Over the past 9 years, as an art director...          │
│   nav.links                                                      │
│     a.scroll-to → "View Projects ↗"                             │
│     a.internal  → "Read About Me ↗"                             │
│                                                                  │
│ [Scroll indicator icon — centralizado, bottom]                   │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION: HOME-PORTFOLIO (#portfolio)                             │
│ padding-top: 60px                                                │
│                                                                  │
│   .animate--me (scroll reveal)                                   │
│     h5     Selected projects                                     │
│     h1     Case studies                                          │
│                                                                  │
│   .list (flex, flex-wrap: wrap)                                  │
│   ┌────────────────────┐  ┌────────────────────┐                │
│   │  CARD 1 (530×743)  │  │  CARD 2 (530×743)  │               │
│   │  Basic UX          │  │  Triniso           │                │
│   │  [NEW badge]       │  │                    │                │
│   └────────────────────┘  └────────────────────┘                │
│   [gap: 30px entre linhas, 28px entre colunas]                   │
│   ┌────────────────────┐  ┌────────────────────┐                │
│   │  CARD 3 (530×743)  │  │  CARD 4 (530×743)  │               │
│   │  Symova            │  │  PMR               │                │
│   └────────────────────┘  └────────────────────┘                │
│   ┌────────────────────┐  ┌────────────────────┐                │
│   │  CARD 5 (530×743)  │  │  CARD 6 (530×743)  │               │
│   │  Sonicsmith        │  │  Less Doing        │                │
│   └────────────────────┘  └────────────────────┘                │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION: HOME-PORTFOLIO PERSONAL                                 │
│ padding-top: 70px                                                │
│                                                                  │
│   .animate--me                                                   │
│     h5     Photography & drawings                                │
│     h1     Personal projects                                     │
│                                                                  │
│   .list (flex, flex-wrap: wrap)                                  │
│   ┌────────────────────┐  ┌────────────────────┐                │
│   │  CARD (530×535)    │  │  CARD (530×535)    │                │
│   │  Iceland [NEW]     │  │  Photography       │                │
│   └────────────────────┘  └────────────────────┘                │
│   ┌────────────────────┐                                        │
│   │  CARD (530×535)    │                                        │
│   │  Drawings          │                                        │
│   └────────────────────┘                                        │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION: HOME-INSTAGRAM                                          │
│ padding-top: 70px                                                │
│                                                                  │
│   .animate--me                                                   │
│     h5     WHAT'S NEW?                                           │
│     h1     Latest on Instagram                                   │
│                                                                  │
│   .list (flex, flex-wrap, margin: 63px -7px -7px)                │
│   ┌──────────────────────┐  ┌──────────────────────┐            │
│   │  POST 1 (50%-14px)   │  │  POST 2 (50%-14px)   │           │
│   │  337×428px approx    │  │  337×428px approx    │           │
│   └──────────────────────┘  └──────────────────────┘            │
│   ┌──────────────────────┐                                      │
│   │  POST 3 (50%-14px)   │                                      │
│   └──────────────────────┘                                      │
│   [gap: 7px entre todos os items]                                │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ SECTION: QUICK-CONTACT                                           │
│ padding: 70px 0                                                  │
│                                                                  │
│   .wrapper.text-left-center.animate--me                          │
│     h5     Need a designer?                                      │
│     h1     Let's work together                                   │
│     a.internal.with-icon → "Let's work together →"              │
└──────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────┐
│ FOOTER (#footer)                                                 │
│ border-top: 1px solid #E7E8E9, padding-top: 74px                 │
│                                                                  │
│ [col-lg-4-12]        [col-lg-2-12+1] [col-lg-2-12] [col-2+1]    │
│ Contact info —       Latest         Current        Follow        │
│                      projects —     availability — me on —       │
│ Feel free to reach   • Iceland      I usually work • Dribbble    │
│ out any time...      • Basic UX     on several     • Instagram   │
│                      • Triniso      projects but   • Behance     │
│ E: email             • Symova       I'll be happy  • LinkedIn    │
│ P: phone             • PMR          to discuss...               │
│                      • All projects                              │
│                                                                  │
│ [col-lg-12-12 copyright]                                         │
│ [logo icon]  © 2008 — 2019 Damian Watracz. Made with ♥ in Kraków│
└──────────────────────────────────────────────────────────────────┘
```

---

## 4. Header

### Estrutura
```
<header id="header"> (fixed, width: 100%, height: 85px, z-index: 20)
  <a class="logo internal">   ← SVG wordmark (167px × 46px), float left, margin: 20px 0 0 14px
    <svg> [ícone W circular] </svg>
    <svg> [texto "Damian Watracz / Web & UI Designer"] </svg>
  </a>
  <a class="menu">             ← float right, margin: 20px 14px 0 0
    <span>MENU</span>          ← 0.8125rem, weight 800, uppercase, letter-spacing 0.2em
    <b>                        ← 22×22px, top 50%
      <i></i>                  ← linha 1: top: 3px
      <i></i>                  ← linha 2: top: 10px
      <i></i>                  ← linha 3: bottom: 2px
    </b>                       ← cada linha: 22×3px, dark bg, transition 0.15s linear
  </a>
</header>
```

**Comportamento:** Padding do header reduz ao rolar (`0.4s cubic-bezier`). Logo muda de cor em hover (active: `#878A8F`).

---

## 5. Hamburger Menu (Nav Overlay)

### Estrutura
```
<nav id="nav">                     ← fixed, width: 100%, z-index: 25
                                     height: 0 → 100% ao abrir
  <a class="logo">…</a>            ← logo no canto sup. esq. (top: 20px, left: 14px)
  <a class="close">                ← canto sup. dir. (top: 20px, right: 14px)
    <span>CLOSE</span>             ← texto "CLOSE", cor gray
    <b>                            ← ícone X (22×22px)
      <i></i> [/ diagonal]
      <i></i> [\ diagonal]
    </b>
  </a>
  <footer>…</footer>               ← fixo no bottom (♥ feito em Kraków)
</nav>

<nav id="nav-overlay-content">     ← z-index: 26, fixed, centrado vertical e horizontal
  <div>
    <div class="content">          ← flex column, align/justify: center
      <h5>Menu</h5>                ← label cinza, opacity 0→1 (0.4s delay)
      <ul>                         ← text-align: center
        <li><a class="active">Projects</a></li>
        <li><a>About me</a></li>
        <li><a>Contact</a></li>
        <li><a>Dribbble</a></li>
        <li><a>Instagram</a></li>
        <li><a>Behance</a></li>
      </ul>
    </div>
  </div>
</nav>
```

### Estilo dos menu items
- Font: Helvetica Now Display DW, weight 800, letter-spacing -0.01em
- Tamanho: ~34px (mesmo que h1)
- Line-height: 45px
- Cor padrão: `#878A8F`
- Cor ativo/hover: `#FFFFFF`
- Texto centralizado

### Animação de abertura
1. `nav#nav` anima `height: 0 → 100%` em `0.5s cubic-bezier(0.3, 0, 0.5, 1)`
2. Overlay fica visível (visibility: hidden → visible)
3. `h5 "Menu"` faz fade in (0.4s delay)
4. Cada `li` faz stagger fade in:
   - li:nth-child(1): delay 0.3s
   - li:nth-child(2): delay 0.35s
   - li:nth-child(3): delay 0.4s
   - li:nth-child(4): delay 0.45s (estimado)
   - li:nth-child(5): delay 0.5s (estimado)
   - li:nth-child(6): delay 0.55s (estimado)
5. Footer (♥) faz fade + slide up (opacity, translateY 10px→0)

### Fechamento
- Botão CLOSE: ícone X (hover: rotate 90deg, 0.15s)
- Reverte animações em ordem inversa

---

## 6. Cards de Projeto (Portfolio)

### Anatomia do card
```
.list-item-portfolio
└── a.internal[.new].animate--me    ← bg-color custom, overflow: hidden, padding-top: 130px
    │                                  position: relative, display: block
    ├── i.new                        ← badge "NEW": circular 50×50px, top: 20px, right: 20px
    │                                  border: 3px solid #0F141E → white no hover
    │                                  bg: #0E1322, color: white
    │                                  font: 10px, weight 800, uppercase, letter-spacing 0.2em
    ├── svg.circle                   ← anel SVG animado (cx/cy 50, r 47, stroke-width 6)
    ├── .lazyload-wrapper            ← ratio padding-bottom (ex: 125.07% = portrait)
    │   └── img.lazy                 ← fade in ao carregar (0.3s delay 0.1s)
    ├── strong.regular[.dark-bg|.light-bg]  ← texto visível por padrão
    │   ├── span.h5                  ← ano (ex: "2018 — 2019"), color: white/dark 70% opacity
    │   ├── span.h2[.with-badge]     ← título do projeto, max-width: 320px, padding: 0 30px
    │   └── span.more.with-icon      ← "View Case Study ↗", oculto por padrão (opacity: 0)
    └── strong.action               ← texto de hover (left: -9999px por padrão)
        ├── span.h5                  ← mesmo ano
        ├── span.h2                  ← mesmo título, cor branca
        └── span.more               ← CTA (opacity 0, translateY 20px)
```

### Overlay escuro (hover)
```css
a::before {
  background: rgba(15, 20, 30, 0.9);
  position: absolute; width: 100%; height: 100%;
  opacity: 0;
  transition: opacity 0.2s linear;
}
/* No hover: opacity → 1 */
```

### Textos no hover (strong.action)
- Entra na tela (left: -9999px → in-flow) + fade up:
  - span.h2: `opacity 0→1, translateY 20→0, 0.2s linear 0.1s`
  - span.h5: mesmo timing
  - span.more: `0.2s linear 0.1s`

### Proporções dos cards
| Seção           | Largura | Altura    | Aspect ratio |
|----------------|---------|-----------|-------------|
| Portfolio (main)| 530px   | 742.89px  | ~1:1.40 (portrait) |
| Personal works  | 530px   | 535.06px  | ~1:1.01 (quase quadrado) |
| Instagram       | 337px   | 428.66px  | ~1:1.27    |

### Imagens dos cards (tile images)
| Projeto     | URL                                    |
|-------------|----------------------------------------|
| Basic UX    | `/images/tile_basicux.jpg` (480w + 670w) |
| Triniso     | `/images/tile_triniso.jpg`             |
| Symova      | lazy (não carregada no snapshot)       |
| PMR         | lazy                                   |
| Sonicsmith  | lazy                                   |
| Less Doing  | lazy                                   |
| Iceland     | lazy                                   |
| Photography | lazy                                   |
| Drawings    | lazy                                   |

---

## 7. Seção Hero (home-top)

```
section.home-top
├── img.bg-title                ← SVG watermark "designer" (huge, abs., z-index: 1)
│                                 src: /assets/images/bg_home_2.svg
├── div.bg-image.loaded         ← foto do designer (abs., right side, max-height: 460px)
│   └── img                     ← B&W portrait
└── div.wrapper                 ← z-index: 2, position: relative
    └── div.row
        └── div.main-copy       ← width: 100%
            ├── h5              → "DAMIAN WATRACZ" — uppercase, gray, letter-spacing 0.4em
            ├── h1              → "Website and user interface designer" — 34px, weight 800
            ├── h3.header-light → parágrafo descritivo — 18px, weight 500, gray
            └── nav.links       → margin-top: 10px
                ├── a.scroll-to.special → "View Projects" → #portfolio
                └── a.internal.special  → "Read About Me" → /about
```

**Scroll indicator:** `a.scroll-to.toggle.animate.special` — ícone de seta para baixo centrado

### Animação de entrada (on page load, .container.loaded)
| Elemento | Animação      | Duração | Easing  | Delay calculado |
|----------|--------------|---------|---------|-----------------|
| h5       | animation-1st | 0.6s   | linear  | inicia após 66.7% da animação |
| h1       | animation-2nd | 0.8s   | linear  | inicia após 75%  |
| h3       | animation-3rd | 1.0s   | linear  | inicia após 80%  |
| nav      | animation-4th | 1.2s   | linear  | inicia após 83.3%|

**Padrão de todos:** `opacity: 0, translateY: 20px → opacity: 1, translateY: 0`

---

## 8. Seção Instagram

```
section.home-instagram
├── div.animate--me                  ← scroll reveal
│   ├── h5    "WHAT'S NEW?"
│   └── h1    "Latest on Instagram"
└── div.list.animate--me             ← flex, flex-wrap, margin: 63px -7px -7px
    ├── .list-item-portfolio         ← width: calc(50% - 14px), margin: 7px
    │   └── a[href=instagram.com]    ← bg-cover, overflow: hidden
    │       ├── ::after              ← overlay dark (rgba(15,20,30,0.95)), opacity: 0
    │       └── strong               ← table-layout, 100% w×h, centrado
    │           └── strong           ← table-cell, vertical-align: middle, padding: 40px
    │               ├── i.instagram  ← ícone IG (30×30px SVG), fade up no hover
    │               ├── .p (caption) ← texto do post, -webkit-line-clamp: 8, fade up (0.1s delay)
    │               └── .count       ← "❤ 78", fade up (0.2s delay)
    ├── .list-item-portfolio         ← mesmo padrão
    └── .list-item-portfolio
```

**Hover dos posts (mobile: :active, desktop: :hover):**
1. Overlay `::after` → opacity 1 (0.2s linear)
2. Ícone IG → opacity 1, translateY 0 (0.2s linear)
3. Caption → opacity 1, translateY 0 (0.2s linear 0.1s)
4. Like count → opacity 1, translateY 0 (0.2s linear 0.2s)

---

## 9. Quick Contact

```
section.quick-contact
└── div.wrapper.text-left-center.animate--me   ← scroll reveal
    ├── h5     "Need a designer?"
    ├── h1.large  "Let's work together"
    └── a.internal.with-icon → /contact
        ├── texto: "Let's work together"
        └── span.icon.icon-arrow-link.icon--on-right  ← ícone seta →
```

---

## 10. Footer

```
footer#footer
└── div.wrapper
    └── div.row (border-top: 1px solid #E7E8E9, padding-top: 74px)
        ├── div.col-lg-4-12.contact              ← Contact information
        │   ├── h3     "Contact information —"
        │   ├── p.small  "Feel free to reach out..."
        │   └── ul.contact-links
        │       ├── li → a[mailto]  "damian.watracz@gmail.com"
        │       └── li → "+48-517-512-348"
        ├── div.col-lg-2-12.col-lg-offset-1-12  ← Latest projects
        │   ├── h5  "Latest projects —"
        │   └── ul.project-links (flex, flex-wrap, 2 colunas de 50%)
        │       ├── Iceland, Basic UX, Triniso
        │       ├── Symova, PMR, Sonicsmith
        │       ├── Photography (oculto: nth-child(6,7) → display:none)
        │       └── a "All projects" → /
        ├── div.col-lg-2-12                      ← Current availability
        │   ├── h5  "Current availability —"
        │   └── p   "I usually work on several projects..."
        ├── div.col-lg-2-12.col-lg-offset-1-12  ← Follow me on
        │   ├── h5  "Follow me on —"
        │   └── ul.social-links (flex, flex-wrap, 2 colunas)
        │       ├── Dribbble, Instagram
        │       └── Behance, LinkedIn
        └── div.col-lg-12-12.copyright           ← Copyright
            ├── a.internal (back to top, logo icon 46×46px)
            └── p.small.copyright-text
                "© 2008 — 2019 Damian Watracz. Made with ♥ in Kraków, Poland."
```

**Tipografia do footer:**
- `h3` (Contact info title): 18px, weight 800, color `#0F141E`
- `h5` (section labels): 14px, uppercase, letter-spacing 0.4em, color `#878A8F`
- `ul > li`: weight 500, color `#878A8F`
- `a.special` (links): color `#0F141E`, sem sublinhado
- `p.small.copyright-text`: 13px, color `#878A8F`, margin: 15px 0 0 56px

---

## 11. Elementos Persistentes (Fixed UI)

### Botão "Contact me" (a.contact-link)
- Fixed, aparece ao rolar
- Ícone de email (SVG) + "Contact me"
- `display: none` por padrão → aparece via JS

### Botão Scroll-to-top (a.scroll-top)
```css
position: fixed;
width: 46px; height: 46px;
right: -46px; bottom: 14px;          /* oculto por padrão */
background: rgba(15, 20, 30, 0.3);
border-radius: 50%;
padding: 13px;
transform: translate3d(0, -10px, 0);
transition: transform 0.4s linear, opacity 0.4s linear, right linear 0.4s;
/* .on state: right: 14px; opacity: 1; transform: none */
/* :active: background: #0F141E */
```
- Ícone: seta para cima SVG (20×20px)

---

## 12. Animações

### 12.1 Preloader / Curtain
```
div#curtain.fully-closed                ← bg: #0F141E, cobre toda a tela
div.loader
  ├── div.loader-preloader
  │   └── div.swiper-lazy-preloader     ← spinner
  ├── div.logo.set                      ← logo branco centralizado
  └── div.text.off.reset
      ├── h5   "WELCOME"
      └── h1.large  "Wait a bit"
```
- Progress counter: 8rem, weight 500, `animation-1st` keyframe
- Animação de entrada do conteúdo: `loader-progress-on` (0→opacity 1, translateY 30→0)

### 12.2 Keyframes definidos

| Nome                | Descrição                                               | Duração |
|--------------------|---------------------------------------------------------|---------|
| `animation-1st`    | opacity 0→1, translateY 20→0 (delay: 66.7% da duração) | 0.6s    |
| `animation-2nd`    | idem (delay: 75%)                                       | 0.8s    |
| `animation-3rd`    | idem (delay: 80%)                                       | 1.0s    |
| `animation-4th`    | idem (delay: 83.3%)                                     | 1.2s    |
| `animation-5th`    | idem (delay: 85.7%)                                     | —       |
| `animation-Nth`    | padrão `n/(n+1)` acumulado                              | —       |
| `fadeInView`       | opacity 0→1, translateY 30→0 (scroll reveal)           | 0.7s    |
| `fadeIn`           | opacity 0→1 simples                                     | —       |
| `rotate-half`      | 0°→180°                                                 | —       |
| `rotate-full`      | 0°→360° (spinner)                                      | —       |
| `loader-progress-on` | opacity 0→1, translateY 30→0                          | —       |
| `sk-scaleout`      | scale 0→1, opacity →0 (skeleton loader circular)       | 1s      |

### 12.3 Padrão de scroll reveal (`.animate--me`)
```css
/* Estado inicial */
.animate--me:not(.first) {
  visibility: hidden;
  opacity: 0;
}
/* Ao entrar na viewport */
.animate--me.animate--init {
  visibility: visible;
  animation-name: fadeInView;
  animation-duration: 0.7s;
  animation-fill-mode: both;
  animation-timing-function: cubic-bezier(0.3, 0, 0.5, 1);
}
/* fadeInView */
@keyframes fadeInView {
  0%   { transform: translate3d(0, 30px, 0); opacity: 0; }
  100% { transform: translate3d(0, 0, 0);    opacity: 1; }
}
```

---

## 13. Ícones (SVG Sprite)

Sprites inline no `div.svg-icons-wrapper`:

| ID                       | Uso                              |
|--------------------------|----------------------------------|
| `icon_arrow_down`        | Scroll indicator no hero         |
| `icon_arrow_left`        | Navegação (projeto anterior)     |
| `icon_arrow_right`       | Navegação (próximo projeto)      |
| `icon_arrow_link`        | CTA links (seta →)              |
| `icon_arrow_link--thin`  | CTA nos cards ("View Case Study")|
| `icon_arrow_up`          | Scroll to top                    |
| `icon_button_check`      | Formulário: sucesso              |
| `icon_button_loading`    | Formulário: carregando           |
| `icon_button_mail`       | Botão de contato                 |
| `icon_heart`             | Footer copyright                 |
| `icon_instagram`         | Overlay dos posts do Instagram   |
| `icon_marker`            | Localização                      |
| `icon_notification_error`| Erro no formulário               |
| `icon_select_gray`       | Dropdown select (cinza)          |
| `icon_select_new-black`  | Dropdown select (preto)          |

---

## 14. Formulários

Há scripts de reCAPTCHA presentes (`recaptchaOnloadCallback`), indicando formulário de contato na página `/contact` com:
- Campo de email / nome / mensagem (selectric customizado para selects)
- Feedback inline: loading spinner, check (sucesso), error notification
- Validação com classe `.error` no `.field`

**Selectric (select customizado):**
```css
.selectric { background: → rgba bg, transition: background 0.2s cubic-bezier(0.3, 0, 0.5, 1) }
.selectric:hover { background: #F3F3F4 }
.selectric-items li:hover { background: #F3F3F4 }
```

---

## 15. Lazy Loading de Imagens

```css
/* Placeholder enquanto carrega */
.lazyload-wrapper:not(.loaded) {
  background: #F3F3F5;
  height: 0; /* controlled by padding-bottom ratio */
}
/* Spinner centralizado */
.lazyload-wrapper:not(.loaded)::before {
  animation: sk-scaleout 1s ease-in-out infinite;
  width: 40px; height: 40px;
  background: #878A8F;
  border-radius: 100%;
}
/* Imagem fade in ao carregar */
img.lazy { opacity: 0; transition: opacity 0.3s 0.1s; }
img.lazy.loaded { opacity: 1; }
```

**Srcset responsivo:**
```html
<img data-srcset="/images/tile_basicux-480.jpg 480w, /images/tile_basicux.jpg 670w">
```

---

## 16. Versão e Metadados

```js
var Config = {
  BASE_URL: "/",
  VERSION: "2.5.18",
  SSL: true,
  PRELOADER: { url: "assets/images/loa..." }
}
```

- HTML class inicial: `html.home`
- Body sem classes explícitas
- Viewport: padrão responsivo
- reCAPTCHA v2 integrado
- Google Analytics (provavelmente, dado o contexto)
- Swiper.js (slider em páginas de projeto)
