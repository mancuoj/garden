---
date: 2024-02-28
tags:
  - til
  - js
---

When we talk about closures and how they work, we're actually discussing the relationship between functions and their execution contexts, and how these functions can remember and access variables from the scope in which they were created, even when they are called in a completely different scope.

```js
var createCounter = function (init) {
  let cur = init
  return {
    increment: () => ++cur,
    decrement: () => --cur,
    reset: () => (cur = init),
  }
}
```

## Inside the `createCounter` Function

1. **Initialization Phase**: When you call `createCounter(init)`, the JavaScript engine first creates a new execution context for this function call internally. This execution context contains a parameter named `init`, whose value is what you passed to `createCounter`.
2. **Creating the `cur` Variable**: Inside this execution context, the `cur` variable is created and initialized to the value of `init`. At this point, both `cur` and `init` exist within the local scope of `createCounter`.
3. **Returning an Object**: The `createCounter` function returns an object containing three methods (`increment`, `decrement`, `reset`). Each method is a function that captures (closes over) its lexical scope at the time of definition, meaning they remember the values and environment of `cur` and `init`.

## How Closures Work

- **Formation of a Closure**: After `createCounter` has executed and returned the object, according to conventional understanding, the local variables of `createCounter` (`cur` and `init`) should be destroyed as the function execution is completed. However, since the methods in the returned object still reference `cur` and `init`, these variables are not destroyed. Instead, they continue to exist so that these methods can use them when called in the future. This is the core characteristic of closures: **functions remember and access the environment in which they were created**.
- **Behavior of the Methods**:
  - The `increment` and `decrement` methods work by modifying the value of the `cur` variable, increasing or decreasing `cur`'s value each time they are called.
  - The `reset` method resets the value of `cur` to the value of `init`, regardless of what the `init` value was at the time of the `createCounter` call. The `reset` method can access and use this initial value through the closure.

## Thanks

- [2665. 计数器 II - 力扣](https://leetcode.cn/problems/counter-ii/solutions/)
