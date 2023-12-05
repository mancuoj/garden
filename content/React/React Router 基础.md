---
title: React Router
tags:
  - react
---

> [!tip]
> 官网示例写的极好，就不多记笔记了


- [2023最新React Router基础及Data API](https://www.bilibili.com/video/BV1FX4y1q72i)
- [React Router](https://reactrouter.com/en/main/route/loader)
- 对于所有 Web 应用都建议 createBrowserRouter
- loader useLoaderData 路由跳转预先加载数据
- action useActionData 更简单的表单处理
- errorElement useRouteError 简单的错误页面
- ...

```ts
interface RouteObject {
  path?: string;
  index?: boolean;
  children?: React.ReactNode;
  caseSensitive?: boolean;
  id?: string;
  loader?: LoaderFunction;
  action?: ActionFunction;
  element?: React.ReactNode | null;
  Component?: React.ComponentType | null;
  errorElement?: React.ReactNode | null;
  ErrorBoundary?: React.ComponentType | null;
  handle?: RouteObject["handle"];
  shouldRevalidate?: ShouldRevalidateFunction;
  lazy?: LazyRouteFunction<RouteObject>;
}
```

