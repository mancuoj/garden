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


## ESM 

