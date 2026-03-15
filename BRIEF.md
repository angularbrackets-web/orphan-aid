# Project Brief: Orphan Aid
**Date**: 2026-03-14
**Project type**: New build
**Stage**: Brief

---

## 1. Client & Project

| Field | Detail |
|---|---|
| Company | Orphan Aid |
| Industry | Nonprofit / Humanitarian / Islamic Charity |
| What they do | A registered Canadian charity providing care, education, and monthly sponsorship support for orphaned children worldwide |
| Current site | None (greenfield) |
| Primary goal | Drive monthly orphan sponsorship commitments |
| Success metric | Number of sponsorship sign-ups; time-on-site; scroll depth past sponsorship section |
| Primary CTA | "Sponsor an Orphan" — monthly commitment |

---

## 2. Audience

### Primary Audience
- **Who**: Muslim-Canadians, ages 25–55, community-oriented, family-focused; familiar with the Islamic obligations of sadaqah (voluntary charity), kafala (orphan guardianship), and sadaqah jariyah (ongoing charity with lasting reward)
- **What they care about**: Legitimacy of the organization, Islamic validity of the cause, accountability of funds, and direct impact on a specific child's life
- **Their doubts/objections**: "Is this org legit and registered?", "Will my money actually reach the orphan?", "How do I know the impact is real?", "Is this tax-deductible in Canada?"
- **What convinces them**: Charity registration displayed prominently, a clear breakdown of where monthly funds go, a personal story or child profile, and the framing of sponsorship as sadaqah jariyah — a spiritually continuous act of good

### Secondary Audience
- **Who**: Humanitarian-minded Canadians of all backgrounds motivated by the universal cause of child welfare
- **Different needs**: Less religious framing, more emphasis on transparency, impact metrics, and Canadian registration credibility

---

## 3. Brand Personality

**Five adjectives**: Resolute · Tender · Trustworthy · Community-rooted · Quietly urgent

**Tone of voice**: Warm, direct, and dignified — speaks like a trusted community leader, not a corporate donor-capture machine. Never guilt-trips. Never exploits. Invites rather than pressures.

**Brand ambition (3-year vision)**: To be Canada's most trusted Islamic charity for orphan welfare — known for radical transparency, dignified storytelling, and measurable impact

**Existing brand assets**: No formal brand guidelines provided; logo/colors to be developed as part of this project; charity registration number placeholder to be used until official number is supplied

**Admired brands (outside industry)**:
- **charity: water**: Bold, human, story-driven transparency — donating feels personal and traceable
- **Patagonia**: Mission-driven authenticity — the cause is woven into every design decision
- **Aesop**: Quiet confidence, restraint, typography-forward — never shouts, always trusted

---

## 4. Emotional Direction

| Moment | Feeling |
|---|---|
| First 3 seconds | Moved but not manipulated — a quiet weight of responsibility and possibility |
| After 2 minutes | Inspired and trusting — I understand exactly what this org does, where my money goes, and why it matters |
| After taking action | Meaningful connection — I've made a commitment that continues to give, spiritually and practically |

**One word that defines this experience**: CONVICTION

**Must NOT feel**: Guilt-tripping · poverty-exploitative · cold · generic · cluttered · like a donation thermometer site · like a 2015 WordPress charity template

---

## 5. Visual References

### Admired Sites (synthesized direction — no URLs provided by client)
| Reference | What Works | Specific Element |
|---|---|---|
| charity: water | Story-first, human faces with dignity, bold typographic hierarchy | Impact statistics animated on scroll |
| UNHCR | Gravitas and scale without feeling bureaucratic | Full-bleed editorial photography, restrained palette |
| Doctors Without Borders | Urgent but never exploitative; trust signals woven throughout | Clear program breakdowns, strong nav structure |

### Sites to Avoid
| Type | Why |
|---|---|
| Generic Islamic charity template sites | Stock sad-child photos, green/crescent clichés, cluttered "DONATE NOW" popups |
| Purple/blue SaaS-style charity sites | Cold, transactional, no cultural resonance, donation thermometer UX |

### Visual Style Keywords
Editorial · Warm-restrained · Dignified · Geometrically grounded · Human · Purposefully minimal · Quietly powerful

---

## 6. Content Inventory

### Pages/Sections Required
- [x] Home — Hero, impact stats, sponsorship program overview, trust signals, footer
- [x] Sponsor an Orphan — Sponsorship tiers, what it covers, monthly commitment framing
- [x] About — Mission, values, registration, team placeholder
- [x] Donate — One-time or recurring donation (CTA placeholder, no payment gateway)
- [x] Volunteer — How to get involved, placeholder form
- [x] Contact — Form, address, phone, email, map embed placeholder

### Key Messages (priority order)
1. Every orphaned child deserves consistent care — and your monthly commitment makes that possible
2. Orphan Aid is a registered Canadian charity — accountable, transparent, and community-trusted
3. Sponsoring an orphan is among the most rewarding acts in Islam — and it begins with a single decision

### Content Status
| Type | Status |
|---|---|
| Copy | Partial (taglines and program descriptions provided); remaining copy to be created |
| Photography | Stock — curated, warm-toned, dignified; no client assets available |
| Video | Not needed for v1 |
| Illustrations | Subtle geometric pattern assets to be created as part of design system |
| 3D/Motion | Not needed |

### Client-Provided Copy

**Taglines:**
- "Caring for Orphans Worldwide" ← Hero primary
- "Supporting Orphans with Care and Resources"
- "Extending a Helping Hand to Orphans in Need"
- "Providing Vital Care, Education, and Support for Orphans Worldwide"
- "Uplift Orphans Through Care, Education, and Empowerment"

