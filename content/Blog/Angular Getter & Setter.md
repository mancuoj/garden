---
date: 2023-09-07
---

Angular 中并没有计算属性的概念，但是可以使用 `get` 方法来实现类似的功能，这个功能还挺好用的，但是官方教程中并没有出现。

一个示例：

```ts
export class AppComponent {
  firstName = '彻底'
  lastName = '失败'

  get fullName() {
    // logic here ...
    return `${this.firstName} ${this.lastName}`
  }
}
```

然后就可以像使用其他属性一样在模版中使用 `fullName` 了：

```html
<p>{{ fullName }}</p>
```

它会随着依赖属性 `firstName` 和 `lastName` 的变化而变化。

`set` 需要使用 `ngOnChanges` 来实现：

```ts
ngOnChanges(changes: SimpleChanges): void {
  if(changes['firstname'] || changes['lastName']) {
    // logic here ...
    this.update();
  }
}
```

