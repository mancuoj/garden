---
date: 2023-12-10
tags:
  - css
---

Flexbox（弹性盒布局）主要用于将子元素排列成一行或一列，并提供了控制子元素对齐和分布的方法。

正如其名称所示，Flexbox 也与灵活性（flexibility）有关，我们可以控制子元素增长或缩小，以及如何分配额外的空间等。

当我们将 `display` 设置为 `flex` 时，我们创建了一个 flex 格式化上下文（flex formatting context），所有子元素都将根据 Flexbox 布局算法进行定位。

## Flex Direction

默认情况下，Flexbox 子元素将在一行中水平排列，也就是主轴为水平方向。

修改属性为 `flex-direction: column` 以后，主轴将变为垂直方向。

在 Flexbox 中，**一切都基于主轴**，以及垂直于它的交叉轴。

子元素的默认定位如下：

1. **主轴：** 子元素将紧密排列在容器的起始位置，即 `flex-start`。
2. **交叉轴：** 子元素将拉伸以填满整个容器，即 `stretch`。

## Alignment

使用 `justify-content` 属性可以更改子元素沿主轴的分布方式。

我们可以将所有项目紧密排列在一起（使用 `flex-start`、`center` 和 `flex-end`），或者将它们分开（使用 `space-between`、`space-around` 和 `space-evenly`）。

谈到主轴时，我们在意的是 content，也就是整个 group 的排列，而不是单个子项的对齐方式。

而对于交叉轴来说，我们使用 `align-items`，相同的集中位置 flex-start，flex-end，center，还有不同的 stretch 和 baseline。

`align-self` 应用于子元素，而不是整个容器，我们可以使用它来改变特定子元素在交叉轴上的对齐方式，它的 value 与 `align-items` 完全一致。

事实上，`align-items` 就是 `align-self` 的语法糖，便于我们一次设置**所有**子元素的对齐方式。

## Content vs Items

那么有 `justify-items` 和 `align-content` 吗？`justify-self` 呢？

Flexbox 中主轴也就是默认的横轴，可以由一条水平直线穿起来。

交叉轴一条垂直直线只能穿过一个子项，所以在排列该项时 `align-self` 并不会影响或干扰其他子项的排布。

所以，水平排列单个子项肯定会影响到左右子项的排列，这就是为什么没有 `justify-self` 和 `justify-items` 的原因。

至于 `align-content`, [[CSS Flexbox 入门#flex-wrap|下文]]会提到。

## flex-basis

> In a flex row, `flex-basis` do the same thing as `width`.
> And in flex col, do the same thing as `height`.

`flex-basis` 是 flexbox 上通用的 size 属性，设置主轴上的 hypothetical size。

hypothetical 更多指的是建议大小而不是硬性约束，在容器大小不够时必须妥协。

除了一些 edge-case 外，`width` 与 `flex-basis` 效果基本一样。

## flex-grow

`flex-grow` 用于指定如何消耗容器的剩余空间。

默认情况下，`flex-grow` 默认值为 0，元素会沿着主轴缩小到 minimal confortable size，一般会创造出一些剩余空间。

设置其中一个子项的 grow 为 1，该子项会占满整个空间。

设置多个子项，剩余空间将根据设置的值按比例分配。

比如 1 和 2，就分别占 1/3 和 2/3。

## flex-shrink

> Only one of these properties can be active at once.

当然相反情况就是容器太小，这时候就要用到 `flex-shrink`。

容器大小 500px，两个子项分别 250px，刚好占满。

这时将容器减小到 400px，多出来的 100px 怎么塞进去呢？

默认情况下 `flex-shrink: 1`，两人各缩减 50px。

这时将其中一个设置为 3，则它会缩减 3/4，即 75px，另一个缩减 1/4，即 25px。

但是有时候我们并不希望一些子项缩小，可以设置 `flex-shrink: 0` 来禁止收缩（不推荐使用 `min-width` 限制）。

设置后，flexbox 的算法会将 flex-basis or width 设置的值视为硬性最小限制。

## min-width gotcha

有时候，你会发现当尺寸缩小到某一点时，容器内容会溢出！

明明 shrink 有一个默认值 1，会根据需要来进行缩小，为什么会溢出？

这就牵涉到最小尺寸（minimal size）了，它是一个硬性约束。

比如说，文本输入框 input 默认最小尺寸是 170px（不同浏览器有所不同），你将容器尺寸缩小到它的最小尺寸以下时，它就会溢出。

其他情况下，可能要看元素的内容，比如带有文本的元素最小尺寸就是“最长字符串”的长度。

不想让它溢出怎么办？设置减小 `min-width` 就可以了。

同样，flex col 设置 `min-height` 就可以。

但是谨慎修改！内置的最小尺寸充当的是护栏的角色，它肯定是有用的。

## gap

`gap` 用于设置子项之间距离，同样可以用于 [[CSS Grid 入门|Grid 布局]]。

除了使用 `gap` 外，`margin` 在一些情况下也有妙用，比如 `margin-right: auto` 可以在不使用 `flex-grow` 的情况下，占据子项右侧的剩余空间。

如图：

![[nav.png]]

## flex-wrap

上文中，flexbox 的子项都是并排放在单行/单列中，这是因为默认值 `flex-wrap: nowrap`，不允许换行。

可以把默认的 nowrap 值变成 wrap，这样就可以把主轴变作多条，每一行都是一个独立的 flexbox 容器。

因为换行多条主轴，`align-items` 会变成移动每一行，而不是整个 group 一起移动。

这时候我们就可以使用 `align-content` 来移动整个 group，它的用法与 `justify-content` 类似。

但是不推荐在使用换行，一般来说，进入二维后，最好使用 [[CSS Grid 入门|Grid 布局]]。

## Thanks

- [An Interactive Guide to Flexbox in CSS](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox)
- [Flexbox - MDN Web](https://developer.mozilla.org/zh-CN/docs/Glossary/Flexbox)
