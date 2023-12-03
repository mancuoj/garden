
使用 [background-clip](https://developer.mozilla.org/zh-CN/docs/Web/CSS/background-clip) 属性，该属性可以将背景色延申到 border，padding，content，text 盒子上。

Tailwind 中的示例如下：

```html
<h1 class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 ...">
	Hello Mancuoj
</h1>
```

设置背景色，然后文字设为透明，关于渐变色可以看 [Gradient Color Stops - Tailwind CSS](https://tailwindcss.com/docs/gradient-color-stops)。