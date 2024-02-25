---
date: 2024-01-14
tags:
  - git
---


Use `gam update` to commit everything. 

```zshrc
alias gl='git log'
alias glo='git log --oneline --graph'
alias gs='git status'
alias gp='git push'
alias gpf='git push --force'
alias gpl='git pull --rebase'

alias ga='git add'
alias gA='git add -A'
alias gc='git commit'
alias gcm='git commit -m'
alias gam='git add -A && git commit -m'

alias gb='git branch'
alias gbd='git branch -d'
alias gco='git checkout'
alias gcob='git checkout -b'
alias main='git checkout main'
alias dev='git checkout dev'

alias grh='git reset HEAD'
alias grh1='git reset HEAD~1'
```


## Thanks

- [antfu/dotfiles](https://github.com/antfu/dotfiles)
- [mancuoj/dotfiles](https://github.com/mancuoj/dotfiles)
