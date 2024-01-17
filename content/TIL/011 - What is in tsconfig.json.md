---
date: 2024-01-11
tags:
  - ts
---

Copied from my repo [front-loop/react-mini-tmpl](https://github.com/front-loop/react-mini-tmpl).

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```


Vite 默认将设置分为了三类，


## Thanks

- [TypeScript for React Developers](https://www.freecodecamp.org/news/typescript-for-react-developers/)
- [Ts config helper](https://tsconfiger.netlify.app/)