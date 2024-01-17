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

```tsx
type InputProps = ComponentProps<'input'>

const Input = forwardRef(
  (props: InputProps, ref: Ref<HTMLInputElement>) => {
    return <input ref={ref} {...props} className={...} />
  }
)
```

Use text value instead of children:

```tsx
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

```tsx
const initialTasks: TaskItem[] = []

enum ACTIONS {
  ADD = 'added',
  CHANGE = 'changed',
  DELETE = 'deleted',
}

type ActionType =
  | { type: ACTIONS.ADD; id: string; text: string }
  | { type: ACTIONS.CHANGE; task: TaskItem }
  | { type: ACTIONS.DELETE; id: string }

function tasksReducer(tasks: typeof initialTasks, action: ActionType) {
  switch (action.type) {
    case ACTIONS.ADD: {
      return [...tasks, { id: action.id, text: action.text, done: false }]
    }
    case ACTIONS.CHANGE: {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task
        } else {
          return t
        }
      })
    }
    case ACTIONS.DELETE: {
      return tasks.filter((t) => t.id !== action.id)
    }
    default: {
      throw Error('Unknown Type')
    }
  }
}

const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)
```

## useContext

```tsx
const TasksContext = createContext<TaskItem[]>([])
const TasksDispatchContext = createContext<Dispatch<ActionType>>(() => {})

export function useTasks() {
  return useContext(TasksContext)
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext)
}

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks)

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}
```



## Thanks

- [How to Use TypeScript with React](https://www.freecodecamp.org/news/use-typescript-with-react/)
- [React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)
- [使用 TypeScript – React 中文文档](https://zh-hans.react.dev/learn/typescript)
- [TypeScript for React Developers](https://www.freecodecamp.org/news/typescript-for-react-developers/)
