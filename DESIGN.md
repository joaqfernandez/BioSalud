---
name: BIO Salud
description: Consultorio médico y Espacio BIO — landing institucional en Godoy Cruz, Mendoza
colors:
  teal: "#2E7373"
  bosque: "#1B4D45"
  aqua: "#6FA8A3"
  sol: "#D89A4E"
  sol-deep: "#a86a1f"
  niebla: "#EDF1F0"
  hueso: "#FBFCFB"
  tinta: "#16302C"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2.7rem, 6.6vw, 5.2rem)"
    fontWeight: 300
    lineHeight: 1.08
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 4.2vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "1.4rem"
    fontWeight: 500
    lineHeight: 1.08
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.72rem"
    fontWeight: 500
    letterSpacing: "0.2em"
rounded:
  sm: "13px"
  md: "20px"
  lg: "28px"
  pill: "999px"
spacing:
  sm: "14px"
  md: "24px"
  lg: "40px"
  section: "104px"
components:
  button-primary:
    backgroundColor: "{colors.teal}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.bosque}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
  button-sol:
    backgroundColor: "{colors.sol}"
    textColor: "#3a2608"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-sol-hover:
    backgroundColor: "#c98a3f"
    textColor: "#3a2608"
    rounded: "{rounded.pill}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.bosque}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-white:
    backgroundColor: "#ffffff"
    textColor: "{colors.bosque}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  card:
    backgroundColor: "#ffffff"
    textColor: "{colors.tinta}"
    rounded: "{rounded.md}"
    padding: "32px"
  chip:
    backgroundColor: "{colors.sol}"
    textColor: "{colors.sol-deep}"
    rounded: "{rounded.pill}"
    padding: "8px 15px"
---

# Design System: BIO Salud

## 1. Overview

**Creative North Star: "Cuidar y Cultivar"**

The tagline *"Cuidar la vida, cultivar comunidad"* is the literal design brief. Two brands share one visual language: **BIO Salud** (the clinical practice — teal, bosque, the leaf-mark) tends; **Espacio BIO** (the community room — sol ochre) cultivates. Every recurring leaf-and-droplet glyph is the bridge between the two: a small piece of botanical calm stitched into an otherwise clinical-adjacent product, so the site never reads as a sterile hospital brochure. Fraunces' warm, slightly organic serif carries the "tending" half of the metaphor in headlines; Inter carries the plain-spoken, no-jargon voice in body copy; JetBrains Mono is reserved for small data-like labels (hours, meta stats, step numbers) that need to feel precise without feeling cold.

This system explicitly rejects sterile clinical-institution aesthetics (cold whites, bureaucratic layout, stock-photo impersonality) and generic AI-generated SaaS landing-page scaffolding (hero-metric blocks, identical icon-card grids, gradient text, stacked uppercase eyebrows on every section). Calm is conveyed through soft ambient shadows, generous rounded geometry, and restrained motion — never through hype, urgency, or manufactured scarcity.

**Key Characteristics:**
- Deep teal-to-forest gradients anchor the medical brand; warm ochre gradients anchor the community brand — never blended into one muddy in-between color.
- Fully rounded pill buttons and generously rounded (20–28px) card geometry throughout; nothing sharp-cornered.
- A single recurring leaf/droplet SVG motif ties disparate sections together instead of stock icons.
- Motion is subtle: opacity+translateY reveals on scroll, gentle hover lifts, no bounce or elastic easing.

## 2. Colors

A two-brand palette built on one deep teal-green family (BIO Salud) plus one warm ochre family (Espacio BIO), grounded in soft off-white neutrals and a near-black ink — not a AI-default cream/sand body background.

### Primary
- **Deep Teal** (`#2E7373`, `--teal`): the medical brand's signature color. Primary buttons, links, active nav states, icon backgrounds on light sections.
- **Bosque** (`#1B4D45`, `--bosque`): the deep end of the teal gradient. Heading color on light backgrounds, hero/contact gradient depth, footer background, button hover state.
- **Soft Aqua** (`#6FA8A3`, `--aqua`): the lightest teal step. Small accent details — eyebrow leaf icons, footer column labels, card note text.

### Secondary
- **Warm Ochre / Sol** (`#D89A4E`, `--sol`): Espacio BIO's signature color. Secondary CTA buttons ("Reservá el espacio"), the Espacio BIO gradient card, chip backgrounds.
- **Sol Deep** (`#a86a1f`, `--sol-deep`): text-on-ochre-tint color (chip labels, "Muy pronto" badge) — never used as a large fill.

