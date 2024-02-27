---
date: 2024-02-08
tags:
  - react
---

## Concepts

- You can ask React to give you a ref by calling the `useRef` Hook.
- Like state, refs let you retain information between re-renders of a 
  component.
- Unlike state, setting the ref's `current` value does not trigger a re-render.
- Refs are an escape hatch to hold onto values that aren't used for rendering. You won't need them often.
- A ref is a plain JavaScript object with a single property called `current`, which you can read or set.
- Don’t read or write `ref.current` during rendering. This makes your component hard to predict.


## Thanks

- [Referencing Values with Refs – React](https://react.dev/learn/referencing-values-with-refs#best-practices-for-refs)
