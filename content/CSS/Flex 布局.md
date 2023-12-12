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



## flex-direction

`flex-direction` 属性默认为 row，代表主轴方向从左到右。

换成 col 会将改变主轴的方向改为从上到下。

Flexbox 的一切属性都基于主轴 primary axis 和垂直于它的交叉轴 cross axis。

默认情况下：

- 主轴：子项会聚集在容器的开头 `flex-start`
- 交叉轴：子项会拉伸填满整个容器 `stretch`


## Alignment

使用 `justfy-content` 用来改变 children 沿主轴的排列方式。

谈到主轴时，我们在意的是 content，也就是整个 group 的排列，而不是单个子项的对齐方式。

可以将子项集中到同一个位置 flex-start，flex-end，center，也可以将它们分开 space-between，space-around，space-evenly。

而对于交叉轴来说，我们使用 `align-items`，相同的集中位置 flex-start，flex-end，center，还有不同的 stretch 和 baseline。

`align-self` 应用于子元素，而不是整个容器，我们可以使用它来改变特定子元素在交叉轴上的对齐方式，它的 value 与 `align-items` 完全一致。

事实上，`align-items` 就是 `align-self` 的语法糖，方便我们设置**所有**子元素的对齐方式。



## Content vs Items

那么有 `justify-items` 和 `align-content` 吗？`justify-self` 呢？

Flexbox 中主轴也就是默认的横轴，可以由一条水平直线穿起来。

而交叉轴一条垂直直线只能穿过一个子项，所以在排列该项时 `align-self` 并不会影响或干扰其他子项的排布。

而在主轴水平排列时，一定会影响到左右子项的排列，这就是为什么没有 `justify-self` 和 `justify-items` 的原因。

至于 `align-content`, [[Flex 布局#flex-wrap|下文]]中会提到。


## flex-basis

> In a flex row, `flex-basis` do the same thing as `width`.
> 
> And in flex col, do the same thing as `height`.

`flex-basis` 是 flexbox 上通用的 size 属性，设置主轴上的 hypothetical size。

hypothetical 更多指的是建议大小而不是硬性约束，在容器大小不够时必须妥协。

除了一些 edge case，`width` 与 `flex-basis` 效果基本一样。


## flex-grow

`flex-grow` 用于指定如何消耗容器的剩余空间。

默认情况下，`flex-grow` 默认值为 0，元素会沿着主轴缩小到 minimal confortable size，一般会创造出一些剩余空间。

设置其中一个子项的 grow 为 1，该子项会占满整个空间。

设置多个子项，剩余空间将根据设置的值按比例分配。

比如 1 和 2，就分别占 1/3 和 2/3。



## flex-shrink

> Only one of these properties can be active at once

如果容器太小怎么办，就要用到 `flex-shrink`。

与 grow 用法类似，不过是成比例缩小了。

容器大小 500px，两个子项分别 250px，刚好占满。

这时将容器减小到 400px，多出来的 100px 怎么塞进去呢？

默认情况下 `flex-shrink: 1`，两人各缩减 50px。

这时将其中一个设置为 3，则它会缩减 3/4，即 75px，另一个缩减 25px。

但是有时候我们并不希望一些子项缩小，可以设置 `flex-shrink: 0` 来禁止收缩。

设置后，flexbox 的算法会将 flex-basis or width 设置的值视为硬性最小限制。

当然你可以通过“简单”的 `min-width` 来设置更硬的约束？


## min-width gotcha

当尺寸收缩到某点时，容器内容会溢出！

为什么？明明 shrink 有一个默认值 1，会根据需要来进行缩小。

这里就牵涉到 hypothetical size 和 minimal size了，minimal size 是 flexbox 算法的底线。

文本输入框 input 默认最小尺寸是 170px-200px，不同浏览器有所不同。

其他情况下，可能要看元素的内容，比如带有文本的元素最小宽度就是“最长字符串”的长度。

好消息是底线可以退让，设置 `min-width: 0px`，flexbox 元素就可以缩小到最小尺寸以下，一直缩到看不到！

同样适用于 `min-height` 的 flex 列。

But 内置的最小尺寸充当的是护栏的角色，它肯定有用。

修改它有可能会造成更糟糕的情况，所以谨慎使用！


## gap

`gap` 用于设置子项之间距离，同样可以用于 [[Grid 布局]]。

但 `margin` 在 flexbox 中其实也有妙用。

比如 `margin-right: auto` 可以在不使用 `flex-grow` 的情况下，占领子项右侧的剩余空间。

如图：

![[nav.png]]




## flex-wrap

目前，flexbox 的子项都是并排放在单行/单列中，`flex-wrap` 可以改变它。

一般来说，进入二维的情况，最好使用 [[Grid 布局]]，但 wrap 在一些情况下还是很好用的。

默认的 nowrap 值可以变成 wrap，这样我们可以把主轴变作多条，每一行都是一个独立的 flexbox 容器。

因为换行，`align-items` 将会移动每一行，而不是整个 group 一起移动。

这时候我们就可以使用 `align-content` 来移动整个 group，它的值与 `justify-content` 相同。


## Thanks

- [An Interactive Guide to Flexbox in CSS](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox)
- [Flexbox - MDN Web 文档术语表](https://developer.mozilla.org/zh-CN/docs/Glossary/Flexbox)