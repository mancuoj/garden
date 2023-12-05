---
title: React Router
tags:
  - react
---


- [2023最新React Router基础及Data API](https://www.bilibili.com/video/BV1FX4y1q72i)

## loader

渲染之前向路由元素提供数据，该元素可以使用 `useDataLoader()` 获取并使用数据。

其他做法在元素组件里写 useEffect 获取，这样肯定会有一定延迟，要有加载中的状态。

```tsx
createBrowserRouter([
  {
    element: <Teams />,
    path: "teams",
    loader: async () => {
      return fakeDb.from("teams").select("*");
    },
    children: [
      {
        element: <Team />,
        path: ":teamId",
        loader: async ({ params }) => {
          return fetch(`/api/teams/${params.teamId}.json`);
        },
      },
    ],
  },
]);
```

可以直接在 loader 里返回一个 fetch，`useDataLoader()` 会自动调用 `response.json()` 来解析它。

### params

动态参数在解析后传给 loader，params 直接调用同名参数即可。

### request

可以拿到路由请求的 fetch request 实例：

- [Request - Web API 接口参考](https://developer.mozilla.org/zh-CN/docs/Web/API/Request)
- [URL - Web API 接口参考](https://developer.mozilla.org/zh-CN/docs/Web/API/URL)
- [URLSearchParams - Web API 接口参考](https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams)

```tsx
function loader({ request }) {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("q");
  return searchProducts(searchTerm);
}
```

### throw

遇到 loader 获取资源失败情况，甚至可以直接 `throw new Response("Not Found", { status: 404 })`，会跳转到 [[React Router 基础#errorElement | errorElement]] 定义的元素。

## action



## errorElement