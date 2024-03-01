---
date: 2024-01-17
tags:
  - til
  - react
---

To initialize state with a computation that should only run once, pass a function to `useState`.

```js
const [state, setState] = useState(compute())
```

This ensures the function is called only during the component's initial render.

## Docs

The `initialState` parameter is used only for the first render. For subsequent renders, React ignores it. If calculating the initial state is resource-intensive, consider providing a function. 

This function will be executed solely during the initial render, optimizing performance:

```js
const [state, setState] = useState(() => {
  const initialState = someExpensiveComputation(props)
  return initialState
})
```

## Thanks

- [Hooks API Reference](https://legacy.reactjs.org/docs/hooks-reference.html#lazy-initial-state)
- [When to use useState initial value as function?](https://stackoverflow.com/questions/60120261/when-to-use-usestate-initial-value-as-function)
