---
date: 2024-03-02
tags:
  - til
  - react
---

## atom

- `atom` function to create an atom config object
  - need an initial value
  - immutable
  - doesn't hold a value
  - values exists in a **store**
- call it **atom** when the context is clear
- can create derived atoms
  - read-only
  - write-only
  - read-write

```js
const readOnlyAtom = atom((get) => get(priceAtom) * 2)

const writeOnlyAtom = atom(
  null, // it's a convention to pass `null` for the first argument
  (get, set, update) => {
    // `update` is any single value we receive for updating this atom
    set(priceAtom, get(priceAtom) - update.discount)
    // or we can pass a function as the second parameter
    // the function will be invoked,
    //  receiving the atom's current value as its first parameter
    set(priceAtom, (price) => price - update.discount)
  },
)

const readWriteAtom = atom(
  (get) => get(priceAtom) * 2,
  (get, set, newPrice) => {
    set(priceAtom, newPrice / 2)
    // you can set as many atoms as you want at the same time
  },
)
```

- `get` in the read function is to read the atom value. It's reactive and read dependencies are tracked
- `get` in the write function is also to read atom value, but it's not tracked


## useAtom


## Store



## Provider