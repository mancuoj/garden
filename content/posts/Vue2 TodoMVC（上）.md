---
title: Vue2 TodoMVC (1)
date: 2023-08-16
---


> 本教程需要你有一定的 HTML、CSS 和 JavaScript 基础，如果你是初学者，建议先去学习三件套

虽说 Vue 已全面转向 Vue3，但对于个人应用来说，Vue3 并不是必需的选择。

本教程从一个实际的 TodoMVC 项目出发，边做项目边学习 Vue2 语法，项目完成后，你将掌握 Vue2 的基本用法，以及如何使用 Vue2 开发一个完整的前端项目。

另外，本项目并未深入探索 Vue2 的更多高级用法，如果你想深入学习 Vue2，可以参考 [Vue2 官方文档](https://v2.cn.vuejs.org/v2/guide/)。

## 项目准备

新建 `index.html` 文件，在未来的一段时间内，我们将在这个文件中编写代码。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vue2 TodoMVC</title>
  </head>

  <body>
    <div id="app"></div>
  </body>
</html>
```

接下来我们导入 Vue 的 CDN，新建一个 Vue 实例，并将其挂载到 el 选项设置的 DOM 元素 `#app` 上。

```html
<body>
  <div id="app"></div>

  <script src="https://unpkg.com/vue@2"></script>
  <script>
    new Vue({
      el: '#app',
    })
  </script>
</body>
```

安装一个 Live Server，启动后，你将看到一个空白的页面。

打开控制台，如果能看到 Vue development mode 的提示信息，说明我们已经成功创建了第一个 Vue 应用。

但相比与使用 el 选项来挂载元素，我更推荐使用 Vue 暴露出的 `$mount` 方法手动挂载到 DOM 元素上，因为这样可以将 Vue 实例与 DOM 分离，两件事分开做，各司其职，更加清晰。

```html
<body>
  <div id="app"></div>

  <script src="https://unpkg.com/vue@2"></script>
  <script>
    const vm = new Vue()
    vm.$mount('#app')
  </script>
</body>
```

## 文本插值和 data 选项

> 注意：我们有意省略了上文中提到的重复代码内容，读者应根据上下文自行增删补全

我们需要一个标题！

```html
<div id="app">
  <h1>{{title}}</h1>
</div>

<script>
  new Vue({
    data: {
      title: 'todos',
    },
  })
</script>
```

Vue 实例会在创建时将 `data` 对象中的所有属性加入到响应式系统中，当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。

我们可以声明式地将 DOM 绑定到底层 Vue 实例的数据，最常见的形式就是使用 `{{...}}` 进行文本插值，它们相当于一个占位符，会被替换为对应 `data` 选项中定义的值。

## v-for 指令

我们增加了一个 Todo 列表！

```html
<script>
  new Vue({
    data: {
      title: 'todos',
      todos: [
        { id: 1, text: 'Learn JavaScript', completed: true },
        { id: 2, text: 'Learn Vue', completed: false },
        { id: 3, text: 'Build something awesome', completed: false },
      ],
    },
  })
</script>
```

如果按照上面的方法，我们需要写三个插值来渲染列表内容。

```html
<div id="app">
  <h1>{{title}}</h1>
  <ul>
    <li>{{todos[0].text}}</li>
    <li>{{todos[1].text}}</li>
    <li>{{todos[2].text}}</li>
  </ul>
</div>
```

但这样写显然不够优雅，Vue 为我们提供了一系列以 `v-` 开头的指令，用于扩展 HTML 的功能，其中的 `v-for` 指令就可以根据一个数组来渲染一个列表，更多指令将会在后面的教程中介绍。

```html
<ul>
  <li v-for="todo in todos">{{todo.text}}</li>
</ul>
```

`v-for` 指令需要使用 `item in items` 形式的特殊语法，其中 `item` 为被迭代的数组元素的别名，`items` 为被迭代的数组。

## v-bind 指令

为了让 Vue 能够跟踪每个列表元素的身份，从而重用和重新排序现有元素，我们需要为每个元素提供一个唯一的 `key` 属性！

但是在 HTML 元素上绑定属性显然不能使用 `{{...}}` 插值，这时我们就需要使用 `v-bind` 指令来完成。

```html
<ul>
  <li v-for="todo in todos" v-bind:key="todo.id">{{todo.text}}</li>
</ul>
```

`v-bind` 通过冒号接收了一个参数，它会告知 `v-bind` 将该元素的 `key` 属性与 `todo.id` 绑定。

另外，Vue 为这个常用指令提供了特定的简写 `:` ，我们可以省略掉 `v-bind`，直接使用 `:key` 即可。

```html
<li v-for="todo in todos" :key="todo.id">{{todo.text}}</li>
```

## v-model 指令

我们需要增加一个复选框，用于标记 todo 是否已经完成！

```html
<li v-for="todo in todos" :key="todo.id">
  <input type="checkbox" v-model="todo.completed" />
  {{todo.text}}
</li>
```

使用 `v-model` 与表单元素建立双向数据绑定，这样当表单元素的值发生变化时，Vue 实例中的数据也会跟着变化。

注意 `v-model` 的初始值只能在 `data` 选项中声明，HTML 中定义的属性值将会被忽略。

## 绑定样式

我们需要给已完成的 todo 添加样式！

在将 `v-bind` 用于 class 和 style 时，Vue 做了专门的增强，表达式的结果类型除了字符串之外，还可以是对象或数组。

```html
<style>
  .completed {
    text-decoration: line-through;
  }
</style>

<li v-for="todo in todos" :key="todo.id" :class="{completed: todo.completed}">
  <input type="checkbox" v-model="todo.completed" />
  {{todo.text}}
</li>
```

这里我们通过对象语法将 `completed` 这个 class 的存在与否绑定到了 `todo.completed` 属性上，当 `todo.completed` 为 truthy 时，`completed` 这个 class 将会被添加到元素上。

## v-on 指令和 methods 选项

我们需要增加一个删除按钮，用于删除 todo 项！

使用 `v-on` 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码或者调用一个在 methods 选项中定义的方法。

此处需要监听点击事件，在用户点击按钮时调用 `removeTodo` 方法，将该 todo 从数组中移除。

```html
<li>
  <button v-on:click="removeTodo(todo)">x</button>
</li>

<script>
  new Vue({
    methods: {
      removeTodo(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1)
      },
    },
  })
</script>
```

Vue 对 `data` 选项的托管使我们可以使用 `this.todos` 直接访问 `data` 对象里的内容。

此外，Vue 还为 `v-on` 提供了特定的简写 `@`，我们可以直接使用 `@click` 替换它。

```html
<button @click="removeTodo(todo)">x</button>
```

至于 methods 中是使用 `removeTodo: function(todo)` 定义函数还是 `removeTodo(todo)` 都可以，选择你喜欢的方式就好了。

但不能使用箭头函数，因为方法中的 `this` 会被自动绑定为 Vue 实例。

另外，`v-for` 指令还提供了第二个可选参数，用于提供当前项的索引，可以在方法中使用这个索引来删除，而不需要使用 `indexOf`。

```html
<li v-for="(todo, index) in todos" :key="todo.id"></li>

<script>
  new Vue({
    methods: {
      removeTodo: function (index) {
        this.todos.splice(index, 1)
      },
    },
  })
</script>
```

## 按键修饰符

我们需要一个输入框，用于添加新的 todo 项！

```html
<div>
  <h1>{{title}}</h1>
  <input type="text" autofocus placeholder="What needs to be done?" />
</div>
<ul>
  ...
</ul>
```

我们希望监听用户的回车事件，当用户按下回车键时，将输入框中的内容添加到 todo 列表中。

Vue 允许 `v-on` 监听键盘事件时添加按键修饰符，我们可以通过将 `KeyBoardEvent.key` 暴露的任意有效按键名转换为 kebab-base 作为修饰符来监听特定的按键事件。

```html
<input type="text" autofocus placeholder="What needs to be done?" @keyup.enter="addTodo" />

<script>
  new Vue({
    methods: {
      addTodo(e) {
        const value = e.target.value.trim()
        if (!value) {
          return
        }
        this.todos.push({
          id: Date.now(),
          text: value,
          completed: false,
        })
        e.target.value = ''
      },
    },
  })
</script>
```

通过 `e` 参数可以在访问原生 DOM 事件，这里我们通过 `e.target.value` 获取到了用户触发回车事件后输入框中的内容。

去除首尾空格后如果为空则直接返回，否则将新的 todo 添加到数组中，并清空输入框。

为了避免 ID 不唯一，可以使用 `Date.now()` 获取当前时间戳作为 ID。

## watch 选项

每次修改刷新后都会重置 todo 列表，这显然不是我们想要的效果，我们需要将 todo 列表保存到 localStorage 中，并在其发生变化时更新 localStorage！

Vue 提供了 watch 选项也叫侦听器，用于观察和响应 Vue 实例上的数据变动。

```js
new Vue({
  data: {
    title: 'todos',
    todos: JSON.parse(localStorage.getItem('vue2-todomvc') || '[]'),
  },

  watch: {
    todos: {
      handler: function (todos) {
        localStorage.setItem('vue2-todomvc', JSON.stringify(todos))
      },
      deep: true,
    },
  },
})
```

关于 localStorage 的用法此处不做过多解释，可以参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)。

