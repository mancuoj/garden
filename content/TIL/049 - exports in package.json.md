---
date: 2024-02-18
tags:
  - til
  - npm
---


`exports` define the public API for your library.

## Example

```json
{
  "sideEffects": false,
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.js"
      },
      "require": {
        "types": "./dist/index.d.cts",
        "default": "./dist/index.cjs"
      }
    }
  },
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "typesVersions": {
    "*": {
      "*": ["./dist/*", "./dist/index.d.ts"]
    }
  },
  "files": ["dist"]
}
```



## Thanks

- [frehner/modern-guide-to-packaging-js-library](https://github.com/frehner/modern-guide-to-packaging-js-library)