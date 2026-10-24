# Alba Wellbeing: design record (redesign 2026-10)

## Brief
Lina Simavičiūtė, known as Alba: medically trained, self-employed live-in carer in Louth,
Lincolnshire, with optional wellbeing support (hypnotherapy, massage, Reiki, breathing).
Audience: adults 45 to 70 and their families, often worried, reading on phones, unhurried.
Job of the site: earn trust fast and get a phone call or a free first conversation.
Languages: EN (root), LT (/lt/), RU (/ru/). Old URLs are kept exactly.

## Concepts considered
| | Idea | Anchor | Signature | O/F/Fe/P |
|---|---|---|---|---|
| A. Process | *A happy we*: every page is a meeting of two voices, the family's question and Lina's answer, and the mark is two arcs (one solid, one open) rising on one horizon | her own motto "A happy we" and her method ("become another's hands, eyes, ears") | the hero figure: Lina's portrait as the solid arch, an empty arch for "you" overlapping it, the overlap lit like first light; it breathes at a resting breath rate | 4 / 5 / 4 / 2 |
| B. Name | *Alba* means dawn: the site lit by one low light from the horizon | the name | light rakes across type as you scroll | 3 / 3 / 4 / 4 |
| C. Place | Louth sits on the Greenwich meridian: one vertical line as the site spine | the town | everything hangs off a 0° line | 3 / 2 / 4 / 2 |

Picked A: it is hers (motto + method), it produces layout (question/answer pairs), the logo,
the hero, the steps and the 404. Stolen from B: the arcs read as a sunrise, so the mark carries
the name too. Stolen from C: the footer coordinate line.

## Concept card
```
Idea:        Two people, one horizon: you and Lina becoming "a happy we".
Metaphor:    Two arcs rising together at dawn. One solid (Lina), one open (you).
Signature:   Hero "we figure": Lina's real portrait cut as the solid arch, an open arch
             outline overlapping it, the lens between them filled with first light.
             Intro: the open arch slides in and the lens lights. Idle: the open arch
             breathes ±4 px on a 10 s cycle (6 breaths a minute, a resting rate).
Emotion:     Calm, met, safe. "Someone is coming to sit beside you."
Motion verb: meet in the middle, then settle (two halves close toward one centre line).
Screenshot:  The hero: question in italic, a plain "Yes." answer, the arch pair on the horizon.
```

## System
**Palette** (revised 2026-10-24 after owner feedback "the design must be cosy"): lamplight
linen and a late-evening ink, with first light as the only accent. Cream is used on purpose here:
the owner asked for cosy, and the dawn mark + plum ink keep it from the generic cream/terracotta look.
- ground `#F6EFE6` linen · surface `#EDE2D3` oatmeal · paper grain overlay
- ink `#2E2226` evening plum (13.4:1 on ground)
- muted `#6B5A54` (5.7:1, 5.1:1 on surface)
- accent `#F2A365` first light: fills only (lens, button flood, suns)
- ember `#9C4A17` accent for text and links (5.4:1)
- night sections `#2E2226`, text `#F6EFE6`, muted `#C9B8AE` (8:1)

**Type:** Literata (Google, variable opsz 7 to 72, Cyrillic + Latin Extended) for display, body
text (a book voice, cosier than a grotesk) and the family's voice in italic. Onest (Google,
variable, built for Cyrillic) only for UI: nav, buttons, labels, captions.
Both self-hosted, subset by unicode-range. Fraunces/Cormorant retired.
Two voices: *the question* is always Literata italic; *the answer* is Literata roman (headings)
or Onest (body). That is the typographic system, not decoration.

**Shape rule:** soft everywhere. Pills for actions, arches for people and photos, 1rem corners for panels and fields.

**Grid:** 12 columns, gutter `clamp(1rem, 2vw, 2.5rem)`. Two hanging lines: col 1 and col 7.
Questions start on col 1, answers on col 7.

**Motion:** ease `expo.out` for entrances, `expo.inOut` for curtains, 0.35 to 0.5 s hovers.
Buttons flood from both ends to the middle; nav underlines draw from both ends to the middle;
question/answer rows close the gap between the two halves on hover. Page transition: two
curtain panels meet in the centre (an apricot seam), then part on the new page (morning
curtains opening). No loader (quiet brief, older audience). No WebGL.

**Idle:** every `[data-we]` mark is driven by one module (`src/motion/we.ts`): gap = page
scroll progress (apart at the top, met at the bottom of the page) + breath. Paused off screen,
off under reduced motion.

## Composition plan (home)
```
1 HERO split      | “question” italic        |   ( Lina )( you )     |
                  | Yes. h1                   |  ___________________  |  horizon
                  | sub · [Book] [Call]       |                       |
2 DIALOGUE index  | q1 italic ........  | a1 roman + link          |  rows, hover closes gap
3 ASYMMETRIC pair | (arch portrait) |  h2 · prose · facts dl          |
4 STATEMENT night | three promises set large on ink, apricot arc rising at the base
5 STEPS horizon   | (  )  (  )   ()()   (◐)  on one line, three captions
6 FINALE footer   | The first conversation is free. · 07300 403632 big · mark met
```
Inner pages: hero (question + h1 + lead), prose + list sections on the two hanging lines,
FAQ as native `<details>`, the shared finale.

## Genericness test
- A generic model would ship cream + bronze + serif (the old site). Changed to dawn ink + first
  light, Literata + Onest.
- A generic model would ship three service cards. Changed to families' real questions with
  Lina's answers (also the best GEO format).
- A generic hero would be a stock photo with a headline. Changed to the arch pair that is the
  logo, built from her real portrait.

## Decisions
- Hypnotherapy/end-of-life pages no longer say "doctor" or show prices (positioning since
  2026-07: medically trained carer, fees agreed individually).
- The contact form opens the visitor's email app (mailto) with the message filled in. The old
  form only pretended to send. A real backend (Formspree or similar) is an owner decision.
- New page: `live-in-care.html`, the main service had no page of its own.

- Cosy pass (owner feedback 2026-10-24): warm palette, Literata body, paper grain, lamplight glow
  behind hero figures, atmospheric home photos (tea at the window, armchair, blankets) as arches on
  inner-page heroes and one "window" band on the home page. Copy rewritten in Lina's spoken voice
  ("Book a free chat", "We sit down and talk... over a cup of tea").
- Idle motion: the marks breathe on a 10 s cycle (resting breath rate). Kept deliberately small.
