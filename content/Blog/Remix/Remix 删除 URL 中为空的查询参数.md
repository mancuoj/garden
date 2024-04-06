避免 `?q=` 这种查询参数为空的 URL 出现，可以在 `loader` 函数中检测并触发重定向。

```tsx
async function clearEmptyParams(url: URL) {
  let shouldRedirect = false
  for (const [key, value] of url.searchParams.entries()) {
    if (value === '') {
      url.searchParams.delete(key)
      shouldRedirect = true
    }
  }
  if (shouldRedirect) {
    throw redirect(url.toString())
  }
}

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  await clearEmptyParams(url)
  
  // ... 其他代码
}
```

