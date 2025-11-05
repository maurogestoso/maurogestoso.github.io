---
title: "TIL: access arguments in bash"
date: 2025-08-25
tags: software, bash, til
---

I don't often write bash scripts, so I forget and relearn this twice a year.

```bash
#!/bin/bash
echo "All arguments: $@"
echo "Number of arguments: $#"

echo "Path to the script: $0"
echo "First argument: $1"
echo "Second argument: $2"

echo "Loop over arguments:"
for arg in "$@"; do
    echo "  $arg"
done
```
