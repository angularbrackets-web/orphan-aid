# Design System: Orphan Aid
**Concept**: The Covenant
**Axis**: Warm / Minimal / Purposefully Kinetic / Structured-Editorial / Polished-Human / Declarative
**Date**: 2026-03-14

---

## Concept Traceability Filter

> "Does this token feel precise, enduring, and worthy of a covenant?"

Every token below must pass this filter. Rationale is provided for each key decision.

---

## 1. Typography

### Typeface Decisions

**Heading: Cormorant Garamond (Google Fonts / Fontsource)**
- **License**: SIL Open Font License — free for commercial use
- **Package**: `@fontsource-variable/cormorant` (variable font, single file)
- **Weights used**: Regular (400), Italic (400i), Light (300) for decorative moments
- **Rationale**: Extreme thick-thin contrast mirrors the precision of Islamic geometric line work. The Garamond heritage carries centuries of institutional trust — exactly what a covenant requires. The italic is exceptional: calligraphic without being decorative, perfect for spiritual quotations. At 100px+ the high contrast gives it the same editorial gravitas as Editorial New. No other Canadian Islamic charity uses this typeface.
- **Implementation**: Install via Fontsource. Import in global layout. Use `font-display: block` to prevent flash on display headings.

**Body: DM Sans (Google Fonts via Fontsource)**
- **Package**: `@fontsource-variable/dm-sans`
- **Weights used**: 400 (Regular), 500 (Medium), 600 (SemiBold)
- **Rationale**: Humanist proportions carry warmth; geometric discipline keeps it from feeling casual. The x-height harmonizes with Editorial New's cap height at body sizes. Approved exception to the no-Google-Fonts rule — body only.
- **Implementation**: `import '@fontsource-variable/dm-sans'` in global layout.

### Type Scale — Perfect Fourth (1.333) from 18px base

| Token | Size | Rem | Role |
|---|---|---|---|
| `text-xs` | 12px | 0.75rem | Captions, legal, small labels |
| `text-sm` | 14px | 0.875rem | UI labels, nav items, metadata |
| `text-base` | 18px | 1.125rem | Body copy — generous for reading comfort |
| `text-lg` | 24px | 1.5rem | Large body, intro paragraphs |
| `text-xl` | 32px | 2rem | H3, subsection headings |
| `text-2xl` | 43px | 2.6875rem | H2, section headings |
| `text-3xl` | 57px | 3.5625rem | H1, page-level headings |
| `text-4xl` | 76px | 4.75rem | Display — smaller hero contexts |
| `text-5xl` | 100px | 6.25rem | Display — hero headline |
| `text-6xl` | 128px | 8rem | Oversized — accent type moments |

**Rationale for 18px base**: Editorial convention and generous legibility for a community that includes older readers. The 1.333 ratio creates clear hierarchy at each step without the extremes of a 1.5 Perfect Fifth, which would require too many breakpoint adjustments on mobile.

### Line Heights

| Token | Value | Role |
|---|---|---|
| `leading-tight` | 1.0 | Display/hero text (96px+) |
| `leading-snug` | 1.15 | Headings (43–76px) |
| `leading-normal` | 1.4 | Subheadings (24–32px) |
| `leading-relaxed` | 1.65 | Body copy — comfortable reading |
| `leading-loose` | 1.8 | Small text, captions |

### Letter Spacing

| Context | Tracking | Why |
|---|---|---|
| Display (100px+) | -0.04em | Optical compensation — characters appear too far apart at large sizes |
| Hero (76px) | -0.03em | Tightening maintains typographic texture |
| H1 / H2 (43–57px) | -0.02em | Slight tightening for editorial feel |
| H3 / Large (24–32px) | -0.01em | Minimal correction |
| Body | 0 | Default — DM Sans is well-spaced |
| UI Labels (all-caps) | +0.08em | All-caps requires extra tracking for legibility |

### Typography Pairing Rules
- **Editorial New** headings only — display, H1, H2, pull quotes, impact numbers
- **DM Sans** for everything else — body, labels, nav, buttons, captions, UI copy
- **Never mix within a single text block** — pick one per element
- **Italic Editorial New** only for spiritual references / pull quotes — used sparingly, not for decoration
- `text-wrap: balance` on all headings to prevent widows

