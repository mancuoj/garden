---
date: 2024-01-05
tags:
  - sql
---

```sqlite
SELECT DISTINCT column_list
FROM table_list
  JOIN table ON join_condition
WHERE row_filter
ORDER BY column
LIMIT count OFFSET offset
GROUP BY column
HAVING group_filter;
```

- `DISTINCT` to query unique rows
- `JOIN` to query data from multiple tables
- `WHERE` to filter rows
- `ORDER BY` to sort the result set
- `LIMIT` to constrain the number of rows returned
- `GROUP BY` to get the group rows into groups and apply aggregate function for each group 
- `HAVING` to filter groups

## Order By

```sqlite
SELECT
  name,
  milliseconds, 
  albumid
FROM
  tracks
ORDER BY
  albumid ASC,   -- first, default can omit it
  milliseconds DESC;  -- then
```

Null is the lowest values in SQLite, you will see NULLs appear at the beginning of ascending sort.

Use `NULLS LAST` to place NULLs after other values.

```sqlite
ORDER BY
  albumid NULLS LAST
```

## Distinct

Remove the duplicate rows in the result set.

```sqlite
SELECT DISTINCT	select_list
FROM table;
```

Must appear immediately after the `select` keyword.

## Where




## Thanks

- [SQLite Tutorial – A Step-by-step SQLite Tutorial](https://www.sqlitetutorial.net/)