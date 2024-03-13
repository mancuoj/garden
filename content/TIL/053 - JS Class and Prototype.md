---
date: 2024-02-22
tags:
  - til
  - js
---

You can define classes in JS, the constructors of a class returns an object which is an instance of that class.

```js
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  greet() {
    console.log("My name is", this.name)
  }
}

const alice = new Person("Alice", 25)
alice.greet() // "My name is Alice"
```

JS uses special objects called **prototypes** to implement classes. All methods (in the example `greet`) are functions stored on the object's prototype.

To illustrate this more concretely, the above operation can be implemented using the following code:

```js
const alice = {
  name: "Alice",
  age: 25,
  __proto__: {
    greet: function () {
      console.log("My name is", this.name)
    },
  },
}
alice.greet() // "My name is Alice"
```

Seeing this code, you might ask:"Why can the `greet` method be accessed here, even though it's not a key on the `alice` object?"

The reason is that accessing keys on an object is actually a bit more complex than just looking at the object's keys. In fact, there is an algorithm that traverses the prototype chain.

- First, JS looks at the keys on the object
- If the requested key is not found, it looks at the keys on the prototype object
- If it's still not found, it looks at the prototype's prototype, and so on

This is how inheritance is implemented in JS. You might also wonder why JS has this peculiar concept of prototypes. Why not just store functions directly on the object itself?

The answer is efficiency. Each time a new `Person` object is created, the `age` and `name` fields are added to the object. However, only a reference to the prototype object is added. Therefore, no matter how many `Person` instances are created or how many methods are on the class, only one prototype object is generated.

## Thanks

- [2665. 计数器 II - 力扣](https://leetcode.cn/problems/counter-ii/solutions/2487703/ji-shu-qi-ii-by-leetcode-solution-ofuk/)
