# Design Audit: Orphan Aid
**Date**: 2026-03-15
**Audited by**: craft-audit
**Overall Score**: 81/110

---

## Score Summary

| Dimension | Score | Key Finding |
|---|---|---|
| 1. Concept Strength | 9/10 | "The Covenant" is fully articulated and traceable in nearly every decision |
| 2. Typography | 8/10 | Cormorant Garamond performs beautifully; a few size/weight inconsistencies across sections |
| 3. Motion & Interaction | 7/10 | Hero entrance and geo line draws are excellent; magnetic CTA breaks concept with elastic easing |
| 4. Visual Hierarchy | 8/10 | Page reads cleanly; scroll cadence is strong; pillar stagger doesn't resolve on desktop |
| 5. Whitespace | 9/10 | 160px section padding is premium and deliberate; one section feels sparse relative to content weight |
| 6. Content Quality | 6/10 | Photo moment uses a group stock shot that contradicts the withheld-reveal concept |
| 7. Mobile Experience | 7/10 | Hero is stunning on mobile; mid-page sections have long empty stretches and pillars lose editorial rhythm |
| 8. Technical Quality | 8/10 | Semantic HTML, JSON-LD, skip link, reduced motion — solid; elastic easing and box shadow violate system |
| 9. Brand Coherence | 8/10 | Palette, type, geometry are coherent; elastic easing and gold CTA button are system deviations |
| 10. Memorability | 9/10 | Typographic hero on cream with no photography is genuinely rare; teal CTA break lands with force |
| 11. Distinctiveness | 10/10 | Nothing in the Canadian Islamic charity space looks remotely like this |
| **Total** | **81/110** | |

---

## Dimension Detail

### 1. Concept Strength — 9/10

"The Covenant" is not a mood board — it is a structural argument. Every major decision traces back to a stated rationale: the parchment palette references Islamic manuscript tradition; Cormorant Garamond's thick-thin contrast mirrors the geometric line work; the withheld photography creates earned weight; the single teal section functions like a page break in a liturgical text. The concept filter ("Does this feel precise, enduring, and worthy of a covenant?") is operative — the site does not feel assembled, it feels authored.

The one-point deduction is for a concept leak in the sponsorship tiers on the `/sponsor` page: that page uses a standard `grid-cols-3` equal-column card layout with border highlights, rather than the asymmetric editorial column layout specified in the concept and correctly implemented on the homepage (`grid-cols-12` with a 4/5/3 column split). A secondary page reverting to a conventional layout is the most common way concept integrity erodes across a multi-page site.

**Evidence**:
- Gold geometric line draws, Cormorant at display scale, teal reserved for one moment — all trace directly to CONCEPT.md
- `elastic.out(1, 0.55)` in Hero.astro line 318 is a direct violation of CONCEPT-LOCK.md ("Bouncy, elastic, or spring-based animations" are explicitly prohibited)
- Sponsor page tiers: `grid-cols-3` equal columns vs. homepage's `grid-cols-12` asymmetric editorial layout

**To improve**: Replace the sponsor page tier layout with the asymmetric column approach used on the homepage. Fix the elastic easing violation — `power3.out` at 0.5s is the correct replacement.

---

### 2. Typography — 8/10

Cormorant Garamond performs with genuine distinction at display scale. The hero headline — "Caring for Orphans / *Worldwide.*" — with Roman/Italic split across two lines is one of the site's strongest decisions: the italic on "Worldwide." carries spiritual weight without being decorative. The pull quote in CovenantSection is set correctly in italic at generous size. Using Cormorant for impact numbers (847+, 12, 100%) is exactly right — numbers rendered in type, not data visualization. The DM Sans / Cormorant pairing holds throughout.

Two issues prevent a 9. First, H3s in the pillars section top out near 2.6875rem via the clamp at 1440px — for single-word headings like "Education" and "Healthcare" this is slightly oversized relative to the body copy beneath, creating too small a gap between H3 and body in the hierarchy. Second, the trust section mixes font families inline: "Registered *CANADIAN CHARITY*" pairs 2rem Cormorant with 1rem DM Sans all-caps in the same line. The technique is sound but the weight ratio (2rem vs. 1rem) makes the subordinate label feel dwarfed rather than annotating.

**What works**:
- Hero Roman/Italic split is a strong typographic decision — the italic earns its place
- Impact numbers in Cormorant at 76–100px are architectural, as the concept intends
- `text-wrap: balance` on all headings prevents widows across breakpoints
- DM Sans at 18px base with 1.65 line-height is comfortable for the older end of the audience

