// One-line weather forecast for Pluviopolis, a city that does not exist.
// Deterministic: no Date, no random, no network, no secrets.
// Writes exactly one line to $MAKEFUN_OUTPUT_DIR/entry.txt (default ./entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The forecast itself: sideways rain, a damp late bus, and a smug one.
// 125 code points, inside the 1-140 gate, single line.
const LINE =
  "In Pluviopolis, rain falls sideways today at 14 mph, so the 8:15 bus will arrive damp, late, and somehow still smug about it.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
