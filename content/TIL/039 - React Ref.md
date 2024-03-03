---
date: 2024-02-08
tags:
  - til
  - react
---

## Concepts

- You can ask React to give you a ref by calling the `useRef` Hook.
- Like state, refs let you retain information between re-renders of a
  component.
- Unlike state, setting the ref's `current` value does not trigger a re-render.
- Refs are an escape hatch to hold onto values that aren't used for rendering. You won't need them often.
- A ref is a plain JavaScript object with a single property called `current`, which you can read or set.
- Don't read or write `ref.current` during rendering. This makes your component hard to predict.

---

- Refs are a generic concept, but most often you'll use them to hold DOM elements
- You instruct React to put a DOM node into `myRef.current` by passing `<div ref={myRef}>`
- Usually, you will use refs for non-destructive actions like focusing, scrolling, or measuring DOM elements
- A component doesn't expose its DOM nodes by default. You can opt into exposing a DOM node by using `forwardRef` and passing the second `ref` argument down to a specific node
- Avoid changing DOM nodes managed by React
- If you do modify DOM nodes managed by React, modify parts that React has no reason to update

## Thanks

- [Referencing Values with Refs – React](https://react.dev/learn/referencing-values-with-refs#best-practices-for-refs)
- [Manipulating the DOM with Refs – React](https://react.dev/learn/manipulating-the-dom-with-refs)