**What doesn't**:
- H3 in CovenantSection: clamp tops at ~43px at 1440px for single-word headings — reduce to `clamp(1.5rem, 2.5vw, 2rem)`
- TrustSection inline mixed-family: `font-body` span at 1rem beside 2rem Cormorant creates unbalanced optical weight — raise inline label to 1.125rem

**To improve**: Cap H3 in CovenantSection. In TrustSection, increase the inline `font-body` label size. The citation em-dash in the pull quote (`PROPHET MUHAMMAD ﷺ — SAHIH AL-BUKHARI`) would benefit from thin spaces on either side of the dash — it sits tight at current tracking.

---

### 3. Motion & Interaction — 7/10

The motion system has genuine craft at its best moments. The hero entrance sequence — label fades up, headline lines rise from beneath clip masks (y: 105% → 0% with power4.out), subhead, then CTAs — is the kind of staggered reveal that feels intentional rather than decorative. The gold geometric line draws (stroke-dashoffset animation, 1.1s, power2.inOut) are the site's most distinctive interaction and land exactly as the concept describes: something being revealed rather than performed. The page transition (scaleY wipe from bottom, 400ms) is clean. Lenis + GSAP ScrollTrigger integration is correct.

Two problems. The more serious: `ease: 'elastic.out(1, 0.55)'` on the magnetic CTA button's mouseleave in Hero.astro line 318. Elastic easing is explicitly prohibited in CONCEPT-LOCK.md. The magnetic pull is the one interaction the concept specifies for special treatment — and it bounces back to rest. This directly contradicts the "deliberate and reverent" motion character. Second: the tier card hover state uses `translateY(-5px)` plus `box-shadow: 0 20px 48px` in SponsorshipTiers.astro. Box shadows are ruled out by DESIGN_SYSTEM.md; elevation must come from color step, not shadow.

**Evidence**:
- Hero.astro line 318: `ease: 'elastic.out(1, 0.55)'` — explicit concept violation
- SponsorshipTiers.astro line 111: `box-shadow: 0 20px 48px rgba(28, 18, 8, 0.08)` — explicit system violation
- Reduced motion handling is thorough and correct throughout all components

**To improve**: `elastic.out` → `power3.out, duration: 0.5` on magnetic button mouseleave. Tier card hover: remove `box-shadow` and `translateY`, replace with `background-color: var(--color-bg-subtle)` transition.

---

### 4. Visual Hierarchy — 8/10

The page reads with clear intent: the label / headline / body / CTA pattern repeats with enough variation that each section feels distinct. The gold geometric line dividers create cadence without visual noise. The single teal section works precisely because everything above it is cream — the eye arrives at it with force.

The two-point deduction is for the CovenantSection pillar stagger. Pillar 1 sits left (col-span-5), pillar 2 shifts right (col-start-7, mt-20) — a strong editorial move. But pillar 3 returns to near-left-column (col-span-5) with only mt-4 offset, which doesn't resolve the arc initiated by pillar 2. The eye expects either a return to true baseline (closing the zigzag) or a continued step rightward. The current mt-4 / ambiguous column position lands as incomplete rather than intentional.

**To improve**: Give pillar 3 either `lg:col-start-1 lg:mt-16` (closing the zigzag cleanly) or `lg:col-start-8 lg:mt-8` (completing a rightward progression). The current near-left position with minimal vertical offset doesn't resolve the visual rhythm.

---

### 5. Whitespace — 9/10

The 160px desktop / 96px mobile section padding signals precisely what the concept intends: an organization confident enough not to fill every pixel. The hero's `py-64` on desktop gives the typographic headline room to function as architecture. The CovenantCTA `py-40` against deep teal lands with appropriate weight.

One minor note: the ImpactStats section applies the same 160px padding as content-heavy sections, but contains only three centered numbers with two lines of supporting text each. The numbers float on the cream-adjacent surface in a way that feels more sparse than composed. A 120px top/bottom would tighten the frame without compromising the premium feel. This is a judgment call — the current spacing is system-consistent — but the visual gap between the stats and the pull quote below implies more conceptual distance between them than they warrant.

---

### 6. Content Quality — 6/10

This is the score most limiting an Awwwards submission. The photography has a critical misalignment with the concept.

