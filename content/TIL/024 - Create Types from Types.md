---
date: 2024-01-24
tags:
  - ts
---

TypeScript's type system is very powerful because it allows expressing types in terms of other types.

## Generics

Capture the types of the argument in such way that we can also use it to denote what is being returned.

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
```

It's _type variable_, a special kind of variable that works on types rather than values.

Then we can call it of two ways.

```ts
let output = identity<string>("myString")

// type arguments inference
let output = identity("myString")
```

Create generic interface of the function.

```ts
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity;
```

## Operator `in`

A way to narrow down potential types.

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
 
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal;
    // animal: Fish | Human
  } else {
    animal;
    // animal: Bird | Human
  }
}
```

True branch have either an optional or required property, and the false branch have an optional or missing property.

## Operator `keyof`

Take an object type and produce a string of numeric literal _union_ of its keys.

```ts
type Point = { x: number; y: number };
type P = keyof Point;
// the same type as "x" | "y"

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
// type A = number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
// type M = string | number
```

JS object keys are always coerced to a string, so `obj[0]` is always the same as `obj["0"]`.

## Operator `typeof`

TS adds a different `typeof` operator than JS, you can use it in a _type context_ to refer the type of variable or property.

```ts
let s = "hello";
let n: typeof s;
// let n: string
```

Use it to conveniently express many patterns.

```ts
function f() {
  return { x: 10, y: 3 };
}

type P = ReturnType<typeof f>;
// type P = { x: number; y: number; } 
```

Remember that values and types aren't the same thing.


## Indexed Access Types

Access type to look up a specific property on another type.

```ts
type Person = { age: number; name: string; alive: boolean };
type Age = Person["age"];
// type Age = number

type I1 = Person["age" | "name"];
// type I1 = string | number

type I2 = Person[keyof Person];
// type I2 = string | number | boolean

type AliveOrName = "alive" | "name";
type I3 = Person[AliveOrName];
// type I3 = string | boolean
```

Use `number` to get the type of an array's elements.

```ts
const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];
 
type Person = typeof MyArray[number];
// type Person = { name: string; age: number; }

type Age = typeof MyArray[number]["age"];
// or
type Age2 = Person["age"];
```


## Conditional Types

Just like ternary operator `? :` in JS.

```ts
SomeType extends OtherType ? TrueType : FalseType;
```

When the type on the left of the `extends` is assignable to the one on the right, then you'll get the true branch, otherwise get the false branch.

```ts
interface Animal {
  live(): void;
}

interface Dog extends Animal {
  woof(): void;
}
 
type Example1 = Dog extends Animal ? number : string;
// type Example1 = number
 
type Example2 = RegExp extends Animal ? number : string;
// type Example2 = string
```

Use `infer` keyword to extract out types.

```ts
type Flatten<Type> = Type extends Array<infer Item> ? Item : Type;

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
```

Avoid distributivity behavior.

```ts
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>;
// type StrArrOrNumArr = string[] | number[]

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;
type ArrOfStrOrNum = ToArrayNonDist<string | number>;
// type ArrOfStrOrNum = (string | number)[]
```

## Mapped Types

Don't repeat yourself.

```ts
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};
 
const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};
```

Use a union to iterate through keys to create a type.

```ts
type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type Features = {
  darkMode: () => void;
  newUserProfile: () => void;
};
 
type FeatureOptions = OptionsFlags<Features>;
// type FeatureOptions = { darkMode: boolean; newUserProfile: boolean; }
```

We can use `readonly` and `?` to affect types during mapping, and `+` or `-` prefix to add or remove the modifiers (`+` is the default value).

```ts
// Removes 'readonly' attributes from a type's properties
type CreateMutable<Type> = {
  -readonly [Property in keyof Type]: Type[Property];
};
 
type LockedAccount = {
  readonly id: string;
  readonly name: string;
};
 
type UnlockedAccount = CreateMutable<LockedAccount>;
// type UnlockedAccount = { id: string; name: string; }
```

```ts
// Removes 'optional' attributes from a type's properties
type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
};
 
type MaybeUser = {
  id: string;
  name?: string;
  age?: number;
};
 
type User = Concrete<MaybeUser>;
// type User = { id: string; name: string; age: number; }
```

Use `as` clause to rename properties.

```ts
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Person {
  name: string;
  age: number;
  location: string;
}
 
type LazyPerson = Getters<Person>;
// type LazyPerson = { getName: () => string; getAge: () => number; getLocation: () => string; }
```

Filter out keys by producing `never`.

```ts
// Remove the 'kind' property
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};
 
interface Circle {
    kind: "circle";
    radius: number;
}
 
type KindlessCircle = RemoveKindField<Circle>;
// type KindlessCircle = { radius: number; }
```

```ts
type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}
 
type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };
 
type Config = EventConfig<SquareEvent | CircleEvent>
// type Config = { square: (event: SquareEvent) => void; circle: (event: CircleEvent) => void; }
```

```ts
type ExtractPII<Type> = {
  [Property in keyof Type]: Type[Property] extends { pii: true } ? true : false;
};
 
type DBFields = {
  id: { format: "incrementing" };
  name: { type: string; pii: true };
};
 
type ObjectsNeedingGDPRDeletion = ExtractPII<DBFields>;
// type ObjectsNeedingGDPRDeletion = { id: false; name: true; }
```

## Thanks

- [TypeScript: Documentation](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)


