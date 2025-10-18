---
title: "TIL: CSS `break-*` properties"
date: 2025-10-18
tags: software, css, til
---

For some reason, people hiring software developers still need CVs in PDF format. I want my CV written in HTML and CSS, under version control and hosted on GitHub Pages for simplicity. This means that to generate a PDF I need to print the website, which in turn it means I need to control with CSS how things are rendered when printing. I don't need anything complicated, most things render fine by default, but my main concern was breaking to a new page in a stupid place, like right after a heading.

For some reason I thought this would be a bit more complicated, but I was happy to learn that all I need is a single CSS property:

```css
#section-i-dont-want-to-break {
    break-inside: avoid;
}
```

This means that the entire box selected won't break to a new page in the middle of it. It will either fit entirely on the page or go entirely to a new page. I'm sure there are edge-cases, but this is the 80% I needed. All the sections I don't want broken occupy less than a page and I laid them out so that the white space due to early breaks is minimal.

In the same family of properties you also have `break-before` and `break-after` which are pretty self explanatory. For more information, read the docs on MDN:

- [`break-after`](https://developer.mozilla.org/en-US/docs/Web/CSS/break-after)
- [`break-before`](https://developer.mozilla.org/en-US/docs/Web/CSS/break-before)
- [`break-inside`](https://developer.mozilla.org/en-US/docs/Web/CSS/break-inside)
