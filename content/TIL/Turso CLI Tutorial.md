---
title: Turso CLI Tutorial
date: 2024-01-03
---

> Turso is an edge-hosted, distributed database based on libSQL, an open-source and open-contribution fork of SQLite. 

其实就是一个分布式 SQLite Serverless 数据库，就像 PlanetScale 是 MySQL Serverless 数据库一样。


## 开始

```sh
curl -sSfL https://get.tur.so/install.sh | bash

turso db create my-db   # 创建 db
turso db show my-db     # 查看 db 信息
turso db list           # 查看 db 列表
turso db inspect my-db  # 查看使用情况
turso db destroy my-db  # 删除 db
```

## Shell

```sqlite
-- 进入 shell
-- turso db shell my-db 

.tables
.schema
.quit
create table users (id text, email text);
insert into users values ("001", "test@foo.com");
select * from users;
```

## Locations

创建 db 会默认选择一个离你最近的位置（日本节点所以给我选了 nrt 也就是东京）。

```shell
turso db create my-db
# Created group default at nrt in 16.301s.
# Created database my-db at group default in 2.012s.
```

你可以查看位置，也可以移动位置。

免费计划就建议主位置香港，副位置东京。

```
turso db locations      # 查看 db 位置列表
turso group locations list default    # 查看 default group 位置
turso group locations add default hkg  # 移动 default group 位置
```



## Thanks

- [Get started with the Turso CLI](https://docs.turso.tech/tutorials/get-started-turso-cli/)