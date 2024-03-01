---
date: 2024-02-15
tags:
  - til
  - windows
---

## WSL Ubuntu

```zshrc
function up() {
  sudo apt update -qq && sudo apt upgrade -yqq
  taze major -gi
  bun upgrade
  rye self update
  cargo install $(cargo install --list | egrep '^[a-z0-9_-]+ v[0-9.]+:$' | cut -f1 -d' ')
}
```

## Windows

```powershell
notepad $PROFILE
```

```powershell
function up {
    scoop update *
    if ($?) {
        scoop cleanup *
    }
}
```

## Thanks

- [[029 - Make PowerShell Great Again]]
- [[044 - Scoop]]
- [My dotfiles](https://github.com/mancuoj/dotfiles)
