---
title: React Router API 
date: 2023-12-30
---


## Browser Router

浏览器环境下无脑选用它即可。

使用 [remix-run/history](https://github.com/remix-run/history) 库 track 浏览器历史记录，以及 React Context 在需要的任何地方提供历史记录。


## Route

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
  hydrateFallbackElement?: React.ReactNode | null;
  errorElement?: React.ReactNode | null;
  Component?: React.ComponentType | null;
  HydrateFallback?: React.ComponentType | null;
  ErrorBoundary?: React.ComponentType | null;
  handle?: RouteObject["handle"];
  shouldRevalidate?: ShouldRevalidateFunction;
  lazy?: LazyRouteFunction<RouteObject>;
}
```

## Link


```js
<Link to="/onboarding/profile" state={{ from: "occupation " }}>
  Next Step
</Link>

const location = useLocation()
const { from } = location.state
```



## URL Params

```js
path="test/:testId"

const { testId } = useParams()

// loader
export function loader({ params }) {
  console.log(params.testId)
}
```


## Navigate


```js
const navigate = useNavigate()

<Form afterSubmit={() => navigate('/dashboard')} />
```



## Query String

```js
// `?` and `&` in URLs
const [searchParams, setSearchParams] = useSearchParams()

const q = searchParams.get('q')
```


## Thanks

- [A Complete Guide to React Router: Everything You Need to Know](https://ui.dev/react-router-tutorial)
- [Home | React Router](https://reactrouter.com/en/main)
- 