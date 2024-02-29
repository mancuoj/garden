---
date: 2024-02-12
tags:
  - til
---


## Install

```sh
sudo add-apt-repository ppa:maveonair/helix-editor
sudo apt update
sudo apt install helix
```

## Python LSP

```sh
sudo apt-get install python3-pylsp
```

```toml title="~/.config/helix/languages.toml"
[[language]]
name = "python"
language-servers = ["pylsp"]
auto-format = true

[language-server.pylsp.config.pylsp.plugins]
flake8 = { enabled = false }
autopep8 = { enabled = false }
mccabe = { enabled = false }
pycodestyle = { enabled = false }
pyflakes = { enabled = false }
pylint = { enabled = false }
yapf = { enabled = false }
ruff = { enabled = true, lineLength = 120 }
```

## Thanks

- [helix-editor/helix](https://github.com/helix-editor/helix)
- [configuring pylsp](https://github.com/helix-editor/helix/discussions/6623)
