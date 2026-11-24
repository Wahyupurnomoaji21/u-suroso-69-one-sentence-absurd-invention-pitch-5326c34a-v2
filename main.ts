import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const entry =
  "The Spiteful Pillow: a pillow that goes flat the moment you finally get comfortable, then fluffs itself back up the second you give up and get out of bed.";

// Gate: one sentence, 1-220 characters, no trailing newline in the file.
if ([...entry].length < 1 || [...entry].length > 220) {
  throw new Error("entry must be 1-220 characters");
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || join(scriptDir, "output");
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
