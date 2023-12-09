---
title: Think in Flexbox
tags:
  - css
---

CSS 由不同的布局“算法”组成，用 display 可以更改不同算法，默认的是 Flow 布局，也就是正常写作模式的流式布局，inline 元素会从左边一个接一个的显示，block 元素从上边向下显示并移动页面。

`display: flex` 会创建一个 flex formatting context，默认情况下所有子项都会根据 flexbox layout algorithm 进行定位。

为什么要将布局看作一种算法？在 flow layout 中，你对子项设置的 width 会是一个硬性约束，而在 flexbox 中，你设置的 width 会被看作一个 hypothetical size 假设尺寸，在父级没有空间容纳时，子项的尺寸会缩小 fits 它。

CSS is a collection of layout modes.

每个 layout 都是一个可以重新定义 CSS 属性的算法，我们必须了解属性在当前布局模式下的输出，`output = layout(input)`。


## Direction

`flex-direction` 属性默认为 row，代表主轴方向从左到右，可以换成 col 来改变主轴的方向为从上到下。

Flexbox 的一切都基于主轴 primary axis 和垂直于它的 cross axis 排列。

默认情况下：

- 主轴：子项会聚集在容器的开头，flex-start
- 交叉轴：子项会 stretch out to fill the entire container

## Alignment

`justfy-content` 用来改变 children 沿主轴的排列方式。

谈到主轴时，我们在意的是 content，也就是整个 group 的排列，而不是单个子项的对齐方式。

可以将子项集中到同一个位置 flex-start，flex-end，center，也可以将它们分开 space-between，space-around，space-evenly。

而对于交叉轴来说，我们使用 `align-items`，相同的集中位置 flex-start，flex-end，center，还有不同的 stretch 和 baseline。

`align-self` 应用于子元素，而不是整个容器，我们可以使用它来改变特定子元素在交叉轴上的对齐方式，它的 value 与 `align-items` 完全一致。

事实上，`align-items` 就是 `align-self` 的语法糖，方便我们设置所有子元素的对齐方式。

## Content & Items

那么有 `justify-items` 和 `align-content` 吗？`justify-self` 呢？

Flexbox 中主轴也就是默认的横轴，可以由一条水平直线穿起来。

而交叉轴一条垂直直线只能穿过一个子项，我们在排列该子项时 `align-self` 并不会影响或干扰其他子项的排布。

而在主轴水平排列时，一定会影响到左右子项的排列，这就是为什么没有 `justify-self` 和 `justify-items` 的原因。


## Growing & Shrinking







## 参考

- [An Interactive Guide to Flexbox in CSS](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox)
- [Flexbox - MDN Web 文档术语表](https://developer.mozilla.org/zh-CN/docs/Glossary/Flexbox)