### Neutral
- **Bone** (`#FBFCFB`, `--hueso`): page body background. A true near-white, not a warm cream — warmth in this brand comes from the teal/ochre accents and typography, not from a tinted body.
- **Mist** (`#EDF1F0`, `--niebla`): section background for alternating bands (values, agendar) and map placeholder background.
- **Ink** (`#16302C`, `--tinta`): primary body text color, at full and reduced opacity (`rgba(22,48,44,.6–.74)` for muted/lead text).

### Named Rules
**The Two-Gradient Rule.** Teal→bosque gradients belong exclusively to BIO Salud surfaces (hero, contact CTA); ochre gradients belong exclusively to Espacio BIO surfaces (the espacio-visual block, the "world.espacio" card). Never mix the two gradient families on the same element — that collapses the two-brands structure the whole site is built to communicate.

## 3. Typography

**Display Font:** Fraunces (with Georgia, serif fallback)
**Body Font:** Inter (with system-ui, sans-serif fallback)
**Label/Mono Font:** JetBrains Mono (with ui-monospace, monospace fallback)

**Character:** A warm editorial serif (Fraunces, light weight 300–400) paired with a plain, highly legible humanist sans (Inter) — contrast-axis pairing, not two similar sans-serifs. Mono is used sparingly and only for small data-like labels, never for prose.

### Hierarchy
- **Display** (300, `clamp(2.7rem, 6.6vw, 5.2rem)`, line-height 1.08, letter-spacing -0.015em): hero `<h1>` only.
- **Headline** (400, `clamp(2rem, 4.2vw, 3rem)`, line-height 1.08, letter-spacing -0.01em): section `<h2>` titles.
- **Title** (500, 1.4rem, line-height 1.08): card and world-block `<h3>`.
- **Body** (400, 17px, line-height 1.65): all paragraph copy; lead paragraphs step up to 1.2rem/1.55 line-height. Cap prose measure around 65–75ch (the `.lead` and `.sub` max-widths already enforce this).
- **Label** (500, 0.72rem, letter-spacing 0.2em, uppercase): eyebrow text, footer column headers, step numbers, hour-table captions — always mono, always tracked wide, always small.

### Named Rules
**The Light-Weight Display Rule.** Fraunces headings never go above weight 500 (hero `<h1>` is weight 300). The warmth comes from the typeface's organic curves, not from bold weight — bolding it would push the brand toward corporate/urgent instead of calm/confident.

## 4. Elevation

Soft and ambient by design — shadows exist to make white cards and gradient blocks feel gently lifted off the bone background, never to dramatize depth. There are exactly two shadow tokens; nothing improvises a one-off box-shadow.

### Shadow Vocabulary
- **`--shadow-sm`** (`0 1px 2px rgba(22,48,44,.05), 0 4px 12px -8px rgba(22,48,44,.18)`): resting state for cards, buttons, the map frame.
- **`--shadow`** (`0 1px 2px rgba(22,48,44,.04), 0 18px 40px -18px rgba(22,48,44,.22)`): hover/lift state (cards, world blocks) and the mobile nav dropdown and contact CTA block at rest.

### Named Rules
**The Lift-Not-Loom Rule.** Elevation only ever deepens on hover/interaction (`translateY(-4px)` to `-5px` paired with the shadow step-up); nothing sits permanently under a heavy shadow. Depth is a response to attention, not a static design flourish.

## 5. Components

### Buttons
- **Shape:** fully rounded pill (`border-radius: 999px`), 1.5px transparent border by default.
- **Primary** (`.btn-primary`): teal background (`#2E7373`), white text, `--shadow-sm` at rest, hover → bosque (`#1B4D45`) background.
- **Sol** (`.btn-sol`): ochre background (`#D89A4E`), dark ink-brown text (`#3a2608`) for contrast, hover → `#c98a3f`. Reserved for Espacio BIO actions.
- **White** (`.btn-white`): white background, bosque text, `--shadow-sm`, hover lifts (`translateY(-2px)`) rather than changing color — used on dark/gradient backgrounds (hero, contact).
- **Ghost** (`.btn-ghost`): transparent background, bosque text, `--line` border, hover fills to `--teal-08` tint with teal text/border.
- Every button transitions `transform`, `background`, `border-color`, `box-shadow`, `color` explicitly (never `transition: all`); `:active` scales to 0.97 for tactile press feedback.

