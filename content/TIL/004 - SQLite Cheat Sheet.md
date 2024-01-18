---
date: 2024-01-04
---

## Table

```sqlite
-- create
CREATE TABLE [IF NOT EXISTS] table(
   primary_key INTEGER PRIMARY KEY,
   column_name type NOT NULL,
   column_name type NULL,
   ...
);

-- delete
DROP TABLE [IF EXISTS] table_name;

-- rename
ALTER TABLE table_name RENAME TO new_name;

-- add column
ALTER TABLE table ADD COLUMN column_definition;

-- delete column
ALTER TABLE table DROP COLUMN column_name;
```

## Query

```sqlite
SELECT * FROM table_name;

SELECT c1, c2
FROM table_name;

-- unique
SELECT DISTINCT (c1)
FROM table_name;

-- filter
SELECT *
FROM table_name
WHERE condition;

-- rename
SELECT c1 AS new_name
FROM table_name;

-- multiple
SELECT * 
FROM table_name_1
INNER JOIN table_name_2 ON condition;

SELECT * 
FROM table_name_1
LEFT JOIN table_name_2 ON condition;

-- count
SELECT COUNT (*)
FROM table_name;

-- sort
SELECT c1, c2
FROM table_name
ORDER BY c1 ASC [DESC], c2 ASC [DESC],...;

-- group
SELECT *
FROM table_name
GROUP BY c1, c2, ...;

-- filter group
SELECT c1, aggregate(c2)
FROM table_name
GROUP BY c1
HAVING condition;

-- search
SELECT * FROM table
WHERE column LIKE '%value%'

-- full-text search
SELECT * FROM table
WHERE table MATCH 'search_query';
```


## Data

```sqlite
-- insert row
INSERT INTO table_name(column1,column2,...)
VALUES(value_1,value_2,...);

INSERT INTO table_name(column1,column2,...)
VALUES(value_1,value_2,...),
  (value_1,value_2,...),
  (value_1,value_2,...)...

-- update row
UPDATE table_name
SET c1 = v1,
  ...

UPDATE table_name
SET c1 = v1,
  ...
WHERE condition;

-- delete
DELETE FROM table;

DELETE FROM table
WHERE condition;
```

## Index

```sqlite
-- create
CREATE [UNIQUE] INDEX index_name
ON table_name (c1,c2,...)

-- delete
DROP INDEX index_name;

-- expression index
CREATE INDEX index_name ON table_name(expression);
```

## Thanks

- [SQLite Cheat Sheet](https://www.sqlitetutorial.net/sqlite-cheat-sheet/)

