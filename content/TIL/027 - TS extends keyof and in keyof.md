---
date: 2024-01-27
tags:
  - til
  - ts
---

For any type `T`, `keyof T` is the _union_ of known, public property names of `T`.

```ts
interface Person {
  age: number
  name: string
}

type PersonKeys = keyof Person // "age" | "name"
```

`extends` is used to constrain the type of a generic parameter.

`<T, K extends keyof T>` restrict `K` to be the public property name of `T`.

It is nothing to do with extending a type or inheritance, contrary to extending interfaces.

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

const person: Person {
  age: 22,
  name: "mancuoj",
}

const name = getProperty(person, "name");

// ❌ gender is not a property of person
const gender = getProperty(person, "gender");
```

`in` is used to define _index signature_ that we want to type with a union of string, number or symbol literals.

In combination with `keyof`, we can use it to create a so called _mapped type_, which re-maps all properties of origin type.

```ts
type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key]
}
```

## Thanks

- [[023 - TS Utility Types]]
- [[024 - Create Types from Types]]
- [In TypeScript, what do "extends keyof" and "in keyof" mean? - Stack Overflow](https://stackoverflow.com/questions/57337598/in-typescript-what-do-extends-keyof-and-in-keyof-mean)