**Programs & CTAs:**
- Orphan Sponsorship — Providing monthly support, education, and healthcare for orphaned children to ensure their bright future
- Sponsor an Orphan — Change a child's life with monthly sponsorship [PRIMARY CTA]
- Volunteer — Join our team and make a direct impact
- Donate — Support our mission with your generous contribution

**Contact:**
- Email: info@orphanaid.com
- Phone: +1 (647) 977 9901
- Address: 13750 100th Ave Unit #2010, Surrey, BC, V3T 0L3
- Charity Registration: [PLACEHOLDER — to be supplied]

---

## 7. Technical Context

| Field | Detail |
|---|---|
| Framework | Astro (static-first, islands architecture) |
| Styling | Tailwind CSS |
| Components | shadcn/ui (buttons, forms, dialogs, cards — selective use) |
| Forms | TanStack Form + Zod validation |
| Animation | Motion One (lightweight, Astro-compatible) |
| Scroll | Lenis smooth scroll |
| CMS needed | No — static v1; can add later (Sanity or Keystatic recommended when needed) |
| Integrations | Contact form (TanStack Form + Zod); no payment gateway (placeholder CTAs only) |
| Hosting | Vercel |
| Expected traffic | Low-medium (community/word-of-mouth launch) |
| Post-launch owner | Client (non-technical; CMS to be added in v2 if needed) |
| Performance target | Lighthouse 95+ |
| Accessibility | WCAG 2.1 AA required |

---

## 8. Constraints

**Timeline**: No hard deadline

**Budget tier**: Startup / indie

### Must-Haves
- "Sponsor an Orphan" CTA visible above the fold on the homepage
- Contact information (email, phone, address) in footer on every page
- Charity registration placeholder displayed prominently (About + Footer)
- Mobile-first design — majority of audience browses on mobile
- Arabic-compatible font pairing consideration (future localization readiness)

### Nice-to-Haves
- Individual child sponsorship profile pages (v2)
- Arabic language toggle (v2)
- Zakat calculator widget (v2)
- Impact tracker / transparency report section (v2)

### Hard Constraints
- No live payment gateway integration — placeholder CTAs only
- No CMS in v1 — fully static build
- No stock imagery that depicts children in distress or poverty exploitation
- No crescent/star as a logo element — avoid cliché Islamic visual shorthand

---

## 9. Competitive Visual Audit

### Competitor Visual Map
| Organization | Visual Language (3 words) |
|---|---|
| Islamic Relief Canada | Green-dominant · crowded · traditional |
| Penny Appeal Canada | Orange-energetic · busy · populist |
| Human Concern International | Dated · corporate · text-heavy |
| LaunchGood | Crowdfunding-platform · card-grid · generic |
| Orphan Sponsorship Canada (general) | Template · sad-photography · cluttered |

### What everyone in this space does (the cliché space)
- Green or orange color palette (Islamic charity default)
- Hero with sad child photography and overlaid donation button
- Donation thermometer / progress bar UI
- Crescent and star iconography as primary brand element
- Card grid layout for "programs" with generic stock photos
- Popup donation modals with countdown timers

### What nobody does (the whitespace)
- Editorial, typography-led design with generous whitespace
- Warm earth/terracotta/gold palette divorced from "Islamic green" convention
- Geometric abstraction as a design system (not as a cliché icon)
- Documentary-style photography with hopeful, dignified framing
- A site that feels as considered as a luxury brand but serves a humanitarian mission
- Scroll storytelling — conveying impact through narrative motion

### Visual differentiation opportunity
The first Canadian Islamic charity whose website feels like it was designed by a world-class agency — where the quality of the design signals the quality of the mission.

---

## 10. Design Axis Positioning

| Axis | Position | Notes |
|---|---|---|
| Density (minimal ↔ dense) | 30% — Leaning minimal | Space signals dignity; overcrowding signals desperation |
| Temperature (cold ↔ warm) | 80% — Strongly warm | Warm gold, earth tones, human connection |
| Motion (static ↔ kinetic) | 55% — Purposefully kinetic | Counter animations, scroll reveals — never gratuitous |
| Layout (grid ↔ editorial) | 45% — Structured with editorial breaks | Grid backbone, moments of full-bleed editorial punctuation |
| Formality (corporate ↔ raw) | 40% — Polished but human | Elevated without being cold; accessible without being casual |
| Voice (declarative ↔ conversational) | 65% — Declarative | Confident calls to action; direct impact statements |

**Axis coordinate summary**: Warm / Minimal / Purposefully Kinetic / Structured-Editorial / Polished-Human / Declarative

---

## 11. Creative Direction Summary

**The site should make people feel**: Landing on this site, visitors should feel the quiet weight of the cause without being manipulated by it. After two minutes, they should feel the organization has earned their trust — through clarity, transparency, and restraint. After sponsoring, they should feel they've made a meaningful commitment that connects them to something larger than a transaction.

**The visual direction in one sentence**: Editorial warmth meets geometric precision — a site where every design decision communicates that this organization takes its work, and its donors, seriously.

**The risk to avoid**: Defaulting to the visual language of every other Islamic charity — green palette, crescent iconography, sad-child photography, cluttered donation UI — which would make Orphan Aid invisible in the space where it needs to stand out most.

**The opportunity**: Orphan Aid can occupy entirely uncontested visual territory in the Canadian Islamic charity sector — premium, dignified, story-driven — and signal through design alone that this is an organization worth trusting with a monthly commitment.

**The anti-brief (what we are NOT building)**: A WordPress charity template with a green header, popup donation modal, sad stock photos, and a donation thermometer. A site that looks like every other Canadian charity and gives donors no reason to choose Orphan Aid over the organization they already give to.
