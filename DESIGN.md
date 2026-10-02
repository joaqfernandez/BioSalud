---
name: BIOS Salud
description: Consultorio médico y Espacio BIOS — landing institucional en Godoy Cruz, Mendoza
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
    fontFamily: "Lexend, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5.6vw, 4.4rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Lexend, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3rem)"
    fontWeight: 500
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Lexend, Segoe UI, system-ui, sans-serif"
    fontSize: "1.4rem"
    fontWeight: 500
    lineHeight: 1.12
  body:
    fontFamily: "Lexend, Segoe UI, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Lexend, Segoe UI, system-ui, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 600
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

# Design System: BIOS Salud

## 1. Overview

**Creative North Star: "Cuidar y Cultivar"**

The tagline *"Cuidar la vida, cultivar comunidad"* is the literal design brief. Two brands share one visual language: **BIOS Salud** (the clinical practice — teal, bosque, the leaf-mark) tends; **Espacio BIOS** (the community room — sol ochre) cultivates. Every recurring leaf-and-droplet glyph is the bridge between the two: a small piece of botanical calm stitched into an otherwise clinical-adjacent product, so the site never reads as a sterile hospital brochure. A single family, Lexend, carries every role: medium-weight headlines with slightly tightened tracking, regular body copy, and semibold labels. One voice, plain-spoken and easy to read, for the whole page.

This system explicitly rejects sterile clinical-institution aesthetics (cold whites, bureaucratic layout, stock-photo impersonality) and generic AI-generated SaaS landing-page scaffolding (hero-metric blocks, identical icon-card grids, gradient text, stacked uppercase eyebrows on every section). Calm is conveyed through soft ambient shadows, generous rounded geometry, and restrained motion — never through hype, urgency, or manufactured scarcity.

**Key Characteristics:**
- Deep teal-to-forest gradients anchor the medical brand; warm ochre gradients anchor the community brand — never blended into one muddy in-between color.
- Fully rounded pill buttons and generously rounded (20–28px) card geometry throughout; nothing sharp-cornered.
- A single recurring leaf/droplet SVG motif ties disparate sections together instead of stock icons.
- Motion is subtle: opacity+translateY reveals on scroll, gentle hover lifts, no bounce or elastic easing.

## 2. Colors

A two-brand palette built on one deep teal-green family (BIOS Salud) plus one warm ochre family (Espacio BIOS), grounded in soft off-white neutrals and a near-black ink — not a AI-default cream/sand body background.

### Primary
- **Deep Teal** (`#2E7373`, `--teal`): the medical brand's signature color. Primary buttons, links, active nav states, icon backgrounds on light sections.
- **Bosque** (`#1B4D45`, `--bosque`): the deep end of the teal gradient. Heading color on light backgrounds, hero/contact gradient depth, footer background, button hover state.
- **Soft Aqua** (`#6FA8A3`, `--aqua`): the lightest teal step. Small accent details — eyebrow leaf icons, footer column labels, card note text.

### Secondary
- **Warm Ochre / Sol** (`#D89A4E`, `--sol`): Espacio BIOS's signature color. Secondary CTA buttons ("Reservá el espacio"), the Espacio BIOS gradient card, chip backgrounds.
- **Sol Deep** (`#a86a1f`, `--sol-deep`): text-on-ochre-tint color (chip labels, "Muy pronto" badge) — never used as a large fill.

### Neutral
- **Bone** (`#FBFCFB`, `--hueso`): page body background. A true near-white, not a warm cream — warmth in this brand comes from the teal/ochre accents and typography, not from a tinted body.
- **Mist** (`#EDF1F0`, `--niebla`): section background for alternating bands (values, agendar) and map placeholder background.
- **Ink** (`#16302C`, `--tinta`): primary body text color, at full and reduced opacity (`rgba(22,48,44,.6–.74)` for muted/lead text).

### Named Rules
**The Two-Gradient Rule.** Teal→bosque gradients belong exclusively to BIOS Salud surfaces (hero, contact CTA); ochre gradients belong exclusively to Espacio BIOS surfaces (the espacio-visual block, the "world.espacio" card). Never mix the two gradient families on the same element — that collapses the two-brands structure the whole site is built to communicate.

## 3. Typography

**Font (all roles):** Lexend (Segoe UI, system-ui fallback). Weights loaded: 400, 500, 600.

**Character:** Lexend was designed to reduce visual stress and improve reading fluency. Its open, slightly wide letterforms suit an audience that skews older or arrives anxious. The zero is a plain oval with no slash or dot; this was a client request, and it also keeps numbers in addresses and phone numbers looking like ordinary print. The site deliberately uses one unified family: hierarchy comes from size and weight, not from pairing faces. There is no monospace: mono labels read as tech costume on a medical site.

### Hierarchy
- **Display** (600, uppercase, `clamp(3.6rem, 12.2vw, 10rem)`, line-height 0.92, letter-spacing -0.035em): hero `<h1>` "BIOS Salud" only, over the white leaf-mark as an 11%-opacity watermark. The hero is centered and at least one viewport tall. Behind it are a static 26px white dot grid at 16% opacity and a soft dark-teal radial veil behind the copy, on top of the teal gradient and the floating drops. It has no eyebrow, and the dot grid has no interaction. The tagline "Cuidar la vida, cultivar comunidad." sits below it at 500, `clamp(1.35rem, 2.5vw, 1.9rem)`.
- **Headline** (500, `clamp(2rem, 4.2vw, 3rem)`, line-height 1.12, letter-spacing -0.02em): section `<h2>`.
- **Title** (500, 1.25–2.1rem): card, team and world-block headings.
- **Body** (400, 1.0625rem, line-height 1.65): all prose; lead paragraphs 1.2rem. Measure capped around 65–75ch.
- **Label** (Lexend 600, ~0.9rem, sentence case, no tracking): tags, notes, footer column headers, badges.

