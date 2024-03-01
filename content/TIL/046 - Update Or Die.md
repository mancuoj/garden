---
date: 2024-02-15
tags:
  - til
  - windows
---

## WSL

```zshrc
function up() {
  sudo apt update -qq && sudo apt upgrade -yqq
  taze major -gi
  rye self update
  bun upgrade
}
```


## Windows App

```powershell

```

## Thanks

- [[029 - Make PowerShell Great Again]]
- [[044 - Scoop]]