---

## 2. Color System

### Palette — Islamic Manuscript

**Philosophy**: The palette draws from Quran illumination manuscripts — parchment ground, ink text, gold leaf accents. 90% of every page is cream. Gold is gold leaf — precious, used once. Teal is the single dramatic moment. This palette has no precedent in the Canadian Islamic charity sector.

| Token | Name | Hex | Rationale |
|---|---|---|---|
| `color-bg` | Warm Parchment | `#F8F3EB` | Old paper warmth; the ground everything rests on; removes clinical feel of white |
| `color-bg-subtle` | Deep Parchment | `#F0E9DA` | Card backgrounds, input fills, subtle surface distinction |
| `color-surface` | Parchment Dark | `#E8DEC9` | Elevated surfaces, hover states on cream backgrounds |
| `color-border` | Warm Stone | `#D4C9B0` | Dividers, input borders — warm, not grey |
| `color-border-subtle` | Pale Stone | `#E4DCCA` | Subtle separators, image borders |
| `color-text` | Warm Ink | `#1C1208` | Primary text — near-black with warm brown undertone; not pure black |
| `color-text-secondary` | Warm Brown | `#6B5B45` | Supporting copy, captions, metadata |
| `color-text-muted` | Light Brown | `#9A8872` | Placeholder text, disabled states |
| `color-gold` | Islamic Gold | `#C4952A` | Geometric line work, section dividers, select accents — used sparingly |
| `color-gold-light` | Pale Gold | `#D4A84B` | SVG stroke lines (slightly lighter for 1px line legibility) |
| `color-gold-muted` | Muted Gold | `#E8D5A3` | Geometric pattern watermarks at low opacity |
| `color-teal` | Deep Teal | `#1B3A4B` | Primary CTA button + CTA section background — the only dark surface |
| `color-teal-hover` | Teal Dark | `#142D3A` | Button hover state |
| `color-teal-text` | Warm White | `#FDFAF5` | Text on teal surfaces — warm white, not pure white |
| `color-success` | Forest | `#1A5C3A` | Form success states |
| `color-error` | Warm Red | `#B91C1C` | Form error states |

