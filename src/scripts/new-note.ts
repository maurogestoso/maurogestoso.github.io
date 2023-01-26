import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { writeFileSync } from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { exec } from "node:child_process";

const rl = readline.createInterface({ input, output });

const title = await rl.question("Title: ");

const content = `
---
layout: ../../layouts/MarkdownNoteLayout.astro
title: ${title}
publishedAt: ${new Date().toISOString().split("T").at(0)}
tags: []
draft: true
---
`.trim();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const noteFileName = title.toLowerCase().replaceAll(" ", "-");
const noteFilePath = path.join(
  __dirname,
  "..",
  "content",
  "notes",
  `${noteFileName}.md`
);

writeFileSync(noteFilePath, content);

exec(`code ${noteFilePath}`);

rl.close();
