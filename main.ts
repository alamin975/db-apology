// The Production Database Apology — one line, byte-for-byte, single line, no trailing newline.
const LINE = "I deleted the production database. The good news: the backup exists. The bad news: the backup is also gone.";

import { mkdirSync, writeFileSync } from "node:fs";

function writeEntry(): void {
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, { encoding: "utf8" });
}

writeEntry();
