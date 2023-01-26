---
layout: ../../layouts/MarkdownNoteLayout.astro
title: "🤖 Automating my website: creating a blank new note"
publishedAt: 2023-01-26
tags: []
---
Being the optimistic man that I am, I automated the creation of an empty new note file in my website project.

I'm using this website to play around with technologies I normally don't get to use at work (like Astro or Tailwind), so I thought I would learn a bit about the latest version of Node.js and boy have things changed!

When I say "automate the creation of an empty new note" I mean a script that creates a Markdown file in the correct folder, with the correct file name and with the frontmatter I always copy paste from one note to the other. This should be easily doable by prompting the user (me) for the title with the `process` module, generating the content of the file and writing it into a file with the `fs` module. 

Turns out the API for reading input from command line has been greatly simplified in Node.js v18:

```js
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });
const title = await rl.question("Title: ");

// stuff happens...

rl.close()
```

The content I want is just the frontmatter:

```javascript
const content = `
---
layout: ../../layouts/MarkdownNoteLayout.astro
title: ${title}
publishedAt: ${new Date().toISOString().split("T").at(0)}
tags: []
draft: true
---
`.trim();
```

In order to write the file in the correct directory I need the directory of the file I'm executing to make a relative path for the new file (editing note: this sentence makes no sense). In the past I used the global `__dirname` but I quickly found that it's not a thing anymore. A quick search tells me the way to go is:

```javascript
import { fileURLToPath } from "node:url";
import { exec } from "node:child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
```

All there's left is to write the file:

```javascript
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
```

As a finishing flourish, I thought it would be cool to automatically open the file in my code editor, which I can do with a simple `exec` call:

```javascript
import { exec } from "node:child_process";

exec(`code ${noteFilePath}`);
```

To execute the script I just added it to my `package.json`:

```json
{
  "scripts": {
    "new-note": "ts-node src/scripts/new-note.ts"
  }
}
```

I'm using `ts-node` to directly execute the TypeScript file and not bother compiling.

You can find the entire script in [the GitHub repo for my website](https://github.com/maurogestoso/maurogestoso.github.io/blob/main/src/scripts/new-note.ts).
