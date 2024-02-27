---
date: 2024-01-18
tags:
  - sql
---

Bun natively implements a high-performance [SQLite3](https://www.sqlite.org/) driver. To use it import from the built-in `bun:sqlite` module.

## Preference

```ts
class Database {
  constructor(
    filename: string,
    options?:
      | number
      | {
          readonly?: boolean
          create?: boolean
          readwrite?: boolean
        },
  )

  query<Params, ReturnType>(sql: string): Statement<Params, ReturnType>
}

class Statement<Params, ReturnType> {
  all(params: Params): ReturnType[]
  get(params: Params): ReturnType | undefined
  run(params: Params): void
  values(params: Params): unknown[][]

  finalize(): void // destroy statement and clean up resources
  toString(): string // serialize to SQL

  columnNames: string[] // the column names of the result set
  paramsCount: number // the number of parameters expected by the statement
  native: any // the native object representing the statement
}

type SQLQueryBindings =
  | string
  | bigint
  | TypedArray
  | number
  | boolean
  | null
  | Record<string, string | bigint | TypedArray | number | boolean | null>
```

## Thanks

- [SQLite – API | Bun Docs](https://bun.sh/docs/api/sqlite)
- [SQLite Documentation](https://www.sqlite.org/docs.html)
- [WiseLibs/better-sqlite3](https://github.com/WiseLibs/better-sqlite3#documentation)
