---
date: 2024-01-17
tags:
  - react
  - hook
---

When you want the computation of that initial state to happen only once, you can pass a function instead.

```js
const [state, setState] = useState(compute())
```

The function will be invoked only once on the initial render.

## Docs

The `initialState` argument is the state used during the initial render. In subsequent renders, it is disregarded. If the initial state is the result of an expensive computation, you may provide a function instead, which will be executed only on the initial render:

```js
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props)
  return initialState
})
```

## Thanks

- [Hooks API Reference – React (reactjs.org)](https://legacy.reactjs.org/docs/hooks-reference.html#lazy-initial-state)
- [When to use useState initial value as function? - Stack Overflow](https://stackoverflow.com/questions/60120261/when-to-use-usestate-initial-value-as-function)
