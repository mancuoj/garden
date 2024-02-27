---
date: 2024-01-12
tags:
  - css
  - tailwind
  - how
---

A tiny (239B) utility for constructing `className` strings conditionally.

## Usage

Conditionally joining classNames together:

```js
import { clsx } from "clsx"

clsx("foo", true && "bar", "baz")
//=> 'foo bar baz'

clsx({ foo: true, bar: false, baz: isTrue() })
//=> 'foo baz'

clsx({ foo: true }, { bar: false }, null, { "--foobar": "hello" })
//=> 'foo --foobar'

clsx(["foo", 0, false, "bar"])
//=> 'foo bar'

clsx(["foo"], ["", 0, false, "bar"], [["baz", [["hello"], "there"]]])
//=> 'foo bar baz hello there'

clsx("foo", [1 && "bar", { baz: false, bat: null }, ["hello", ["world"]]], "cya")
//=> 'foo bar hello world cya'
```

The most powerful in React:

```tsx
<button className={clsx("something", { dynamicClass: isActiveState })}
```

## Tailwind Support

```json title=".vscode/settings.json"
{
  "tailwindCSS.experimental.classRegex": [["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]]
}
```

```js
clsx("text-base", props.active && "text-primary", props.className)
```

## Thanks

- [lukeed/clsx](https://github.com/lukeed/clsx)
- [front-loop/ts-clsx](https://github.com/front-loop/ts-clsx)
