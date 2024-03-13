---
date: 2024-02-26
tags:
  - til
  - shell
---

Atuin replaces your existing shell history with a SQLite database, and records additional context for your commands. Additionally, it provides optional and *fully encrypted* synchronisation of your history between machines, via an Atuin server.

```sh
# bash/zsh/etc
bash <(curl --proto '=https' --tlsv1.2 -sSf https://setup.atuin.sh)

atuin register -u <USERNAME> -e <EMAIL>
atuin import auto
atuin sync

atuin key

atuin login -u <USERNAME> -p <PASSWORD> -k <KEY>
```

## Thanks

- [atuinsh/atuin](https://github.com/atuinsh/atuin)
- [Getting started | Atuin Docs](https://docs.atuin.sh/)
