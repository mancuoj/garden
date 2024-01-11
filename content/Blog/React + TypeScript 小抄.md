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


## Custom HTML Components

```ts
type InputProps = ComponentProps<'input'>

const Input = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    return <input {...props} ref={ref} className={...} />
  }
)
```

Use text value instead of children:

```ts
type TagProps = {
  variant?: 'solid' | 'outlined'
  text: string
} & Omit<React.ComponentProps<'span'>, 'children'>
```

## useState

```tsx
// infer types
const [enabled, setEnabled] = useState(false)

const [title, setTitle] = useState<string | null>(null)

type Status = "idle" | "loading" | "success" | "error"
const [status, setStatus] = useState<Status>("idle")
```


## useReducer

```ts
import { useReducer } from "react";

const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - Number(action.payload) };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "decrement", payload: "5" })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +
      </button>
    </>
  );
}
```

## useContext





## Thanks

- [How to Use TypeScript with React](https://www.freecodecamp.org/news/use-typescript-with-react/)
- [React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)
- [使用 TypeScript – React 中文文档](https://zh-hans.react.dev/learn/typescript)
- [TypeScript for React Developers](https://www.freecodecamp.org/news/typescript-for-react-developers/)