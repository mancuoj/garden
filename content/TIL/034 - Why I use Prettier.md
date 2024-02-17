---
date: 2024-02-03
---

## I Love Prettier

Anyway, life is too short to bother with it.

```sh
ni -D prettier
```

```json
{
  "scripts": {
    "format": "prettier --write ."
  },
  "prettier": {
    "semi": false,
    "trailingComma": "all"
  }
}
```

```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "prettier.semi": false,
  "prettier.trailingComma": "all",
}
```

## Thanks

- [Why I don't use Prettier](https://antfu.me/posts/why-not-prettier)