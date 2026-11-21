// news-image-20261121 — entry program (Node 22, standard library only).
//
// The front page is drawn once and shipped in this repository as
// entry.png; this program copies it, byte for byte, to the output
// directory the grader gives it in MAKEFUN_OUTPUT_DIR (or /output by
// default), so two runs always write the same bytes. No network, no
// randomness, no timestamps: the output is the file itself.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, 'entry.png'), join(outDir, 'entry.png'));
