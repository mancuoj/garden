---
title: Think in Flexbox
tags:
  - css
---

CSS 由不同的布局“算法”组成，用 display 可以更改不同算法，默认的是 Flow 布局，也就是正常写作模式的流式布局，inline 元素会从左边一个接一个的显示，block 元素从上边向下显示并移动页面。

`display: flex` 会创建一个 flex formatting context，默认情况下所有子项都会根据 flexbox layout algorithm 进行定位。

## Direction

`flex-direction` 属性默认为 row，代表主轴方向从左到右，可以换成 col 来改变主轴的方向为从上到下。

Flexbox 的一切都基于主轴 primary axis 和垂直于它的 cross axis 排列。

默认情况下：

- 主轴：子项会聚集在容器的开头，flex-start
- 交叉轴：子项会 stretch out to fill the entire container

## Alignment

`justfy-content` 用来改变 children 沿主轴的排列方式。

谈到主轴时，我们在意的是 content，也就是整个 group 的排列，而不是单个子项的对齐方式。

