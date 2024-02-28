---
date: 2024-01-03
tags:
  - til
  - ts
---

TypeScript offers all of JavaScript's features, and an additional layer on top of these: TypeScript's type system.

## Types by Inference

Creating a variable and assigning its to a particular value, TypeScript will use the value as its type.

This offers a type-system without needing to add extra characters to make types explicit in your code.

```ts
let hello = "Hello World"
//   ⬆️ string
```

## Defining Types

To create an object with an _inferred_ type which includes `name: string` and `id: number`, you can write:

```ts
const user = {
  name: "Mancuoj",
  id: 0,
}
```

Describe the object's shape using an `interface` declaration:

```ts
interface User {
  name: string
  id: number
}
```

Then declare a object conforms to the shape using `: TypeName` after a variable declaration:

```ts
const user: User = {
  name: "Mancuoj",
  id: 0,
}
```

If not match, TypeScript will warn you.

Use with classes:

```ts
class UserAccount {
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}

const user: User = new UserAccount("Mancuoj", 1)
```

Use to annotate parameters and return values to functions:

```ts
function deleteUser(user: User) {
  // ...
}

function getAdminUser(): User {
  //...
}
```

TypeScript extends JavaScript primitive types with a few more:

- `any` allow anything
- `unknown` ensure someone using this type declares what the type is
- `never` it's not possible that this type could happen
- `void` a function which returns `undefined` or has no return value

In most cases, prefer using `interface` over `type`.

## Composing Types

Create complex types by combining simple ones.

### Unions

```ts
// it's boolean type
type MyBool = true | false

type WindowStates = "open" | "closed" | "minimized"

// use `typeof` to learn the type of a variable
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj]
  return obj;
}
```

### Generics

```ts
type StringArray = Array<string>

interface Backpack<Type> {
  add: (obj: Type) => void
  get: () => Type
}
```

## Structural Type System

One of TypeScript's core principles is that type checking focuses on the _shape_ that values have. This is sometimes called "duck typing" or "structural typing".

If two objects have the same shape, they are considered to be of the same type.

```ts
interface Point {
  x: number
  y: number
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`)
}

const point = { x: 12, y: 26 }
logPoint(point) // logs "12, 26"
```

Only requires a subset of the object's fields to match:

```ts
const point2 = { x: 12, y: 26, z: 39 }
logPoint(point2) // logs "12, 26"
```

If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.

## Thanks

- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
