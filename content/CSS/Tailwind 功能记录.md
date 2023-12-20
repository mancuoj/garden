---
title: Learn CSS From Tailwind
date: 2023-12-20
---

## ESM or TS config

```
npx tailwindcss init --esm
npx tailwindcss init --ts
```


```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```


```ts
import type { Config } from 'tailwindcss'

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
```


## Dynamic viewpoint units

|Class|CSS|
|---|---|
|`h-svh`|`height: 100svh`|
|`h-lvh`|`height: 100lvh`|
|`h-dvh`|`height: 100dvh`|
|`min-h-svh`|`min-height: 100svh`|
|`min-h-lvh`|`min-height: 100lvh`|
|`min-h-dvh`|`min-height: 100dvh`|
|`max-h-svh`|`max-height: 100svh`|
|`max-h-lvh`|`max-height: 100lvh`|
|`max-h-dvh`|`max-height: 100dvh`|


## `has()`

根据子元素来修改父元素的样式

```html
<label class="has-[:checked]:ring-indigo-500 has-[:checked]:text-indigo-900 has-[:checked]:bg-indigo-50 ..">
  ...
  <input type="radio" class="accent-indigo-500 ..." />
</label>
```


## `*`

修改所有子元素的样式

```html
<div>
  <h2>Categories:<h2>
  <ul class="*:rounded-full *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 ...">
    <li>Sales</li>
    <li>Marketing</li>
    <li>SEO</li>
    <!-- ... -->
  </ul>
</div>
```


## `size-*`

同时设置高度和宽度

```html
<div>
  <img class="h-10 w-10" ...>
  <img class="h-12 w-12" ...>
  <img class="h-14 w-14" ...>

  <img class="size-10" ...>
  <img class="size-12" ...>
  <img class="size-14" ...>
</div>
```


## `text-wrap`

让标题显示更好看，不会出现一些孤立的单词

- `text-balance` 
- `text-pretty`

