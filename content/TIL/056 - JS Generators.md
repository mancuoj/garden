---
date: 2024-02-25
tags:
  - til
  - js
---

Regular functions return only one, single value (or nothing).

Generators can return ("yield") multiple values, one after another, on-demand. They work great with [iterables](https://javascript.info/iterable), allowing to create data streams with ease.

```js
function* generateSequence() {
  yield 1
  yield 2
  return 3
}

// "generator function" creates "generator object"
let generator = generateSequence()
alert(generator) // [object Generator]

let one = generator.next()
alert(JSON.stringify(one)) // {value: 1, done: false}

let two = generator.next()
alert(JSON.stringify(two)) // {value: 2, done: false}

let three = generator.next()
alert(JSON.stringify(three)) // {value: 3, done: true}

// If we do them, they return the same object: {done: true}
```

```js
for (let value of generator) {
  alert(value) // 1, then 2
  // no 3, because { done: true }
}

let sequence = [0, ...generateSequence()]
// 0, 1, 2
```

```js
let range = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    // a shorthand for [Symbol.iterator]: function*()
    for (let value = this.from; value <= this.to; value++) {
      yield value
    }
  },
}

alert([...range]) // 1,2,3,4,5
```

```js
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i
}

function* generatePasswordCodes() {
  // 0..9
  yield* generateSequence(48, 57)
  // === for (let i = 48; i <= 57; i++) yield i;

  // A..Z
  yield* generateSequence(65, 90)

  // a..z
  yield* generateSequence(97, 122)
}

let str = ""

for (let code of generatePasswordCodes()) {
  str += String.fromCharCode(code)
}

alert(str) // 0..9A..Za..z
```

## Thanks

- [Generators (javascript.info)](https://javascript.info/generators)
