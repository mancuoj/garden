---
title: Think in Grid
tags:
  - css
---

> CSS is comprised of several different [[布局算法 |layout algorithms]] 🤗

使用 CSS Grid，单个 DOM 节点会被细分为行和列。

我们可以按照自己的意愿来对容器进行切分，我们可以想象一个背后的隐式网格。

![[grid.png]]

## Grid Flow

> Only the children are arranged using Grid layout.


默认情况下，Grid 使用单列，行数基于子项数量动态增加或减少。

Grid parent 的高度由子项决定，它仍然使用 flow layout，block 元素会垂直增长以包含其内容。

如果给定容器高度，则子项均分。


![[grid2.png]]


## grid-template-columns


```css
.parent {
  display: grid;
  grid-template-columns: 25% 75%;

  /* 1/4  3/4 */
  grid-template-columns: 1fr 3fr;
}
```

将元素分为两列，可以使用任意 length value 来定义。

还有一个新的 `fr` 值，代表 fraction 分数，它是一种“软”约束。

它不会使列缩小到最小尺寸以下，即使这样打破了比例。

更准确的来说，它分配的是剩余空间，就像 `flex-grow` 一样。

gap 属性同样适用于 grid，事实上它最开始就是为 grid 设置的，后来才能用于 flexbox。


## grid-template-rows

如果向两列的 grid 添加三个子元素，grid 会自动扩展，生成新行。

当然最好还是显式定义：

```css
.parent {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 5rem 1fr;
}
```


## repeat

![[repeat.png]]

一排七个，难道写七个 1fr 来做？

当然不会，



## Thanks

- [An Interactive Guide to CSS Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/)
- [grid - CSS | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid)
