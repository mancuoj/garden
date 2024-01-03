---
title: Awesome Scripts 
date: 2023-12-22
---

## 删除所有 node_modules 文件夹


```sh
find . -name "node_modules" -type d -prune -print -exec rm -rf "{}" \;
```

