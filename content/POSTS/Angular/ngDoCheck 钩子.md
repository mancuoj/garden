---
title: ngDoCheck hook
date: 2023-09-12
---

在 Angular 中，ngDoCheck 是一个生命周期钩子函数，用于在每次变更检测周期中检测和处理组件中的变化。

我们可以用它来实现类似 Vue watch 侦听器的效果：

```ts
export class MyComponent implements DoCheck {
  ngDoCheck() {
    // 执行你的逻辑...
    console.log('变更检测')
  }
}
```

在我的 TodoMVC 中，我用它来监听 todos 数组的变化，以便在 todos 发生变化时，自动更新 localStorage 中的值：

```ts
ngDoCheck() {
  const todos = JSON.stringify(this.todos)
  if (todos !== localStorage.getItem(this.storageKey)) {
    localStorage.setItem(this.storageKey, todos)
  }
}
```