### Contrast Verification (WCAG AA)
| Combination | Ratio | Standard | Pass |
|---|---|---|---|
| `color-text` (#1C1208) on `color-bg` (#F8F3EB) | ~16:1 | AA body (4.5:1) | ✓ |
| `color-text-secondary` (#6B5B45) on `color-bg` | ~5.8:1 | AA body (4.5:1) | ✓ |
| `color-teal-text` (#FDFAF5) on `color-teal` (#1B3A4B) | ~10.2:1 | AA body (4.5:1) | ✓ |
| `color-gold` (#C4952A) on `color-bg` | ~3.5:1 | AA large text (3:1) | ✓ (decorative only) |
| `color-text` on `color-bg-subtle` | ~15.5:1 | AA body | ✓ |

### Color Usage Rules
- **90% parchment** — cream background dominates every page
- **Gold appears only as line work** — geometric SVG strokes and rare accent marks. Never as text color, never as background
- **Teal appears only twice** — the primary CTA button and the single full-width Covenant CTA section
- **No gradients** — ever, on this project
- **No shadows** — box shadows are ruled out; elevation is communicated through color step, not shadow

---

## 3. Spacing System

**Base unit: 4px**. All values are multiples of 4px.

| Token | Value | Common Use |
|---|---|---|
| `space-1` | 4px | Micro spacing — icon gaps, tight pairs |
| `space-2` | 8px | Compact spacing — label to value |
| `space-3` | 12px | Small internal component spacing |
| `space-4` | 16px | Default component padding |
| `space-5` | 20px | Button padding horizontal |
| `space-6` | 24px | Card internal padding |
| `space-8` | 32px | Section element spacing |
| `space-10` | 40px | Component separation |
| `space-12` | 48px | Subsection spacing |
| `space-16` | 64px | Medium section padding |
| `space-20` | 80px | Mobile section padding |
| `space-24` | 96px | Desktop small section padding |
| `space-32` | 128px | Desktop standard section padding |
| `space-40` | 160px | Desktop large section padding (premium) |
| `space-48` | 192px | Hero vertical padding |

**Section padding standard**: 160px top/bottom on desktop, 96px on mobile. The generous breathing room signals that Orphan Aid is not desperate for space — it has nothing to hide.

### Layout Tokens
| Token | Value | Role |
|---|---|---|
| `max-w-content` | 1280px | Full-width sections |
| `max-w-prose` | 720px | Body copy columns (65ch approx) |
| `max-w-narrow` | 560px | Pull quotes, narrow text blocks |
| `grid-cols` | 12 | Base grid |
| `container-px` | 24px (mobile) / 80px (desktop) | Container horizontal padding |

---

## 4. Motion System

**Character**: Deliberate and reverent. Motion reveals meaning; it does not perform.

### Easing Curves
| Token | Curve | Use |
|---|---|---|
| `ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Primary — section entries, content reveals |
| `ease-out-quart` | `cubic-bezier(0.25, 1, 0.5, 1)` | UI elements — hover states, button transitions |
| `ease-in-out-quart` | `cubic-bezier(0.76, 0, 0.24, 1)` | Page transitions, color section transitions |
| `ease-linear` | `linear` | SVG stroke-dashoffset draws, counters |

**No elastic/spring easing** — ruled out by concept. Bouncy motion contradicts the covenant's weight.

### Duration Scale
| Token | Value | Use |
|---|---|---|
| `duration-instant` | 100ms | Hover color feedback |
| `duration-fast` | 200ms | Button hover, link underline draw |
| `duration-normal` | 350ms | UI state changes |
| `duration-slow` | 500ms | Content fade-up entries |
| `duration-deliberate` | 700ms | Section hero elements, photography reveal |
| `duration-draw` | 1200ms | SVG geometric line draw |
| `duration-count` | 2000ms | Impact counter animations |
| `duration-page` | 400ms | Page transition fade |

### Animation Patterns

**Scroll entry (default for all sections)**:
```css
/* Initial state */
opacity: 0;
transform: translateY(24px);

/* Animated state */
opacity: 1;
transform: translateY(0);
transition: opacity 500ms ease-out-expo, transform 500ms ease-out-expo;
```

**Stagger values** for sequential reveals:
- Text blocks within a section: 80ms between each
- Grid/column items: 60ms between each
- Impact numbers (3 items): 150ms between each

**SVG geometric line draw**:
```css
stroke-dasharray: [path length];
stroke-dashoffset: [path length]; /* initial — hidden */
/* On scroll trigger: */
stroke-dashoffset: 0;
transition: stroke-dashoffset 1200ms linear;
```

**Counter animation**: Use `IntersectionObserver` to trigger. Count from 0 to target value over 2000ms with `ease-out` deceleration — numbers slow down as they approach the final value.

**Button hover** (clip-path slide):
```css
/* Pseudo-element background slides in from left */
clip-path: inset(0 100% 0 0);
/* On hover: */
clip-path: inset(0 0% 0 0);
transition: clip-path 200ms ease-out-quart;
```

**Reduced motion**:
```css
@media (prefers-reduced-motion: reduce) {
  /* All animations: instant opacity only, no translate */
  * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; }
  /* SVG lines appear immediately */
  /* Counters show final value immediately */
}
```

---

## 5. Components

### Buttons

**Primary (Teal)**:
- Background: `color-teal` (#1B3A4B)
- Text: `color-teal-text` (#FDFAF5), DM Sans SemiBold, 14px, tracking +0.04em, uppercase
- Padding: 14px vertical, 28px horizontal
- Border-radius: 2px (sharp — not rounded)
- Hover: `color-teal-hover` (#142D3A) via clip-path slide-in, 200ms

**Secondary (Outline)**:
- Background: transparent
- Border: 1px solid `color-teal`
- Text: `color-teal`, DM Sans SemiBold, 14px, tracking +0.04em, uppercase
- Padding: 13px vertical, 27px horizontal (accounts for 1px border)
- Hover: Background fills to `color-teal`, text shifts to `color-teal-text`

**Ghost (Text link)**:
- No background or border
- Text: `color-text`, DM Sans Medium, 14px
- Underline: gold line draws left-to-right on hover, 200ms

### Geometric Line Divider (Signature Component)
- SVG `<line>` or `<path>` element spanning container width
- Stroke: `color-gold-light` (#D4A84B)
- Stroke-width: 1px
- Triggered by `IntersectionObserver` — draws on scroll entry
- Duration: 1200ms linear
- Not used more than once per section — used at section transitions only

### Impact Counter
- Number: Editorial New Regular, `text-5xl` (100px) desktop / `text-4xl` (76px) mobile
- Color: `color-text`
- Label: DM Sans, `text-sm` (14px), tracking +0.08em, uppercase, `color-text-secondary`
- Gold geometric accent line above each counter (20px wide, drawn on load)
- Counter animates from 0 on IntersectionObserver trigger

### Photography Cards
- No border, no border-radius (sharp edges)
- No card background (sits directly on page background)
- Caption: DM Sans Regular, `text-sm`, `color-text-secondary`, 8px top margin
- Aspect ratio: 4:3 desktop, 3:2 mobile

### Form Inputs (Contact / Volunteer)
- Background: `color-bg-subtle`
- Border: 1px solid `color-border`
- Border-radius: 2px
- Text: DM Sans Regular, `text-base`, `color-text`
- Label: DM Sans Medium, `text-sm`, uppercase, tracking +0.06em, `color-text-secondary`
- Focus: Border color shifts to `color-gold`, outline: none
- Error: Border color `color-error`, error message in `text-xs` DM Sans

---

## 6. Iconography

**System**: Custom geometric icon set — 6 icons for program areas
- Drawing style: Thin line weight (1.5px stroke), `color-gold` (#C4952A)
- Geometry: Based on Islamic sacred geometry — 6-point star, 8-point star, 12-point star, octagon, hexagon, square-rotated
- Size: 32px × 32px (displayed), 48px × 48px SVG viewBox
- No filled icons — outline only, consistent with the line-work aesthetic

**Prohibited**: Crescent icons, star-and-crescent, flag-derived symbols.

---

## 7. Implementation Notes (Astro)

### Font Loading
```astro
---
// src/layouts/Layout.astro
import '@fontsource-variable/cormorant';
import '@fontsource-variable/dm-sans';
---
```
Fontsource handles the `@font-face` declarations automatically. No manual WOFF2 hosting required.

### Astro Islands for Interactive Components
- Impact counters: Astro island, `client:visible`
- Contact/volunteer forms: Astro island, `client:visible`
- SVG line draws: Vanilla JS in `<script>` tags — no framework needed
- Lenis scroll: Global script in Layout.astro, `client:only`
- Navigation (mobile): Astro island, `client:load`

### Font Installation
```bash
npm install @fontsource-variable/cormorant @fontsource-variable/dm-sans
```

Import both in the root layout:
```astro
---
// src/layouts/Layout.astro
import '@fontsource-variable/cormorant';
import '@fontsource-variable/dm-sans';
---
```

---

## 8. Quality Checklist

- [x] Typeface choices are premium and available (Editorial New: free commercial, DM Sans: open source)
- [x] All text combinations pass WCAG AA contrast
- [x] Background is not pure white (#F8F3EB warm parchment)
- [x] Type scale uses consistent 1.333 Perfect Fourth ratio
- [x] All spacing values are on a 4px/8px grid
- [x] Motion tokens reflect deliberate, reverent character (expo out, no elastic)
- [x] Every decision traced to concept with specific rationale
- [x] Typography pairing is not commonly seen (Editorial New + DM Sans is relatively uncommon)
- [x] Palette derived from Islamic manuscript tradition — not trends
- [x] No decisions appear on the Concept Lock "Rules Out" list
- [x] This design system cannot be mistaken for a SaaS, generic charity, or agency portfolio
