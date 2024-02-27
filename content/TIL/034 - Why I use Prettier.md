---
date: 2024-02-03
tags:
  - prettier
---

Anyway, life is too short to bother with formatters.

## I Love Prettier

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

```json title=".vscode/settings.json"
{
  "editor.formatOnSave": true,
  "prettier.semi": false,
  "prettier.trailingComma": "all"
}
```

## Thanks

- [Why I don't use Prettier](https://antfu.me/posts/why-not-prettier)
- [聊聊代码格式化](https://burogu.hyoban.vercel.app/post/code-format)