为了发现对象内部值的变化，你必须在选项参数中指定 `deep: true`，在 todos 发生改变时，会触发回调函数将新的 todos 存入 localStorage。

如果是没有嵌套的原始类型数据，我们可以直接使用 `todos(newValue, oldValue) { ... }` 来定义回调函数。

当然，我们尽量还是不要使用 `'vue-todomvc'` 这种硬编码的字符串，可以将其定义为常量，放在最外层。

```js
const STORAGE_KEY = 'vue2-todomvc'

new Vue({
  data: {
    title: 'todos',
    todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
  },

  watch: {
    todos: {
      handler: function (todos) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
      },
      deep: true,
    },
  },
})
```

## 小结

至此，我们已经完成了一个基本的可以增删的应用，接下来我们将添加更多功能，让它更加完善！

本文最终完整代码如下所示：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://unpkg.com/vue@2"></script>
    <title>Vue2 TodoMVC</title>
    <style>
      .completed {
        text-decoration: line-through;
      }
    </style>
  </head>

  <body>
    <div id="app">
      <div>
        <h1>{{title}}</h1>
        <input type="text" autofocus placeholder="What needs to be done?" @keyup.enter="addTodo" />
      </div>
      <ul>
        <li v-for="(todo, index) in todos" :key="todo.id" :class="{completed: todo.completed}">
          <input type="checkbox" v-model="todo.completed" />
          {{todo.text}}
          <button @click="removeTodo(index)">x</button>
        </li>
      </ul>
    </div>

    <script>
      const STORAGE_KEY = 'vue2-todomvc'

      const vm = new Vue({
        data: {
          title: 'todos',
          todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
        },

        watch: {
          todos: {
            handler: function (todos) {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
            },
            deep: true,
          },
        },

        methods: {
          addTodo(e) {
            const value = e.target.value.trim()
            if (!value) {
              return
            }
            this.todos.push({
              id: Date.now(),
              text: value,
              completed: false,
            })
            e.target.value = ''
          },

          removeTodo(index) {
            this.todos.splice(index, 1)
          },
        },
      })

      vm.$mount('#app')
    </script>
  </body>
</html>
```
