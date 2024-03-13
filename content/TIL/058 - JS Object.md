---
date: 2024-02-27
tags:
  - til
  - js
---

In essence, an **object** is simply a mapping from strings to other values. These values can be of any type: strings, functions, other objects, etc. The strings that map to values are referred to as **keys**.

```js
const object = {
  num: 1,
  str: "Hello World",
  obj: {
    x: 5,
  },
}
```

There are three ways to access the values of an object:

- Dot notation

```js
const val = object.obj.x
console.log(val) // 5
```

- Bracket notation, which is used when the key is not a valid variable name, for example, ".123"

```js
const val = object["obj"]["x"]
console.log(val) // 5
```

- Destructuring syntax, which is very useful when accessing multiple values at once. You can learn more about the syntax here

```js
const { num, str } = object
console.log(num, str) // 1 "Hello World"
```

## Thanks

- [2665. 计数器 II - 力扣](https://leetcode.cn/problems/counter-ii/solutions/2487703/ji-shu-qi-ii-by-leetcode-solution-ofuk/)