### Chips
- **Style** (`.chip`): ochre-tinted background (`rgba(216,154,78,.14)`), sol-deep text, 1px ochre-tinted border, pill radius. Used exclusively for Espacio BIO activity tags (Yoga, Meditación, Cursos…) — never appears on the medical side of the page.

### Cards / Containers
- **Corner Style:** 20px (`--r`) for specialty cards; 28px (`--r-lg`) for the larger "world" duo blocks and the espacio-visual/contact hero blocks; 13px (`--r-sm`) available for smaller elements.
- **Background:** white for specialty cards on the bone page background; teal→bosque or ochre gradients for the signature "world" blocks (`.world.salud`, `.world.espacio`); a large translucent background leaf SVG (`.bgleaf`, 8–18% opacity) sits behind copy on every gradient block as a quiet signature texture.
- **Shadow Strategy:** `--shadow-sm` at rest, `--shadow` + `translateY(-4px to -5px)` on hover (pointer devices only, gated by `@media (hover:hover)`).
- **Border:** 1px `--line` (`rgba(27,77,69,.12)`) on white cards; none on gradient blocks.
- **Internal Padding:** 32px (specialty cards), 42px/38px (world blocks), 40px (espacio-visual, contact).

### Inputs / Fields
Not present in the current single-page build (contact is link-based: WhatsApp, Instagram, email). If a booking form is added, it should inherit the same rounded/soft-shadow language as cards rather than sharp-edged form defaults.

### Navigation
- **Style:** sticky topbar, translucent bone background (`rgba(251,252,251,.78)`) with `backdrop-filter: blur(14px) saturate(1.4)`, border-bottom fades in only after scroll (`.scrolled`).
- **Typography:** Inter, 0.92rem links at 0.78 opacity resting, 1.0 on hover/active with a `--teal-08` pill background.
- **Mobile:** links collapse into a full-width dropdown panel sliding down from the topbar (`translateY` + opacity), triggered by a burger icon; each link gets larger tap padding (13px 14px) to stay touch-friendly.

### Signature Component: The "World" Duo Block
The `.world.salud` / `.world.espacio` pair (in `#nosotros`) is the site's most important custom component: two large, differently-gradiented cards standing side by side, each carrying a mono `.tag` label, a Fraunces `<h3>`, a leaf-bulleted list, and a CTA pinned to the bottom via `margin-top: auto`. This is the component that visually enacts "two worlds, one roof" — any redesign should preserve the side-by-side, differently-colored, equally-weighted structure rather than collapsing it into a single card or an asymmetric layout.

## 6. Do's and Don'ts

### Do:
- **Do** keep the body background a true near-white (`#FBFCFB`) — warmth comes from teal/ochre accents and Fraunces typography, never from a tinted cream/sand body.
- **Do** use fully rounded pill buttons (999px) and generously rounded cards (20–28px) everywhere; soft-confident geometry is the point.
- **Do** keep shadows ambient and hover-triggered (`--shadow-sm` → `--shadow` + lift), never a heavy static drop shadow.
- **Do** reserve JetBrains Mono for short tracked-uppercase labels (hours, tags, step numbers) — never for prose.
- **Do** keep teal/bosque gradients on BIO Salud (medical) surfaces and ochre gradients on Espacio BIO (community) surfaces, kept visually distinct.

### Don't:
- **Don't** use sterile, cold-white, bureaucratic hospital-site styling — the leaf motif, warm serif, and soft shadows exist specifically to avoid that.
- **Don't** reintroduce a tiny uppercase tracked eyebrow above every section — they were deliberately removed from `#nosotros`, `#especialidades`, `#valores`, `#espacio`, `#agendar`, and `#ubicacion` in favor of quieter section rhythm; don't add them back as default scaffolding.
- **Don't** use gradient text, identical icon-card grids, hero-metric-tile blocks, or other generic AI-SaaS landing-page scaffolding.
- **Don't** use `border-left`/`border-right` colored stripes as an accent on cards or list items.
- **Don't** bold Fraunces headings past weight 500 — the calm comes from light-weight serif curves, not boldness.
- **Don't** blend the teal and ochre gradient families on the same element — it erases the two-brands structure.
