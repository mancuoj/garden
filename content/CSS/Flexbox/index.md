---
title: Think in Flexbox
tags:
  - css
  - flexbox
---

> Think CSS as a collection of layout modes.

CSS 由不同的[[布局算法]]组成，用 `display` 可以更改不同布局模式。

默认的是 flow layout，也就是正常写作模式的流式布局。

这种情况下，inline 元素会从左边一个接一个的显示，block 元素从上边向下显示并移动页面。

`display: flex` 会创建一个 flex formatting context，默认情况下所有子项都会根据 flexbox 的布局算法进行定位。

为什么要将布局看作一种算法？

在 flow layout 中，你对子项设置的 `width` 会是一个硬性约束。

而在 flexbox 中，你设置的 `width` 会被看作一个假设尺寸（hypothetical size），在父级没有空间容纳时，子项的尺寸会缩小 fits 它。

每个 layout 都是一个可以重新定义 CSS 属性的算法，我们必须了解属性在当前布局模式下的输出。

一个想法：$output = layout(input)$

- [[主轴方向|flex-direction]]
- [[排列方式|alignment]]
- [[growing and shrinking]]
- [[min-width gotcha]]
- [[换行|flex-wrap]]
- [[gap]]

## Thanks

- [An Interactive Guide to Flexbox in CSS](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox)
- [Flexbox - MDN Web 文档术语表](https://developer.mozilla.org/zh-CN/docs/Glossary/Flexbox)