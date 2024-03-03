---
date: 2024-02-17
tags:
  - til
---



Jotai takes an atomic approach to global React state management.

Build state by combining atoms and renders are automatically optimized based on atom dependency.

This solves the extra re-render issue of React context, eliminates the need for memoization, and provides a similar developer experience to signals while maintaining a declarative programming model.


## API

- `atom()`
- `useAtom()`
- `useAtomValue()`
- `useSetAtom()`
- 


## Thanks

- [Jotai, primitive and flexible state management for React](https://jotai.org/)
