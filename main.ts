import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "In Pluviopolis, rain falls sideways today at 14 mph, so the 8:15 bus will arrive damp, late, and somehow still smug about it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
