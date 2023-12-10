---
title: React Conventions
tags:
  - react
---

## v1.0

参考 joshwcomeau 大佬的文章 [Delightful React File/Directory Structure](https://www.joshwcomeau.com/react/file-structure/) 以及 Angular 官方规范总结出一套自用的规范，以后应该还会更改。

### 文件夹名

- 组件用全大写+单数，比如 `Button`, `Header`
- 其他用全小写+复数，比如 `components`, `libs`, `utils`

### 文件名

- 全小写+短横线连接，比如 `button.tsx`, `theme-toggle.tsx`
- 中间可以加更多描述，比如 `button.constants.ts`, `button.helpers.ts`

### 其他

- 变量名，函数名统一使用小驼峰
- 常量全大写+下划线连接，如 `LAST_INDEX`
