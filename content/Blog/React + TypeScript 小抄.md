---
date: 2023-12-18
---

## FC

```tsx
interface AppProps {
  title: string
  children: ReactNode
}

const App: FC<AppProps> = ({ title, children }) => {
  return <h1>Hello {title}</h1>
}
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