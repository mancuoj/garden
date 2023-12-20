---
title: TypeScript in React
date: 2023-12-18
---

## FC

```tsx
import { FC } from 'react'

interface AppProps {
  title: string
}

const App: FC<AppProps> = ({ title }) => {
  return <h1>Hello {title}</h1>
}
```



## useState

自动推断类型：

```tsx
const [enabled, setEnabled] = useState(false)
```

联合类型：

```tsx
type Status = "idle" | "loading" | "success" | "error"

const [status, setStatus] = useState<Status>("idle")
```


## useReducer



## useContext





## Thanks

- [How to Use TypeScript with React](https://www.freecodecamp.org/news/use-typescript-with-react/)
- [React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)
- [使用 TypeScript – React 中文文档](https://zh-hans.react.dev/learn/typescript)