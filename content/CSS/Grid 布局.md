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

![[grid repeat.png]]

一排七个，难道写七个 1fr 来做？当然不是。

```css
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
```


## grid-row grid-column

默认情况下，grid algorithm 会给每个子元素分配第一个未占用的网格单元。

当然有方法可以将元素分配到任意单元格，甚至跨越行列。

![[grid assign.png]]

一般编程中的范围都是左闭右开，也就是 `[2, 4)` 二三行，这里从 1 开始计数。

`grid-column` 本质上其实是一个简写：

```css
.child {
  grid-column-start: 1;
  grid-column-end: 4;
}
```

`grid-column: 3` 单个设置时，就是设置 child 坐在第三列。

这里还有一个小技巧，你可以使用负数，所以：

```css
.child {
  grid-column: 1 / -1;
}
```

这样无论有多少列，child 都会从第一列跨到最后一列占满整个网格的宽度。

## grid-template-areas

![[grid area.png]]

简单实现该布局：

```css
.parent {
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar main';
}

.child1 {
  grid-area: sidebar;
}
```

允许我们为网格赋予语义，而不是使用难以理解的行号/列号。


## Alignment

```css
.parent {
  display: grid;
  grid-template-columns: 90px 90px;
  justify-content: center;
  justify-items: center;
}
```

就像 [[Flex 布局#Alignment|Flexbox]] 一样，可以使用 `justify-content` 来控制 columns 的排列。

使用 `justfiy-items` 来控制列中 item 的排列。

其实也正是由于 `justify-items` 的默认值 `stretch` 的存在，设定网格才能被轻松占满。

设定其他值时，子项将缩小到其默认宽度（取决于其内容）。

当然我们也知道 `items` 其实就是 `self` 的语法糖。

所以也可以用 `justify-self` 来控制单个子项在网格内的排列。


以上我们讨论的都是水平方向的排列，当然有竖直方向的对应属性 `align-content`，`align-items` 以及 `align-self`。

总结一下：

- `justify` 处理列
- `align` 处理行
- `content` 处理 grid structure
- `items` 处理 grid structure 内部的 DOM nodes





## Thanks

- [An Interactive Guide to CSS Grid](https://www.joshwcomeau.com/css/interactive-guide-to-grid/)
- [grid - CSS | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid)
