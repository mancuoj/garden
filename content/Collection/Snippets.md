---
date: 2023-12-31
---

## [Full-Bleed 布局](https://www.joshwcomeau.com/css/full-bleed/)

- 60ch，即字体中 0 的长度的 60 倍，一个合适的阅读宽度
- 1 / -1，从开始到最后

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr min(60ch, calc(100% - 64px)) 1fr;
  column-gap: 32px;
}

.wrapper > * {
  grid-column: 2;
}

.full-bleed {
  width: 100%;
  grid-column: 1 / -1;
}
```

## 范围映射

```js
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) / (in_max - in_min)) * (out_max - out_min) + out_min
}
```

## 随机数字

```js
const random = (min, max) => Math.floor(Math.random() * (max - min)) + min
```

## [鼠标位置 Hook](https://www.joshwcomeau.com/snippets/react-hooks/use-mouse-position/)

移动端增加条件需要判断 TouchEvent 和 touchmove。

```ts
import { useEffect, useState } from "react"

interface Position {
  x: number | null
  y: number | null
}

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: null, y: null })

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return mousePosition
}
```

## UUID

浏览器内置函数，用就完事了。

```js
const id = crypto.randomUUID()
```

## Position Type

```ts
type VPosition = "top" | "middle" | "bottom"
type HPosition = "left" | "center" | "right"

export type PositionValues = Exclude<`${VPosition}-${HPosition}`, "middle-center"> | "center"
```

## React Force Update

```ts
const useForceUpdate = () => useReducer((state) => !state, false)[1]
```
