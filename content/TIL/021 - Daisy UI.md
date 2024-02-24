---
date: 2024-01-21
---

## Install Tailwind First

```sh
ni -D daisyui@latest
```

```js title="tailwind.config.js"
module.exports = {
  plugins: [
    // ...
    require("daisyui")
  ],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}
```

## Theme Change

```js
import { useEffect } from "react"
import { themeChange } from "theme-change"

export default function App() {
  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <div className="flex h-dvh items-center justify-center">
      <h1 className="flex items-center gap-5 font-serif text-4xl">
        React MVP
        <label className="swap swap-flip">
          <input type="checkbox" className="hidden" />
          <div
            className="swap-on flex items-center justify-center"
            data-set-theme="dark"
          >
            <span className="i-lucide-heart-off"></span>
          </div>
          <div
            className="swap-off flex items-center justify-center"
            data-set-theme="light"
          >
            <span className="i-lucide-heart"></span>
          </div>
        </label>
      </h1>
    </div>
  )
}
```

## Thanks

- [daisyUI — Tailwind CSS Components](https://daisyui.com/)