CONCEPT.md Section 4 specifies: "Full-bleed image: a child in warm afternoon light, looking out a window or into the distance — hopeful, not performing sadness." The actual image (Unsplash `photo-1488521787991-ed7bbaae773c`) shows approximately five children facing the camera, laughing and making peace signs. It avoids poverty exploitation — that constraint is met — but it is the structural opposite of the withheld-reveal strategy. The concept builds an entire scroll arc toward the first human photograph; the editorial payoff requires a single child in directional light not looking at the viewer. A group portrait facing the camera is a stock charity image, regardless of the warmth of the subject matter. The "earned reveal" is not earned.

The copy throughout is excellent — genuinely above average for a charity project. The covenant framing, sadaqah jariyah language, and "promise that continues to give" are specific and resonant. This is the best writing in the Canadian Islamic charity sector and would stand out on an Awwwards jury.

**Evidence**:
- PhotoMoment.astro: Unsplash `photo-1488521787991-ed7bbaae773c` — group shot, direct camera gaze
- Footer.astro line 37 shows `#891782436 RR 0001` in source; screenshot shows `[PLACEHOLDER — Registration No. to be supplied]` — a build/cache discrepancy, not a source error
- Copy quality in CovenantCTA, CovenantSection, and About is strong and concept-coherent

**To improve**: Replace the photo with a single-child, warm directional light, non-frontal image. Unsplash search terms: "child window light," "child contemplative warm light," "child morning light looking away." Rebuild to confirm footer registration number renders from current source.

---

### 7. Mobile Experience — 7/10

The mobile hero is excellent. At 375px, Cormorant scales to approximately 56–64px via the clamp, the Roman/Italic split holds, the gold geometric line ornament is visible, and the two CTAs stack with sufficient touch targets. The full-screen mobile menu using large Cormorant links is a premium pattern — not utilitarian. The hamburger-to-X animation is geometrically correct.

Two issues. First, the desktop-full screenshot at zoomed-out scale reveals an extended blank section between the hero and the stats — likely the ImpactStats section at 96px padding with minimal content, compounded by the counters starting at zero before scroll trigger fires. The static screenshot may exaggerate this, but it indicates the mobile section transitions have not been reviewed at a scroll-level pass. Second, the CovenantSection pillars on mobile collapse to three stacked blocks without any visual differentiation. The editorial stagger that makes the desktop layout compelling is entirely absent; the result reads as a feature list. A left-border treatment echoing the TrustSection's vertical gold lines would restore rhythm in one CSS addition.

**To improve**: Audit the mobile scroll experience from hero to stats at 375px — confirm no excessive blank gap. Add `border-l border-gold pl-6` to pillar items on mobile in CovenantSection.astro, using `lg:border-none lg:pl-0` to override on desktop.

---

### 8. Technical Quality — 8/10

The technical foundation is solid. Semantic HTML is used correctly: `<section aria-label>`, `<blockquote>` with `<footer>` and `<cite>`, `<address>` for contact details, `aria-hidden` on all decorative SVGs, `role="banner"` and `role="contentinfo"` on header/footer. JSON-LD structured data for `Organization/NGO` is complete with address, contact, and founding location. Skip-to-content uses `sr-only focus:not-sr-only` correctly. Focus states use a visible gold outline. Reduced motion handling is thorough: counters show final values, SVG lines appear immediately, all transition durations collapse to 0.01ms.

Three issues prevent a 9: the elastic easing violation (documented above); the `box-shadow` on tier card hover (documented above); and a minor structural duplication where `tokens.css` defines base styles for `body` and `h1–h6` and `globals.css` imports `tokens.css` while re-declaring the same base styles — not a bug, but a maintenance hazard that increases in danger as the codebase grows.

---

### 9. Brand Coherence — 8/10

The palette has no green, no orange, no rounded corners beyond 2px, no box shadows, no gradients, no crescent iconography — every prohibited element from CONCEPT-LOCK.md is absent. The typeface discipline is absolute. The 8-point gold geometric star in the navigation that rotates 22.5deg on hover is one of the site's best micro-decisions: it rewards close attention without performing for it.

Two deductions. First, the CovenantCTA gold CTA button (`background-color: #C4952A`) introduces a third interactive color state — the system specifies teal for interactive CTAs and reserves gold exclusively for geometric line work and accents. A gold button on a teal background reads as an accent-turned-CTA, which blurs the palette's scarcity logic. A white-background button with dark text, or a `color-teal-hover` fill, would be more coherent. Second, the elastic easing in the magnetic button is a direct system contradiction — brand coherence includes motion system coherence.

