---
date: 2024-01-18
---

Bun natively implements a high-performance SQLite3 driver.

## Usage

```ts
import { Database } from 'bun:sqlite'

const db = new Database('db.sqlite')
const query = db.query("select 'Hello World' as message;")
console.log(query.get())
//=> { message: "Hello World" }
```

## Basic

```ts
// open or create a database
const db = new Database('db.sqlite')

// do the same thing - open a in-memory database
const db = new Database(":memory:");
const db = new Database();
const db = new Database("");

// readonly mode
const db = new Database("db.sqlite", { readonly: true })

// ESM load
import db from "./db.sqlite" with {"type": "sqlite"}

const olddb = new Database('db.sqlite')
const contents = olddb.serialize() // => Uint8Array
const newdb = Database.deserialize(contents)

// not be executed
// prepare a query that will be cached on the Database instance 
const query = db.query(`select "Hello world" as message`)

// prepare a query without caching 
const query = db.prepare("SELECT * FROM foo WHERE bar = ?")

db.close()
```


## WAL Mode

In WAL(write-ahead log) mode, writes to the database are written directly to a separate file called the "WAL file". 

This file will be later integrated into the main database file, think of it as a **buffer** for pending files.

Enable it to dramatically improve performance, especially in situations with many concurrent writes.

```ts
db.exec('PRAGMA journal_mode = WAL;')
```


## Statements

A `Statement` is a prepared query.

Create a `Statement` with `.query` method on your `Database` instance.

```ts
const query = db.query(`select "Hello world" as message`)

// contain parameters
// do the same thing
// $param :param @param
const query = db.query(`SELECT ?1, ?2;`)
const query = db.query(`SELECT $param1, $param2;`)
```

A `Statement` can be executed with several different methods, each returning the results in a different form.

```ts
// an array of objects
const query = db.query(`select $message;`)
query.all({ $message: 'Hello world' }) //=> [{ message: "Hello world" }]

// an object
query.get({ $message: 'Hello world' }) // => { $message: "Hello world" }

const query = db.query(`create table foo;`)
query.run() // => undefined


// an array of arrays
const query = db.query(`select $message;`)
query.values({ $message: 'Hello world' })

query.values(2)
// [
//   [ "Iron Man", 2008 ],
//   [ "The Avengers", 2012 ],
//   [ "Ant-Man: Quantumania", 2023 ],
// ]

// for debugging
console.log(query.toString())
```

## Parameters

```ts
const query = db.query('SELECT * FROM foo WHERE bar = $bar')
const results = query.all({
  $bar: 'bar',
})

// positional
const query = db.query('SELECT ?1, ?2')
const results = query.all('hello', 'goodbye')
```


## Transactions

Transactions are a mechanism for executing multiple queries in an _atomic_ way.

Either all of the queries succeed or none of them do.

```ts
const insert = db.prepare('INSERT INTO cats (name) VALUES ($name)')
const insertCats = db.transaction((cats) => {
  for (const cat of cats) insert.run(cat)
  return cats.length
})

const count = insertCats(
  [
    { $name: 'Keanu' }, 
    { $name: 'Salem' }, 
    { $name: 'Crookshanks' }
  ]
)
console.log(`Inserted ${count} cats`)
```

## Datatypes

|JavaScript type|SQLite type|
|---|---|
|`string`|`TEXT`|
|`number`|`INTEGER` or `DECIMAL`|
|`boolean`|`INTEGER` (1 or 0)|
|`Uint8Array`|`BLOB`|
|`Buffer`|`BLOB`|
|`bigint`|`INTEGER`|
|`null`|`NULL`|

## Preference

```ts
class Database {
  constructor(
    filename: string,
    options?:
      | number
      | {
          readonly?: boolean;
          create?: boolean;
          readwrite?: boolean;
        },
  );

  query<Params, ReturnType>(sql: string): Statement<Params, ReturnType>;
}

class Statement<Params, ReturnType> {
  all(params: Params): ReturnType[];
  get(params: Params): ReturnType | undefined;
  run(params: Params): void;
  values(params: Params): unknown[][];

  finalize(): void; // destroy statement and clean up resources
  toString(): string; // serialize to SQL

  columnNames: string[]; // the column names of the result set
  paramsCount: number; // the number of parameters expected by the statement
  native: any; // the native object representing the statement
}

type SQLQueryBindings =
  | string
  | bigint
  | TypedArray
  | number
  | boolean
  | null
  | Record<string, string | bigint | TypedArray | number | boolean | null>;
```

## Thanks

- [SQLite – API | Bun Docs](https://bun.sh/docs/api/sqlite)
- [SQLite Documentation](https://www.sqlite.org/docs.html)
- [WiseLibs/better-sqlite3](https://github.com/WiseLibs/better-sqlite3#documentation)
