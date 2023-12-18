---
title: CSS Reset
tags:
  - CSS
---

参考了一众大佬的 CSS reset 后，决定缝合一个适合自己的。

## The CSS Reset

```css
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  line-height: 1.5;
}

h1,
h2,
h3,
h4,
button,
input,
label {
  line-height: 1.1;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

h1,
h2,
h3,
h4 {
  text-wrap: balance;
}

p {
  hyphens: auto;
  overflow-wrap: break-word;
}

input,
button,
textarea,
select {
  font: inherit;
}

a:not([class]) {
  color: currentColor;
  text-decoration-skip-ink: auto;
}

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
- 