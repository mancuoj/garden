---
date: 2023-12-18
tags:
  - react
  - ts
---

## Function Components

```tsx
interface AppProps {
  title: string
  children: ReactNode
}

// easiest way
const App = ({ title, children }: AppProps) => { ... }

// not recommended
const App: FC<AppProps> = ({ title, children }) => { ... }

// when there are a few props
const App = ({ message }: { message: string }) => { ... }
```


## useState

```tsx
// 自动推导类型
const [enabled, setEnabled] = useState(false)

const [title, setTitle] = useState<string | null>(null)

type Status = "idle" | "loading" | "success" | "error"
const [status, setStatus] = useState<Status>("idle")
```


## useReducer



## useContext





## Thanks

- [How to Use TypeScript with React](https://www.freecodecamp.org/news/use-typescript-with-react/)
- [React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)
- [使用 TypeScript – React 中文文档](https://zh-hans.react.dev/learn/typescript)
- [TypeScript for React Developers](https://www.freecodecamp.org/news/typescript-for-react-developers/)