---
title: Growing and Shrinking
tags:
  - css
  - flexbox
---

## flex-basis

> In a flex row, `flex-basis` do the same thing as `width`.
> 
> And in flex col, do the same thing as `height`.

`flex-basis` 是 flexbox 上通用的 size 属性，设置主轴上的 hypothetical size，但 `width, height` 不遵守此规则。

hypothetical 更多指的是建议大小而不是硬性约束，在容器大小不够时必须妥协。

除了一些 edge case，`width` 与 `flex-basis` 效果类似。

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

设置后，flexbox 的算法会将 flex-basis or width 设置的值视为**硬性**最小限制。

当然你可以通过“简单”的 [[min-width gotcha]] 来设置更硬的约束？