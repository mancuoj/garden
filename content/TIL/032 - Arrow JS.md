---
date: 2024-02-01
tags:
  - til
  - js
---

## Install

- VS Code Extension -> lit-html
- Vite + `@arrow-js/core`
- Prefer ESM CDN

```js
<script type="module">
  import {(reactive, html)} from 'https://esm.sh/@arrow-js/core'; // Start your app here!
</script>
```

## Core

- Reactive (r)
- Watch (w)
- HTML (t)

```js
import { reactive } from "@arrow-js/core"

const data = reactive({
  price: 25,
  quantity: 10,
})

// when price changes, call the function
// $off to remove that callback
data.$on("price", (value) => {
  console.log(`Price changed to ${value}`)
})

data.price = 35
// 'Price changed to 35'
```

```js
import { reactive, watch } from "@arrow-js/core"

const data = reactive({
  price: 25,
  quantity: 10,
  logTotal: true,
})

function total() {
  if (data.logTotal) {
    console.log(`Total: ${data.price * data.quantity}`)
  }
}

// tracks any reactive data dependencies of that function
// truns $on and truns $off
watch(total)

data.price = 35
// 'Total: 250'
// 'Total: 350'
```

```js
watch(
  // watched function
  () => data.logTotal && data.price * data.quantity,
  // watched function callback
  // the argument is the values returned by the watched function
  (total) => total !== false && console.log(`Total: ${total}`),
)
```

```js
import { html } from "@arrow-js/core"

const appElement = document.getElementById("app")

const template = html`Hello <em>World</em>`

template(appElement)
```

```js
import { html } from "@arrow-js/core"

// function and reactive data will update automatically
html`
  <ul>
    <li>Hello ${data.location} (🪨 static expression)</li>
    <li>Hello ${() => data.location} (⚡ dynamic expression)</li>
  </ul>
`
```

## Thanks

- [ArrowJS • Docs](https://www.arrow-js.com/docs/)
