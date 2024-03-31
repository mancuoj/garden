
## 路由设计

```
- app
  - routes
     - _index.tsx          /
     - posts.$postId.tsx   /posts/:postId
     - tags.tsx            
     - tags._index.tsx     /tags/
     - tags.$tagId.tsx     /tags/:tagsId
  - root.tsx
```

-  tags.tsx 变为父级 Layout，需要有 `Outlet`，子路由不再继承 root.tsx


