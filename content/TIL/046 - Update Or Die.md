---
date: 2024-02-15
tags:
  - til
  - windows
---

## WSL Ubuntu

```shell
function up() {
  echo -e "\033[0;34m---------- Updating system packages ------------------------\033[0m"
  sudo apt update -qq && sudo apt upgrade -yqq

  echo -e "\033[0;34m---------- Updating npm global packages --------------------\033[0m"
  taze major -gis

  echo -e "\033[0;34m---------- Upgrading bun -----------------------------------\033[0m"
  bun upgrade

  echo -e "\033[0;34m---------- Updating rye ------------------------------------\033[0m"
  rye self update

  echo -e "\033[0;34m---------- Updating Rust packages --------------------------\033[0m"
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
- [mancuoj/dotfiles](https://github.com/mancuoj/dotfiles)
