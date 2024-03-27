---
date: 2024-03-08
tags:
  - til
---

Alpine is a rugged, minimal tool for composing behavior directly in your markup. Think of it like jQuery for the modern web. Plop in a script tag and get going.

Alpine is a collection of **15 attributes**, **6 properties**, and **2 methods**.

## 15 Attributes

```html
<div x-data="{ open: false }">
  ...
</div>

<div x-bind:class="! open ? 'hidden' : ''">
  ...
</div>

<button x-on:click="open = ! open">
  Toggle
</button>

<div>
  Copyright ©
  <span x-text="new Date().getFullYear()"></span>
</div>

<div x-html="(await axios.get('/some/html/partial')).data">
  ...
</div>

<div x-data="{ search: '' }">
  <input type="text" x-model="search">
  Searching for: <span x-text="search"></span>
</div>

<div x-show="open">
  ...
</div>

<div x-show="open" x-transition>
  ...
</div>

<template x-for="post in posts">
  <h2 x-text="post.title"></h2>
</template>

<template x-if="open">
  <div>...</div>
</template>


<div x-init="date = new Date()"></div>

<div x-effect="console.log('Count is '+count)"></div>

<input type="text" x-ref="content">
<button x-on:click="navigator.clipboard.writeText($refs.content.value)">
  Copy
</button>

<div x-cloak>
  ...
</div>

<div x-ignore>
  ...
</div>
```

## 6 Properties

```html
<h1 x-text="$store.site.title"></h1>

<div x-init="new Pikaday($el)"></div>

<div x-on:notify="...">
  <button x-on:click="$dispatch('notify')">...</button>
</div>

<div x-init="$watch('count', value => {
  console.log('count is ' + value)
})">...</div>

<div x-init="$refs.button.remove()">
  <button x-ref="button">Remove Me</button>
</div>


<div
  x-text="count"
  x-text="$nextTick(() => {"
    console.log('count is ' + $el.textContent)
  })
>...</div>
```

## 2 Methods

```js

<div x-data="dropdown">
  ...
</div>

Alpine.data('dropdown', () => ({
  open: false,
 
  toggle() { 
    this.open = ! this.open
  }
}))



<button @click="$store.notifications.notify('...')">
  Notify
</button>
 
Alpine.store('notifications', {
  items: [],
 
  notify(message) { 
    this.items.push(message)
  }
})
```

## Thanks

- [Alpine.js](https://alpinejs.dev/)