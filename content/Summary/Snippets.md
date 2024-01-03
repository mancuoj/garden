---
title: Awesome Snippets 
date: 2023-12-31
---

## 范围映射

```js
const scale = (num, in_min, in_max, out_min, out_max) => {
  return (num - in_min) / (in_max - in_min) * (out_max - out_min) + out_min
}
```
