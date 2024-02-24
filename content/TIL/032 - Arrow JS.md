---
date: 2024-02-01
---

## Install

- VS Code Extension -> lit-html
- Vite + `@arrow-js/core`
- Prefer ESM CDN

```js
<script type="module">
  import { reactive, html } from 'https://esm.sh/@arrow-js/core';
  // Start your app here!
</script>
```

## Core

- Reactive (r)
- Watch (w)
- HTML (t)

```js
import { reactive } from '@arrow-js/core'

const data = reactive({
  price: 25,
  quantity: 10
})

// when price changes, call the function
// $off to remove that callback
data.$on('price', (value) => {
  console.log(`Price changed to ${value}`)
})

data.price = 35
// outputs 'Price changed to 35'
```


```js
import { reactive, watch } from '@arrow-js/core'

const data = reactive({
  price: 25,
  quantity: 10,
  logTotal: true
})

function total () {
  if (data.logTotal) {
    console.log(`Total: ${data.price * data.quantity}`);
  }
}

// tracks any reactive data depend
watch(total)

data.price = 35
```


## Thanks

