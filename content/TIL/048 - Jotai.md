---
date: 2024-02-17
tags:
  - til
---



Jotai takes an atomic approach to global React state management.

Build state by combining atoms and renders are automatically optimized based on atom dependency.

This solves the extra re-render issue of React context, eliminates the need for memoization, and provides a similar developer experience to signals while maintaining a declarative programming model.


## API

```ts
// primitive atom
function atom<Value>(initialValue: Value): PrimitiveAtom<Value>

// read-only atom
function atom<Value>(read: (get: Getter) => Value): Atom<Value>

// writable derived atom
function atom<Value, Args extends unknown[], Result>(
  read: (get: Getter) => Value,
  write: (get: Getter, set: Setter, ...args: Args) => Result,
): WritableAtom<Value, Args, Result>

// write-only derived atom
function atom<Value, Args extends unknown[], Result>(
  read: Value,
  write: (get: Getter, set: Setter, ...args: Args) => Result,
): WritableAtom<Value, Args, Result>
```

## Thanks

- [Jotai, primitive and flexible state management for React](https://jotai.org/)
