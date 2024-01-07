---
date: 2023-12-31
---

## Full-Bleed 布局

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr min(60ch, calc(100% - 64px)) 1fr;
  column-gap: 32px;
}

.wrapper > * {
  grid-column: 2;
}

.full-bleed {
  width: 100%;
  grid-column: 1 / -1;
}
```


## 范围映射

```js
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) / (in_max - in_min) * (out_max - out_min) + out_min
}
```


## 删除所有 node_modules 文件夹

```sh
find . -name "node_modules" -type d -prune -print -exec rm -rf "{}" \;
```
