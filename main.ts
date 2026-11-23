// One Letter for Your Day — make.fun bounty
// Writes exactly one letter to /output/entry.txt: the letter that
// stands for the word describing the day.
//
// The letter: "Z" — zonked. The sleep letter itself (Zzz), for a day
// that ends out cold. One character, no word, no gloss, no punctuation.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "Z";

if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`Invalid entry letter: ${JSON.stringify(LETTER)}`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LETTER, "utf8");
