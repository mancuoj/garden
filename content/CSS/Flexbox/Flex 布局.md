---
title: Think in Flexbox
tags:
  - css
  - flexbox
---

> Think CSS as a collection of layout modes.

CSS 由不同的[[布局算法]]组成，用 `display` 可以更改不同布局模式。

默认的是 flow 布局，也就是正常写作模式的流式布局。

这种情况下，inline 元素会从左边一个接一个的显示，block 元素从上边向下显示并移动页面。

`display: flex` 会创建一个 flex formatting context，默认情况下所有子项都会根据 flexbox 的布局算法进行定位。

为什么要将布局看作一种算法？

在 flow layout 中，你对子项设置的 `width` 会是一个硬性约束。

而在 flexbox 中，你设置的 `width` 会被看作一个假设尺寸（hypothetical size），在父级没有空间容纳时，子项的尺寸会缩小 fits 它。

每个 layout 都是一个可以重新定义 CSS 属性的算法，我们必须了解属性在当前布局模式下的输出。

一个想法：$output = layout(input)$

- [[主轴方向]]
- [[排列方式]]
- 


## Growing and Shrinking

### flex-basis

> In a flex row, `flex-basis` do the same thing as `width`.
> 
> And in flex col, do the same thing as `height`.

`flex-basis` 是 flexbox 上通用的 size 属性，设置主轴上的 hypothetical size，但 `width, height` 不遵守此规则。

hypothetical 更多指的是建议大小而不是硬性约束，在容器大小不够时必须妥协。

除了一些 edge case，`width` 与 `flex-basis` 效果类似。

### flex-grow

`flex-grow` 用于指定如何消耗容器的剩余空间。

默认情况下，`flex-grow` 默认值为 0，元素会沿着主轴缩小到 minimal confortable size，一般会创造出一些剩余空间。

设置其中一个子项的 grow 为 1，该子项会占满整个空间。

设置多个子项，剩余空间将根据设置的值按比例分配。

比如 1 和 2，就分别占 1/3 和 2/3。

### flex-shrink

> Only one of these properties can be active at once

如果容器太小怎么办，就要用到 `flex-shrink`。

与 grow 用法类似，不过是成比例缩小了。

容器大小 500px，两个子项分别 250px，刚好占满。

这时将容器减小到 400px，多出来的 100px 怎么塞进去呢？

默认情况下 `flex-shrink: 1`，两人各缩减 50px。

这时将其中一个设置为 3，则它会缩减 3/4，即 75px，另一个缩减 25px。

但是有时候我们并不希望一些子项缩小，可以设置 `flex-shrink: 0` 来禁止收缩。

设置后，flexbox 的算法会将 flex-basis or width 设置的值视为**硬性**最小限制。

当然你可以通过“简单”的 `min-width` 来设置更硬的约束？


## The minimal size gotcha

当尺寸收缩到某点时，内容会溢出！为什么？明明 shrink 有一个默认值 1，会根据需要来进行缩小。

这里就牵涉到 minimal size 和 hypothetical size 了，flexbox 算法会拒绝将子项缩小到 minimal size 以下。

文本输入框 input 默认最小尺寸是 170px-200px，不同浏览器有所不同。

其他情况下，可能是元素的内容，比如带有文本的元素最小宽度就是内容里“最长的字符串”的长度。

好消息是可以设置 `min-width: 0px`，告诉 flexbox 元素可以缩小，一直缩！

同样适用于 `min-height` 的 flex 列。

But 内置的最小尺寸充当的是护栏的角色，它确实有用，修改它有可能会造成更糟糕的情况，所以谨慎使用！

## Gaps

`gap` 用于设置子项之间距离，好用。

另外 `margin` 在 flexbox 中也有妙用。

我们都知道 `mx-auto` 可以设置居中，同样 `mr-auto` 可以在不使用 `flex-grow` 的情况下，吞噬子项右侧的剩余空间。

如图导航栏所示：

![[nav.png]]

## Thanks

- [An Interactive Guide to Flexbox in CSS](https://www.joshwcomeau.com/css/interactive-guide-to-flexbox)
- [Flexbox - MDN Web 文档术语表](https://developer.mozilla.org/zh-CN/docs/Glossary/Flexbox)