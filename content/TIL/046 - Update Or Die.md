---
date: 2024-02-15
tags:
  - til
  - windows
---

## WSL Ubuntu

```shell
function up() {
  sudo apt update -qq && sudo apt upgrade -yqq
  taze major -gis
  bun upgrade
  rye self update
  cargo install -q $(cargo install --list | egrep '^[a-z0-9_-]+ v[0-9.]+:$' | cut -f1 -d' ')
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
- [mancuoj/dotfiles](https://github.com/mancuoj/dotfiles)
