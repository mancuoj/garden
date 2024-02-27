---
date: 2023-09-08
tags:
  - angular
---

Angular 的模版引用变量就是在模版中使用 `#` 将 DOM 元素（同样适用于组件）声明一个变量。

我习惯叫它井号语法，有很多用法，这里给出我写的一些示例。

## 拿到 input 的值填入

```html
<input #newItem (keyup.enter)="addItem(newItem.value); newItem.value = ''" />
```

## ngIf 的 else 块

```html
<h2>
  {{ items.length }}
  <span *ngIf="items.length === 1; else elseBlock">item</span>
  <ng-template #elseBlock>items</ng-template>
</h2>
```

## 操作 DOM

此处功能是双击显示编辑框后，自动聚焦。

```html
<input #editInput />
```

使用 `@ViewChild` 装饰器获取模版变量的引用，从而访问和操作 DOM：

```ts
export class AppComponent {
  @ViewChild("editInput", { static: false }) editInput: ElementRef<HTMLInputElement>

  editTodo(todo: Todo) {
    // ....

    // 通过 nativeElement 属性访问 DOM 并聚焦
    // 因为双击后才会显示编辑框，所以使用 setTimeout 等待 DOM 渲染完成
    setTimeout(() => this.editInput.nativeElement.focus())
  }
}
```