---

### 10. Memorability — 9/10

Twenty-four hours after seeing this site, a visitor would remember: cream-and-teal with no green; a typographic hero with no photography; gold lines that draw themselves on scroll; "Begin your covenant today" in deep teal. These are specific, unusual, and emotionally resonant. The covenant framing — sponsorship as sacred promise rather than transaction — is the site's most memorable idea and is carried consistently through the copy.

The one-point gap is for the hero geometric watermark pattern (the slowly rotating 8-pointed star field at 4% opacity). It is a concept-correct element — "the underlying order becoming visible" — but at current opacity it is invisible at normal viewing distance. It contributes nothing perceptible. Either raise to 6–7% opacity (still subtle, just barely discernible on close inspection) or remove it and accept the hero's power is its restraint.

---

### 11. Distinctiveness — 10/10

Full score, no reservations. Nothing in the Canadian Islamic charity sector looks like this. The comparison class (Islamic Relief, Penny Appeal, Human Concern International, LaunchGood) is entirely green/orange, photography-first, card-grid. This site occupies completely uncontested visual territory. The parchment + teal + Cormorant combination has no precedent in the category.

From an Awwwards perspective: even in the broader editorial/nonprofit category this site competes favorably. It is less photography-dependent, more typographically ambitious, and more culturally specific than charity: water's established benchmark. The self-drawing gold geometric lines as section dividers are genuinely original as a structural device.

---

## Top 5 Improvements (Highest Impact)

Prioritized by score impact:

1. **Replace the photo moment image** (affects: Content Quality +2, Concept Strength +0.5, Memorability +0.5, estimated +3 points)
   - Current: Unsplash `photo-1488521787991-ed7bbaae773c` — group of children laughing and facing the camera directly
   - Problem: Directly contradicts the concept specification of a single child in warm directional light not looking at the viewer. The "withheld reveal" strategy — the entire scroll narrative — requires an editorial image of one child at the moment of emotional peak. A group portrait against a neutral background is a stock charity image regardless of mood
   - Fix: Replace with a single-child, warm afternoon directional light, non-frontal frame. Unsplash search: "child window light portrait," "child contemplative warm light," "child morning light looking away." The image should feel like a still from a documentary, not a charity brochure

2. **Fix the elastic easing violation** (affects: Motion & Interaction +1, Brand Coherence +0.5, Technical Quality +0.5, estimated +2 points)
   - Current: `ease: 'elastic.out(1, 0.55)'` in Hero.astro line 318 — the magnetic CTA button bounces back to center on mouseleave
   - Problem: Explicitly prohibited by CONCEPT-LOCK.md. The concept's most carefully specified interaction — the magnetic CTA — returns to rest with a bounce that directly contradicts "deliberate and reverent" motion character
   - Fix: Change to `ease: 'power3.out', duration: 0.5` — the button returns with deceleration, not rebound

3. **Remove the tier card box-shadow hover** (affects: Motion & Interaction +0.5, Brand Coherence +0.5, Technical Quality +0.5, estimated +1.5 points)
   - Current: `.tier-card:hover` in SponsorshipTiers.astro applies `translateY(-5px)` and `box-shadow: 0 20px 48px rgba(28, 18, 8, 0.08)`
   - Problem: Box shadows are explicitly prohibited by DESIGN_SYSTEM.md. The lift + shadow reads as standard card UI from a component library, not the covenant design system
   - Fix: Remove `box-shadow` and `translateY`. Replace with `background-color: var(--color-bg-subtle)` transition at 350ms. The visual feedback remains; the system violation is resolved

4. **Resolve the pillar stagger arc on desktop** (affects: Visual Hierarchy +1, estimated +1 point)
   - Current: CovenantSection pillar 3 sits at `lg:col-span-5 lg:mt-4` — near-left-aligned with minimal vertical offset, not resolving the rightward-down arc initiated by pillar 2's `col-start-7 lg:mt-20`
   - Problem: The editorial rhythm starts a descending-rightward arc with pillar 2 and doesn't complete it. The eye expects resolution; it gets ambiguity
   - Fix: Change pillar 3 to `lg:col-start-2 lg:mt-16` (closing arc back to near-left, completing a descent) or `lg:col-start-8 lg:mt-8` (continuing the rightward step). Either resolves the visual rhythm; the current position does neither

