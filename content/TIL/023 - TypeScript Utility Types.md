---
date: 2024-01-23
tags:
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
- `NotNullable<Type>` exclude `null` and `undefined`
- `Extract<Type, Union>` extract all union members that are assignable to `Union` to construct a type
- `Exclude<UnionType, ExcludedMembers>` remove excluded members
- `Parameters<Type>` construct a _tuple_ type from function parameters
- `ConstructorParameters<Type>`
- `ReturnType<Type>` function return type
- `InstanceType<Type>`
- `ThisParameterType<Type>` function `this` parameter type,  else `unknown`
- `OmitThisParameter<Type>`
- `ThisType<Type>`
- `Uppercase<StringType>`
- `Lowercase<StringType>`
- `Capitalize<StringType>`
- `Uncapitalize<StringType>`

## Partial Required Readonly

```ts

```


## Pick

Implement the built-in `Pick<T, K>` generic without using it.

Constructs a type by picking the set of properties `K` from `T`.


```ts
type MyPick<T, K extends keyof T> = {
  [Key in K]: T[Key]
}
```


## Omit





## Thanks

- [TypeScript: Documentation](https://www.typescriptlang.org/docs/handbook/utility-types.html)
- [[024 - Create Types from Types]]
- [type-challenges](https://github.com/type-challenges/type-challenges)
