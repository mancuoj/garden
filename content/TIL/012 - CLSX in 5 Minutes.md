---
date: 2024-01-12
tags:
  - css
  - tailwind
---

A tiny (239B) utility for constructing `className` strings conditionally.

## Usage

Conditionally joining classNames together:

```js
import { clsx } from 'clsx'

clsx('foo', true && 'bar', 'baz')
//=> 'foo bar baz'

clsx({ foo: true, bar: false, baz: isTrue() })
//=> 'foo baz'

clsx({ foo: true }, { bar: false }, null, { '--foobar': 'hello' })
//=> 'foo --foobar'

clsx(['foo', 0, false, 'bar'])
//=> 'foo bar'

clsx(['foo'], ['', 0, false, 'bar'], [['baz', [['hello'], 'there']]])
//=> 'foo bar baz hello there'

clsx('foo', [1 && 'bar', { baz: false, bat: null }, ['hello', ['world']]], 'cya')
//=> 'foo bar hello world cya'
```

The most powerful in React:

```tsx
<button className={clsx("something", { dynamicClass: isActiveState })}
```


## Only String


You can use `clsx/lite` to ignore any non-string arguments.

```js
import { clsx } from 'clsx/lite'

clsx('hello', true && 'foo', false && 'bar')
// => "hello foo"

clsx({ foo: true })
//=> ""
```


## Tailwind Support

```json title=".vscode/settings.json"
 {
  "tailwindCSS.experimental.classRegex": [
    ["clsx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
 }
```

```js
clsx('text-base', props.active && 'text-primary', props.className);
```


## Rewrote with TS

```ts
export type ClassValue = ClassArray | ClassDict | string | number | boolean | null | undefined
export type ClassArray = ClassValue[]
export type ClassDict = Record<string, any>

export function toVal(mix: ClassValue): string {
  let str = ''
  let x

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (let i = 0; i < mix.length; i++) {
        if (mix[i]) {
          if ((x = toVal(mix[i]))) {
            if (str) str += ' '
            str += x
          }
        }
      }
    } else {
      for (const key in mix) {
        if (mix[key]) {
          if (str) str += ' '
          str += key
        }
      }
    }
  }

  return str
}

export function clsx(...inputs: ClassValue[]): string {
  let str = ''
  let tmp, x
  for (let i = 0; i < inputs.length; i++) {
    if ((tmp = inputs[i])) {
      if ((x = toVal(tmp))) {
        if (str) str += ' '
        str += x
      }
    }
  }
  return str
}

export default clsx
```


## Thanks

- [lukeed/clsx](https://github.com/lukeed/clsx)