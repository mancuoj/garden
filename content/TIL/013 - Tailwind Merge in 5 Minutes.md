---
date: 2024-01-13
tags:
  - css
  - tailwind
---

`twMerge` overrides conflicting classes and keeps everything else untouched. 


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