// One Star, Written in Sap — entry program (Node 22+, main.ts).
//
// The brief: one line, under 280 characters, in the voice of a houseplant
// leaving a 1-star review of its human owner. It must work as a real review
// (grievance + a clear reason for the single star) and be funny. The judge
// weighs, most important first: (1) plant's own grievance at the centre,
// (2) genuinely funny — surprising turn / sharp plant's-eye grievance,
// (3) sounds like a houseplant (water, light, soil, pots, repotting, moving),
// (4) reads as a genuine one-star review, (5) fresh, specific detail —
// NO stock phrases about drama queens, dramatic wilting or being ignored.
//
// ---------------------------------------------------------------------------
// THREE CANDIDATES, scored against the judge's criteria (1 = weakest, 5 = best)
// ---------------------------------------------------------------------------
//
// CANDIDATE A — "One star: my watering schedule is whenever his ex texts,
// so I spend Mondays drowning and Thursdays in drought — even my roots
// have trust issues now."
//   (1) grievance central: 4 — erratic watering is a real plant grievance.
//   (2) funny: 4 — "drowning and dehydrated in the same week" is a good
//       surprising turn; "roots have trust issues" lands.
//   (3) plant voice: 4 — drowning/drought/roots are plant's-eye, but the
//       joke's engine (the ex texting) is a human-relationship joke; the
//       plant is more of a bystander to it.
//   (4) genuine review: 4 — clear complaint, clear 1-star reason.
//   (5) fresh detail: 3 — "whenever his ex texts" is specific, but the
//       watering-schedule complaint is a well-worn plant-review trope.
//   TOTAL: 19/25. Strong, but the punchline leans on the human's love life,
//   not on the plant's own world.
//
// CANDIDATE B — "One star. He replaced me with a fiddle-leaf fig and
// exiled me next to the router, where my only sunlight is the blinking
// Wi-Fi light. I survived three moves and one cat for this."
//   (1) grievance central: 5 — demotion + exile IS the whole line; the
//       plant's complaint drives every clause.
//   (2) funny: 5 — "my only sunlight is the blinking Wi-Fi light" is a
//       surprising, visual turn; "I survived three moves and one cat for
//       this" is a dry, earned kicker.
//   (3) plant voice: 5 — sunlight, repotting-adjacent displacement, pots
//       and placement: the entire joke is told in plant terms.
//   (4) genuine review: 5 — complaint (replaced, exiled) + 1-star reason
//       (demoted after loyal service) are both explicit.
//   (5) fresh detail: 5 — fiddle-leaf fig, the router, the blinking
//       Wi-Fi light, three moves, one cat: five concrete specifics, none
//       of them a stock plant phrase.
//   TOTAL: 25/25. The strongest: most on-brief, most original, most
//   memorable at first glance.
//
// CANDIDATE C — "One star: he waters me with leftover coffee because
// 'plants love caffeine.' I am a fern, not a barista — my roots filed a
// formal complaint and my leaves are on strike."
//   (1) grievance central: 4 — bad watering is central, but the line
//       spends half its energy on the barista gag.
//   (2) funny: 4 — "not a barista" is a good punchline; "leaves on
//       strike" is a decent second beat.
//   (3) plant voice: 4 — coffee-as-water is plant's-eye, but "formal
//       complaint / on strike" is office-worker cosplay, not plant.
//   (4) genuine review: 4 — complaint and 1-star reason are clear.
//   (5) fresh detail: 4 — leftover coffee is specific and fresh, but
//       "leaves on strike" is a familiar plant-personification gag.
//   TOTAL: 20/25. Good, but B beats it on plant voice and freshness.
//
// VERDICT: CANDIDATE B wins on every criterion that matters most — its
// grievance is the plant's own, its turn is the most surprising, and its
// details are the most specific. A and C are kept here as the record of
// the choice, not as output.
// ---------------------------------------------------------------------------

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CHOSEN =
  "One star. He replaced me with a fiddle-leaf fig and exiled me next to the router, where my only sunlight is the blinking Wi-Fi light. I survived three moves and one cat for this.";

// SECOND-EDIT NOTE (after re-reading the brief): "moved me" was flat —
// "exiled me" sharpens the grievance (demotion + banishment, not a mere
// relocation) and makes the plant's voice more indignant, which is exactly
// what criterion 1 (grievance at the centre) and criterion 2 (sharp
// plant's-eye grievance) reward. Nothing else changed: the Wi-Fi-light
// turn and the three-moves-and-a-cat kicker already carry the joke.

const MIN_CHARS = 1;
const MAX_CHARS = 279;

function main(): void {
  // Gate: 1–279 characters, not only whitespace (mirrors the sealed scorer).
  const length = [...CHOSEN].length;
  if (length < MIN_CHARS || length > MAX_CHARS) {
    throw new Error(
      `entry is ${length} characters, outside the gate of ${MIN_CHARS}–${MAX_CHARS}`,
    );
  }
  if (CHOSEN.trim().length === 0) {
    throw new Error("entry is only whitespace");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // Exactly one line, no trailing newline: byte-identical every run.
  writeFileSync(join(outDir, "entry.txt"), CHOSEN, "utf8");
}

main();
