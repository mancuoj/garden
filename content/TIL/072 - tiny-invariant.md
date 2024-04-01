---
date: 2024-03-12
tags:
  - til
---

An `invariant` function takes a value, and if the value is [falsy](https://github.com/getify/You-Dont-Know-JS/blob/bdbe570600d4e1107d0b131787903ca1c9ec8140/up%20%26%20going/ch2.md#truthy--falsy) then the `invariant` function will throw. If the value is [truthy](https://github.com/getify/You-Dont-Know-JS/blob/bdbe570600d4e1107d0b131787903ca1c9ec8140/up%20%26%20going/ch2.md#truthy--falsy), then the function will not throw.

```ts
// Type Narrowing
const value: Person | null = { name: 'Alex' };
invariant(value, 'Expected value to be a person');
// type of value has been narrowed to 'Person'
```

```ts
function minimalInvariant(condition: any, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}
```

## Thanks

- [alexreardon/tiny-invariant](https://github.com/alexreardon/tiny-invariant/blob/master/src/tiny-invariant.ts)