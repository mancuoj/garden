---
date: 2024-01-09
tags:
  - til
  - git
---

The Conventional Commits specification is a lightweight convention on top of commit messages.

```git
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

## Usage

- feat: a new feature
- fix: a bug fix
- docs: documentation only changes
- refactor: changes that neither fixes a bug nor adds a feature
- perf: changes that imporoves performance
- test: add missing tests or correcting existing tests
- build: changes that affect the build system
- ci: changes to our CI configuration file
- style: changes to style files
- chore: other changes that do not modify src or test files
- types: add types
- wip: work in progress

Append a `!` after the type when you have a breaking change.

```git
feat!: api change
```

## regex

```
/^(revert: )?(feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip)(\(.+\))?: .{1,50}/
```

## Thanks

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Everduin94/better-commits](https://github.com/Everduin94/better-commits#-default-json-config)
