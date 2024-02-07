---
date: 2024-02-01
tags:
  - remix
---

## Routes

```
- app
  - routes
     - _index.tsx
     - posts.$postId.tsx
     - tags.tsx
     - tags._index.tsx
     - tags.$tagId.tsx
  - root.tsx

- /posts/:postId
- /tags
- /tags/:tagId
```

不带 `_index` 的是 Layout 组件（内里需要有 Outlet 出口），带的是路由组件。


## Thanks

- [Tutorial (30m) | Remix](https://remix.run/docs/en/main/start/tutorial)
- [Remix 入门实战](https://remix.lutaonan.com/#remix-%E5%85%A5%E9%97%A8%E5%AE%9E%E6%88%98)