---
title: Think in Flexbox
tags:
  - css
---

CSS 由不同的布局“算法”组成，用 display 可以更改不同算法，默认的是 Flow 布局，也就是正常写作模式的流式布局，inline 元素会从左边一个接一个的显示，block 元素从上边向下显示并移动页面。

`display: flex` 会创建一个 flex formatting context，默认情况下所有子项都会根据 flexbox layout algorithm 进行定位。

## Direction

默认情况下 `flex-direction: row`，主轴为