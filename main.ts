// One Letter for Your Day — make.fun bounty
// Writes exactly one letter to /output/entry.txt: the letter that
// stands for the word describing the day.
//
// The letter: "Z" — zonked. The sleep letter itself (Zzz), for a day
// that ends out cold. One character, no word, no gloss, no punctuation.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LETTER = "Z";

// Validation: the entry must be exactly one capital letter A–Z —
// anything else (empty, lowercase, multi-letter, trailing newline)
// is a wrong entry, so fail loudly instead of writing it.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`Invalid entry letter: expected exactly one letter A-Z, got ${JSON.stringify(LETTER)}`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LETTER, "utf8");

// Re-check what was actually written: entry.txt must be exactly
// 1 byte, one letter A–Z, with no trailing newline.
const written = readFileSync(join(outputDir, "entry.txt"), "utf8");
if (!/^[A-Z]$/.test(written)) {
  throw new Error(`Invalid entry file: expected exactly one letter A-Z, got ${JSON.stringify(written)}`);
}
