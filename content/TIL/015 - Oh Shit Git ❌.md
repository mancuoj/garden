---
date: 2024-01-15
tags:
  - git
---

Git documentation has this chicken and egg problem where you can't search for how to get yourself out of a mess, _unless you already know the name of the thing you need to know about_ in order to fix your problem.


## Oh shit, I committed and immediately realized I need to make one small change!

```git
git add . # or add individual files
git commit --amend --no-edit
```


## Oh shit, I need to change the message on my last commit!

```git
git commit --amend
```







## Thanks

- [Oh Shit, Git!?!](https://ohshitgit.com/)
