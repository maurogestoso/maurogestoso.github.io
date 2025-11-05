---
title: "TIL: Yank from vim to the clipboard"
date: 2025-08-27
tags: software, vim, til
---

Sometimes you need to copy some text from `vim` into your OS' clipboard.

Select some text and run `"+y`.

This means "yank whatever is selected into the `+` register". Registers are named spaces in memory where `vim` puts stuff you delete, yank, change, etc. It's like an internal clipboard but better organised. The `+` register is a special one called a "selection regsiter", which is the one in charge of linking to the OS clipboard.

You can see what's in every register with `:reg` and you can read more about registers in `:h registers`.
