---
title: min-width
tags:
  - css
  - flexbox
---

当尺寸收缩到某点时，容器内容会溢出！

为什么？明明 shrink 有一个默认值 1，会根据需要来进行缩小。

这里就牵涉到 minimal size 和 hypothetical size 了，flexbox 算法会拒绝将子项缩小到 minimal size 以下。

文本输入框 input 默认最小尺寸是 170px-200px，不同浏览器有所不同。

其他情况下，可能是元素的内容，比如带有文本的元素最小宽度就是内容里“最长的字符串”的长度。

好消息是可以设置 `min-width: 0px`，告诉 flexbox 元素可以缩小，一直缩！

同样适用于 `min-height` 的 flex 列。

But 内置的最小尺寸充当的是护栏的角色，它肯定有用。

修改它有可能会造成更糟糕的情况，所以谨慎使用！
