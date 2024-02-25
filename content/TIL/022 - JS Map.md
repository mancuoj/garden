---
date: 2024-01-22
tags:
  - js
---


In JS, Map is similar to Object, the biggest difference being that Map allows keys of any type (including Objects as keys), while Object only allows strings or Symbols types (other types can be used as keys, but will be automatically converted to strings).

- `new Map()`
- `map.set(key, value)`
- `map.get(key)`, do not use the form `map[key]`
- `map.has(key)`
- `map.delete(key)`
- `map.clear()`
- `map.size`

The **SameValueZero** algorithm is used to compare whether key values are equal, with the specific rules as follows:

- If two values are strictly equal (`===`), they are considered equal
- If two values are both NaN, they are considered equal
- If one value is +0 and the other is -0, they are considered equal


## Iteration over Map

- `map.keys()`
- `map.values()`
- `map.entries()`, entries `[key, value]`, it used by default in `for .. of`

`Map` preserves the insertion order, and it has a built-in `forEach` method.


## Map <-> Object

`Object.entries()` returns the array of key/value pairs: `[ ["name","John"], ["age", 30] ]`.

```js
let obj = {
  name: "John",
  age: 30
};

let map = new Map(Object.entries(obj));

alert( map.get('name') ); // John
```

```js
let prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4]
]);

// now prices = { banana: 1, orange: 2, meat: 4 }

alert(obj.orange); // 2
```

## Thanks

- [Map and Set](https://javascript.info/map-set)