### Named Rules
**The One-Family Rule.** Every role uses Lexend. Do not reintroduce a second face, and do not pick any font whose zero has a slash or a dot. Only 400/500/600 are loaded; anything heavier (including default `<b>`) resolves to 600, so do not request 700+.

**The No-Costume Rule.** No monospace, no all-caps tracked labels. Small labels are sentence-case Lexend semibold in teal.

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
- **Sol** (`.btn-sol`): ochre background (`#D89A4E`), dark ink-brown text (`#3a2608`) for contrast, hover → `#c98a3f`. Reserved for Espacio BIOS actions.
- **White** (`.btn-white`): white background, bosque text, `--shadow-sm`, hover lifts (`translateY(-2px)`) rather than changing color — used on dark/gradient backgrounds (hero, contact).
- **Ghost** (`.btn-ghost`): transparent background, bosque text, `--line` border, hover fills to `--teal-08` tint with teal text/border.
- Every button transitions `transform`, `background`, `border-color`, `box-shadow`, `color` explicitly (never `transition: all`); `:active` scales to 0.97 for tactile press feedback.

### Chips
- **Style** (`.chip`): ochre-tinted background (`rgba(216,154,78,.14)`), sol-deep text, 1px ochre-tinted border, pill radius. Used exclusively for Espacio BIOS activity tags (Yoga, Meditación, Cursos…) — never appears on the medical side of the page.

### Cards / Containers
- **Corner Style:** 20px (`--r`) for specialty cards; 28px (`--r-lg`) for the larger "world" duo blocks and the espacio-visual/contact hero blocks; 13px (`--r-sm`) available for smaller elements.
- **Background:** white for specialty cards on the bone page background; teal→bosque or ochre gradients for the signature "world" blocks (`.world.salud`, `.world.espacio`); a large translucent background leaf SVG (`.bgleaf`, 8–18% opacity) sits behind copy on every gradient block as a quiet signature texture.
- **Shadow Strategy:** `--shadow-sm` at rest, `--shadow` + `translateY(-4px to -5px)` on hover (pointer devices only, gated by `@media (hover:hover)`).
- **Border:** 1px `--line` (`rgba(27,77,69,.12)`) on white cards; none on gradient blocks.
- **Internal Padding:** 32px (specialty cards), 42px/38px (world blocks), 40px (espacio-visual, contact).

### Inputs / Fields
Not present in the current single-page build (contact is link-based: WhatsApp, Instagram, email). If a booking form is added, it should inherit the same rounded/soft-shadow language as cards rather than sharp-edged form defaults.

### Navigation
- **Style:** floating liquid-glass capsule (`position: fixed`, 12px from the top, pill radius, 64px tall) over the content. It uses `backdrop-filter: blur() saturate(1.8)`, a bright inset top rim, and a soft-light specular highlight (`::before`). `main.js` drives `--p` (0→1 over the first 260px of scroll), which lowers the tint alpha and the blur so more of the background shows through as you scroll. While the bar sits over the hero (`.on-dark`), the glass tints bosque and the text, logo and links switch to white, with a white CTA. Over light sections the glass is bone-tinted with bosque text. Without backdrop-filter support, the glass falls back to near-opaque.
- **Typography:** Lexend, 0.92rem links at 0.78 opacity resting, 1.0 on hover/active with a `--teal-08` pill background.
- **Mobile:** links collapse into a rounded frosted-glass panel (12px side insets) sliding down below the capsule (`translateY` + opacity), triggered by a burger icon; each link gets larger tap padding (13px 14px) to stay touch-friendly.

### Signature Component: The "World" Duo Block
The `.world.salud` / `.world.espacio` pair (in `#nosotros`) is the site's most important custom component: two large, differently-gradiented cards standing side by side, each carrying a semibold `.tag` label, a Lexend 500 `<h3>`, a leaf-bulleted list, and a CTA pinned to the bottom via `margin-top: auto`. This is the component that visually enacts "two worlds, one roof" — any redesign should preserve the side-by-side, differently-colored, equally-weighted structure rather than collapsing it into a single card or an asymmetric layout.

## 6. Do's and Don'ts

### Do:
- **Do** keep the body background a true near-white (`#FBFCFB`) — warmth comes from teal/ochre accents and calm, rounded Lexend typography, never from a tinted cream/sand body.
- **Do** use fully rounded pill buttons (999px) and generously rounded cards (20–28px) everywhere; soft-confident geometry is the point.
- **Do** keep shadows ambient and hover-triggered (`--shadow-sm` → `--shadow` + lift), never a heavy static drop shadow.
- **Do** set small labels in sentence-case Lexend semibold; no monospace, no tracked uppercase.
- **Do** keep teal/bosque gradients on BIOS Salud (medical) surfaces and ochre gradients on Espacio BIOS (community) surfaces, kept visually distinct.

### Don't:
- **Don't** use sterile, cold-white, bureaucratic hospital-site styling — the leaf motif, warm palette, and soft shadows exist specifically to avoid that.
- **Don't** reintroduce a tiny uppercase tracked eyebrow above every section — they were deliberately removed from `#nosotros`, `#especialidades`, `#valores`, `#espacio`, `#agendar`, and `#ubicacion` in favor of quieter section rhythm; don't add them back as default scaffolding.
- **Don't** use gradient text, identical icon-card grids, hero-metric-tile blocks, or other generic AI-SaaS landing-page scaffolding.
- **Don't** use `border-left`/`border-right` colored stripes as an accent on cards or list items.
- **Don't** add a second font family or one with a slashed or dotted zero.
- **Don't** blend the teal and ochre gradient families on the same element — it erases the two-brands structure.
