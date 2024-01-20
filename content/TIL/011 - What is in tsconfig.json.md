---
date: 2024-01-11
tags:
  - ts
  - config
---

Copied from my repo [front-loop/react-mini-tmpl](https://github.com/front-loop/react-mini-tmpl).

```json
{
  "compilerOptions": {
    "target": "ES2020", /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "useDefineForClassFields": true, /* Emit ECMAScript-standard-compliant class fields. */
    "lib": ["ES2020", "DOM", "DOM.Iterable"], /* Specify a set of bundled library declaration files that describe the target runtime environment. */
    "module": "ESNext", /* Specify what module code is generated. */
    "skipLibCheck": true, /* Skip type checking all .d.ts files. */

    /* Bundler mode */
    "moduleResolution": "bundler", /* Specify how TypeScript looks up a file from a given module specifier. */
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true, /* Enable importing .json files. */
    "isolatedModules": true, /* Ensure that each file can be safely transpiled without relying on other imports. */
    "noEmit": true, /* Disable emitting files from a compilation. */
    "jsx": "react-jsx", /* Specify what JSX code is generated. */

    /* Linting */
    "strict": true, /* Enable all strict type-checking options. */
    "noUnusedLocals": true, /* Enable error reporting when local variables aren't read. */
    "noUnusedParameters": true, /* Raise an error when a function parameter isn't read. */
    "noFallthroughCasesInSwitch": true /* Enable error reporting for fallthrough cases in switch statements. */
  },
  
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```


## Thanks

- [TypeScript for React Developers](https://www.freecodecamp.org/news/typescript-for-react-developers/)
- [TS Config Helper](https://tsconfiger.netlify.app/)