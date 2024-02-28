---
date: 2024-01-23
tags:
  - til
  - ts
---

## Intro

- `Awaited<Type>` unwrap promise type
- `Partial<Type>` set all properties optional
- `Required<Type>` set all required
- `Readonly<Type>` set all `readonly`
- `Record<Keys, Type>` a map type
- `Pick<Type, Keys>` pick keys to construct a type
- `Omit<Type, Keys>` pick all to remove keys to construct a type
- `NonNullable<Type>` exclude `null` and `undefined`
- `Extract<Type, Union>` extract all union members that are assignable to `Union` to construct a type
- `Exclude<UnionType, ExcludedMembers>` remove excluded members
- `Parameters<Type>` construct a _tuple_ type from function parameters
- `ConstructorParameters<Type>`
- `ReturnType<Type>` function return type
- `InstanceType<Type>`
- `ThisParameterType<Type>` function `this` parameter type, else `unknown`
- `OmitThisParameter<Type>`
- `ThisType<Type>`
- `Uppercase<StringType>`
- `Lowercase<StringType>`
- `Capitalize<StringType>`
- `Uncapitalize<StringType>`

## Partial Required Readonly

```ts
type MyPartial<T> = {
  [Key in keyof T]?: T[Key] | undefined
}

type MyRequired<T> = {
  [Key in keyof T]-?: T[Key]
}

type MyReadonly<T> = {
  readonly [Key in keyof T]: T[Key]
}
```

## Record

```ts
type MyPropertyKey = string | number | symbol

type MyRecord<K extends PropertyKey, T> = {
  [Key in K]: T
}
```

## Pick Omit

```ts
type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key]
}

type MyOmit<T, K extends keyof T> = {
  [Key in Exclude<keyof T, K>]: T[Key]
}
```

## NonNullable

```ts
type MyNonNullable<T> = T & {}
```

## Exclude Extract

```ts
type MyExclude<T, U> = T extends U ? never : T

type MyExtract<T, U> = T extends U ? T : never
```

## Parameters ReturnType

```ts
type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any
  ? P
  : never

type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never
```

## Thanks

- [[024 - Create Types from Types]]
- [TypeScript: Documentation](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [Type Challenges](https://github.com/type-challenges/type-challenges)
