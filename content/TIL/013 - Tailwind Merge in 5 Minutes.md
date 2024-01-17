---
date: 2024-01-13
tags:
  - css
  - tailwind
---

`twMerge` overrides conflicting classes and keeps everything else untouched. 

## Usage

```tsx
function MyGenericInput(props) {
    const className = twMerge('border rounded px-2 py-1', props.className)
    return <input {...props} className={className} />
}
```

Now input `p-3`, it will be rendered with `border rounded p-3`.


## Merging Behavior

It's conflict solution here:

```ts
twMerge('p-5 p-2 p-4') // → 'p-4' last wins

twMerge('p-3 px-5') // → 'p-3 px-5' allow refinements
twMerge('inset-x-4 right-4') // → 'inset-x-4 right-4'

twMerge('inset-x-px -inset-1') // → '-inset-1'
twMerge('bottom-auto inset-y-6') // → 'inset-y-6'
twMerge('inline block') // → 'block'

twMerge('p-2 hover:p-4') // → 'p-2 hover:p-4'
twMerge('hover:p-2 hover:p-4') // → 'hover:p-4'
twMerge('hover:focus:p-2 focus:hover:p-4') // → 'focus:hover:p-4'

twMerge('bg-black bg-[color:var(--mystery-var)]') // → 'bg-[color:var(--mystery-var)]'
twMerge('grid-cols-[1fr,auto] grid-cols-2') // → 'grid-cols-2'

twMerge('[mask-type:luminance] [mask-type:alpha]') // → '[mask-type:alpha]'
twMerge('[--scroll-offset:56px] lg:[--scroll-offset:44px]')
// → '[--scroll-offset:56px] lg:[--scroll-offset:44px]'

// Don't do this!
twMerge('[padding:1rem] p-8') // → '[padding:1rem] p-8'

twMerge('[&:nth-child(3)]:py-0 [&:nth-child(3)]:py-4') // → '[&:nth-child(3)]:py-4'
twMerge('dark:hover:[&:nth-child(3)]:py-0 hover:dark:[&:nth-child(3)]:py-4')
// → 'hover:dark:[&:nth-child(3)]:py-4'

// Don't do this!
twMerge('[&:focus]:ring focus:ring-4') // → '[&:focus]:ring focus:ring-4'

twMerge('!p-3 !p-4 p-5') // → '!p-4 p-5' important modifier
twMerge('!right-2 !-inset-x-1') // → '!-inset-x-1'

twMerge('text-sm leading-6 text-lg/7') // → 'text-lg/7'

twMerge('p-5 p-2 my-non-tailwind-class p-4') // → 'my-non-tailwind-class p-4'

twMerge('text-red text-secret-sauce') // → 'text-secret-sauce'

twMerge('some-class', 'another-class yet-another-class', 'so-many-classes')
// → 'some-class another-class yet-another-class so-many-classes'

twMerge('some-class', undefined, null, false, 0) // → 'some-class'
twMerge('my-class', false && 'not-this', null && 'also-not-this', true && 'but-this')
// → 'my-class but-this'


twMerge('some-class', [undefined, ['another-class', false]], ['third-class'])
// → 'some-class another-class third-class'
twMerge('hi', true && ['hello', ['hey', false]], false && ['bye'])
// → 'hi hello hey'
```


## cn

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```



## Thanks

- [tailwind-merge/docs](https://github.com/dcastil/tailwind-merge/blob/v2.2.0/docs/what-is-it-for.md)
- [api-reference](https://github.com/dcastil/tailwind-merge/blob/v2.2.0/docs/api-reference.md)