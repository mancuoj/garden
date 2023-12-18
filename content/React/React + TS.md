---
title: TypeScript in React
date: 2023-12-18
---

## FC

```ts
import { FC } from 'react'

interface AppProps {
  title: string
}

const App: FC<AppProps> = ({ title }) => {
  return <h1>Hello {title}</h1>
}
```




## Thanks

- [How to Use TypeScript with React](https://www.freecodecamp.org/news/use-typescript-with-react/)
- [React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/)
- [Using TypeScript – React](https://react.dev/learn/typescript)