5. **Restore editorial rhythm to mobile pillars** (affects: Mobile Experience +1, estimated +1 point)
   - Current: Three pillars stack as plain vertical blocks on mobile — icon, heading, body — with no visual differentiation between sections
   - Problem: The asymmetric column stagger that makes the desktop pillars feel considered is entirely absent on mobile. Three identical stacked blocks read as a feature list
   - Fix: Add `border-l border-gold pl-6` to each pillar wrapper on mobile in CovenantSection.astro (override with `lg:border-none lg:pl-0`). This echoes the vertical gold line treatment in TrustSection and restores rhythm with one CSS addition

---

## Quick Wins (Under 30 Minutes)

- [ ] Replace `elastic.out(1, 0.55)` with `power3.out` on the magnetic button mouseleave — Hero.astro line 318
- [ ] Remove `.tier-card:hover` `box-shadow` and `translateY` in SponsorshipTiers.astro — replace with `background-color: var(--color-bg-subtle)`
- [ ] Raise hero watermark pattern opacity from `opacity-[0.04]` to `opacity-[0.065]` in Hero.astro — makes the sacred geometry watermark barely perceptible on close inspection
- [ ] Add `border-l border-gold pl-6 lg:border-none lg:pl-0` to pillar items in CovenantSection.astro — one line restores mobile rhythm
- [ ] Rebuild and confirm the footer registration number renders correctly — source shows `#891782436 RR 0001` but screenshot shows `[PLACEHOLDER]`, which suggests a stale build artifact
- [ ] Fix the sponsor page tier layout from `grid-cols-3` equal-column cards to the asymmetric `grid-cols-12` editorial column layout used on the homepage

---

## What's Working Well

The site's most significant achievement is its restraint. In a sector defined by urgency — countdown timers, popup modals, sad-child photography above the fold — this site opens with empty parchment, a high-contrast serif headline, and a hairline gold ornament. Committing to this takes design courage. The Cormorant Garamond choice is excellent at a technical and conceptual level: at display scale, the thick-thin contrast of the letterforms echoes the 1px gold SVG line work, creating a typographic and visual language in genuine dialogue with each other. The font is doing conceptual work, not just aesthetic work.

The motion system, at its best moments, is among the most considered in its category. The gold line draws are synchronised beautifully to scroll triggers, and the 1.1–1.2s timing with power2.inOut gives them the sense of something being inscribed rather than animated. The hero entrance sequence — clip-masked headline lines rising from beneath, then sub-headline, then CTAs — achieves the "curtain drawn aside" quality the concept specifies. The page transition (scaleY wipe from bottom/top, 400ms) is clean and fast enough not to frustrate while present enough to reinforce the site's intentional character.

The copy is significantly above average for a charity project. The brief's voice directive — warm, direct, dignified, speaking like a trusted community leader — is carried through consistently in "Begin your covenant today," the sadaqah jariyah framing in the CovenantCTA, and the About page's founding narrative. These are not placeholder words dressed in good type. The words and the design are working together, which is rare.

---

## If This Were Submitted to Awwwards

The jury would respond well to the concept clarity, typographic restraint, and palette distinctiveness. The "Worldwide." italic close on the hero headline — a single word, italic, on its own line — is the kind of decision that experienced jury members recognise and note. The self-drawing gold lines as section dividers would likely appear in jury comments as a signature move.

What would prevent a Site of the Day nomination in current state: the photo. Awwwards SOTD nominations in the editorial/nonprofit category consistently feature photography at the same level of intentionality as the design. The group-shot stock photo breaks the editorial spell at the exact moment it should peak. The jury would mark Content Quality down to the low 5s, and that score drags the overall into Honourable Mention or Developer Award territory rather than SOTD.

With the photo replaced and the elastic easing fixed — two changes, one of which is a single line of code — this site is a genuine SOTD candidate. Not because it looks expensive, but because it looks *decided*. The concept is specific enough that a jury can see the thinking, and the execution is clean enough that the thinking lands.

Estimated jury scores in current state: Design ~7.5, Usability ~7.0, Creativity ~8.0, Content ~5.5 — approximately 7.0 overall (Honourable Mention territory).
Estimated jury scores after top 2 fixes: Design ~8.0, Usability ~7.5, Creativity ~8.5, Content ~7.5 — approximately 7.9 overall (SOTD territory).
