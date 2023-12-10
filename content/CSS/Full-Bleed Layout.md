---
title: Full-Bleed Layout Using CSS Grid
tags:
  - css
  - grid
---

在阅读博客，新闻等文字内容时，一般来说我们需要一个固定宽度的列来展示文字。

但除了文字外，图片视频等部件应该填充整个可用宽度。

Full-bleed 是出版界的一个术语，指的就是印刷内容无边框打印。 


![[full bleed.png]]


```html
<main class="wrapper">
  <h1>Some Heading</h1>
  <p>Some content and stuff</p>
  <img class="full-bleed" alt="cute meerkat" src="/meerkat.jpg" />
</main>
```

解决方案如下：

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr min(60ch, calc(100% - 64px)) 1fr;
  grid-column-gap: 32px;
}

.wrapper > * {
  grid-column: 2;
}

.full-bleed {
  width: 100%;
  grid-column: 1 / -1;
}
```

- `min` 选择两者之间更小的值，小屏幕将使用全宽 - gap
- `ch` 为当前字体中 0 字符的宽度，一般来说理想的行宽度为 65 个字符（45-85）
