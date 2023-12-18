---
title: CSS Reset
date: 2023-12-18
---

参考了一众大佬的 CSS reset 后，决定缝合一个适合自己的。

如下所示：

```css
/* 肯定得有 */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* 从 Vite 和各种大佬那里偷的字体设置 */
:root {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

/* margin 和 padding 都设成 0 太暴力，只设置 body 的 margin 太小气 */
* {
  margin: 0;
}

/* 专业行高，100vh 更是好用 */
body {
  min-height: 100vh;
  line-height: 1.5;
}

/* 字体大了之后行高太高不好，h5 和 h6 就别用了 */
h1,
h2,
h3,
h4,
button,
input,
label {
  line-height: 1.1;
}

/* 奇妙的标题换行 */
h1,
h2,
h3,
h4 {
  text-wrap: balance;
}

/* 不那么激进的连字符和换行策略 */
p {
  hyphens: auto;
  overflow-wrap: break-word;
}

/* 媒体元素肯定要用 block 的，最大宽度防止溢出 */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/* 继承 family size weight */
input,
button,
textarea,
select {
  font: inherit;
}

/* 在没有 class 时设置链接文本颜色，下划线的样式 */
a:not([class]) {
  color: currentColor;
  text-decoration-skip-ink: auto;
}

/* root stacking context */
#root,
#__next {
  isolation: isolate;
}
```


## Thanks

- [A (more) Modern CSS Reset](https://andy-bell.co.uk/a-more-modern-css-reset/)
- [Modern CSS Reset / Global Styles](https://www.joshwcomeau.com/css/custom-css-reset/)
- [CSS Tools: Reset CSS (meyerweb.com)](https://meyerweb.com/eric/tools/css/reset/index.html)
- [csstools/normalize.css](https://github.com/csstools/normalize.css)
- [csstools/sanitize.css](https://github.com/csstools/sanitize.css)
- [sindresorhus/modern-normalize](https://github.com/sindresorhus/modern-normalize)
- [Preflight - Tailwind CSS](https://tailwindcss.com/docs/preflight)
- [Style Reset (unocss.dev)](https://unocss.dev/guide/style-reset)
- [Your CSS reset needs text-size-adjust (probably) | Kilian Valkhof](https://kilianvalkhof.com/2022/css-html/your-css-reset-needs-text-size-adjust-probably/)