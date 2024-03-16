---
date: 2024-03-01
tags:
  - til
  - react
---

## atom

The `atom` function is to create an atom config. We call it "atom config" as it's just a definition and it doesn't yet hold a value. We may also call it just "atom" if the context is clear.

An atom config is an immutable object. The atom config object doesn't hold a value. The atom value exists in a store.

To create a primitive atom (config), all you need is to provide an initial value.

You can also create derived atoms. We have three patterns:

- Read-only atom
- Write-only atom
- Read-Write atom

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

`get` in the read function is to read the atom value. It's reactive and read dependencies are tracked.

`get` in the write function is also to read atom value, but it's not tracked. Furthermore, it can't read unresolved async values in Jotai v1 API.





## useAtom


## Store



## Provider