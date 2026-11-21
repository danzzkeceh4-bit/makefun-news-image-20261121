// news-image-20261121 — entry program (Node 22, standard library only).
//
// The front page is drawn once and shipped in this repository as
// entry.png; this program copies it, byte for byte, to the output
// directory the grader gives it in MAKEFUN_OUTPUT_DIR (or /output by
// default), so two runs always write the same bytes. No network, no
// randomness, no timestamps: the output is the file itself.
//
// After writing, the program reads the output file back and compares
// its SHA-256 with the SHA-256 of the bundled entry.png. If the two
// differ (truncated write, disk error, stray modification), it throws
// instead of silently shipping a corrupt image.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { createHash } from 'node:crypto';
import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
const srcPath = join(here, 'entry.png');
const dstPath = join(outDir, 'entry.png');

const sha256 = (bytes: Buffer): string =>
  createHash('sha256').update(bytes).digest('hex');

const expected = sha256(readFileSync(srcPath));
copyFileSync(srcPath, dstPath);
const actual = sha256(readFileSync(dstPath));
if (actual !== expected) {
  throw new Error(
    `entry.png verification failed: wrote ${actual}, expected ${expected}`,
  );
}
console.log(`entry.png written and verified: ${actual}`);
