---
date: 2024-01-08
tags:
  - til
  - api
---

Promise based HTTP client for the browser and node.js.

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

```js
axios("https://httpbin.org/ip")
  .then((res) => console.log(res.data))
  .catch((err) => console.warn(err))
```

```js
async function getIP() {
  try {
    const res = await axios("https://httpbin.org/ip")
    console.log(res.data)
  } catch (err) {
    console.warn(err)
  }
}
```

```js
axios.post("/user", { firstName: "Fred", lastName: "Flintstone" })
```

```js
const { data } = await axios.post("/user", document.querySelector("#my-form"), {
  headers: {
    "Content-Type": "application/json",
  },
})
```

```js
const { data } = await axios.post(
  "https://httpbin.org/post",
  {
    firstName: "Fred",
    lastName: "Flintstone",
    orders: [1, 2, 3],
    photo: document.querySelector("#fileInput").files,
  },
  {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  },
)
```

```js
const { data } = await axios.post(
  "https://httpbin.org/post",
  {
    firstName: "Fred",
    lastName: "Flintstone",
    orders: [1, 2, 3],
  },
  {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  },
)
```

## Thanks

- [Axios Docs](https://axios-http.com/docs/intro)
- [[006 -  You Might Not Need Axios]]
