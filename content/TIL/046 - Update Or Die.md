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
  bun upgrade
  rye self update
  cargo install $(cargo install --list | egrep '^[a-z0-9_-]+ v[0-9.]+:$' | cut -f1 -d' ')
}
```


## Windows App

```powershell

```

## Thanks

- [[029 - Make PowerShell Great Again]]
- [[044 - Scoop]]
- 