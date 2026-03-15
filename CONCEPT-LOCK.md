# Concept Lock: Orphan Aid
**Concept**: The Covenant
**One sentence**: "A site where the design itself is a covenant — precise, enduring, and worthy of the promise it asks you to make."
**Axis coordinate**: Warm / Minimal / Purposefully Kinetic / Structured-Editorial / Polished-Human / Declarative

---

## The Filter

Every design decision in this project must pass this filter:

> "Does this feel precise, enduring, and worthy of a covenant?"

If the answer is "no" or "maybe", reconsider the decision. Decorative elements that don't earn their place, animations that exist for personality rather than meaning, and any visual shortcut that trades dignity for energy — all fail this filter.

---

## This Concept Explicitly Rules Out

These design choices contradict the concept. Never use them on this project:

- [ ] Any shade of green in the palette (belongs to the competitor cliché space)
- [ ] Photography in the hero section (the typography IS the hero)
- [ ] Card grid layouts with rounded corners and drop shadows
- [ ] Crescent or star iconography as brand elements
- [ ] Gradient backgrounds or overlay gradients on photography
- [ ] Donation thermometers, progress bars, or countdown timers
- [ ] Popup modals of any kind
- [ ] Bouncy, elastic, or spring-based animations
- [ ] Humanist/handwritten typefaces (warmth is carried by palette and copy, not script type)
- [ ] Pure white (#FFFFFF) or pure black (#000000) as background or primary text colors
- [ ] More than two typefaces (Editorial New + DM Sans — that is all)
- [ ] Button border-radius above 2px
- [ ] Stock photography depicting children in visible distress or poverty

---

## The Safe Version We Are NOT Building

A WordPress charity template with a green header, a hero image of a sad child with "Donate Now" overlaid in white, a donation thermometer showing 67% to goal, three card-grid program tiles, and a popup modal after 5 seconds. A site that a visitor could mistake for Islamic Relief, Penny Appeal, or any of five other organizations they've seen. A site that competes on the same visual ground as everyone else and loses because it arrived late.

---

## Concept Traceability Checks

**Typography**: Editorial New headings carry gravity and institutional trust. DM Sans body carries warmth and clarity. The hierarchy must be dramatic — display type should feel like it occupies physical space. What would be wrong: casual, rounded, friendly display typefaces (Nunito, Poppins, Raleway); anything that reads as "modern startup."

**Color**: The palette is parchment + teal + gold. Teal and gold appear sparingly — color is punctuation. What is off-limits: green, orange, purple, blue-purple gradients; any color that reads as "generic Islamic charity" or "SaaS startup."

**Layout**: Generous vertical rhythm, editorial column breaks, strict 12-column grid with purposeful violations for display headlines. What breaks it: equal-column card grids, dense information layouts, cluttered sidebars.

**Motion**: Deliberate and reverent — SVG stroke draws, fade-ups, counter animations. What would contradict it: bounce physics, particle systems, cursor trails, hover scale effects on images, anything that reads as "creative agency portfolio."

**Copy tone**: Warm, direct, dignified. Invites rather than pressures. Frames sponsorship as covenant/sadaqah jariyah. What tone is wrong: urgency marketing ("Act now! Only 3 sponsorships left!"), guilt-based appeals, corporate mission-statement language.

---

## Decision Log

*(Updated during craft-system and craft-build as decisions are made)*

| Decision | Rationale | Traces to concept? |
|---|---|---|
| Typeface: Cormorant Garamond (variable, Fontsource) | High-contrast editorial serif — institutional gravitas, centuries of trust in the letterform. Free commercial license via SIL OFL. | Yes |
| Typeface: DM Sans (body only) | Warm, legible humanist sans — supports Editorial New without competing | Yes |
| Type scale: Perfect Fourth (1.333) from 18px | Editorial base size + clear hierarchy ratio; dramatic enough for display, readable at body | Yes |
| Background: #F8F3EB warm parchment | Islamic manuscript tradition; warm without being yellow; nothing in charity sector uses this | Yes |
| Accent: #C4952A Islamic gold | Heritage, hope, precision — the color of gold leaf in illuminated manuscripts | Yes |
| CTA/Interactive: #1B3A4B deep teal | Trust, depth, calm authority — deliberately exits the Islamic charity green space | Yes |
| No photography above fold | Restraint is the concept's most courageous decision; silence creates impact | Yes |
| SVG geometric line dividers | Sacred geometry as structural element, not decoration; animates on scroll | Yes |
| Sharp button corners (2px) | Precision and commitment — rounds signals consumer/casual, sharp signals covenant | Yes |
| Section padding: 160px desktop / 96px mobile | Premium breathing room signals organizational confidence — not desperate for space | Yes |
| Easing: ease-out-expo primary | Deliberate deceleration — motion slows into rest, like something being placed with care | Yes |
| No elastic/spring easing | Bouncy motion contradicts the weight and reverence of a covenant | Yes |
| SVG draw duration: 1200ms linear | Slow enough to feel intentional, fast enough not to frustrate — reveals the pattern | Yes |
