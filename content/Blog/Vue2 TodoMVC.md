---
date: 2023-08-16
tags:
  - vue
  - todo
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

承接上篇，我们需要继续实现编辑 todo 的功能和一些关键信息的展示。

## v-if 指令

我们希望双击 todo 内容时可以显示一个输入框用于编辑 todo 的内容！

编辑框默认是隐藏的，只有双击 todo 时才会显示出来，这时候就需要用到 `v-if` 指令了。

`v-if` 指令可以根据表达式的真假来决定是否显示元素，并且会在切换时销毁和重建元素。

```html
<li>
  <input type="text" v-if="todo === editedTodo" v-model="todo.text" />
  <div>
    <label @dblclick="editTodo(todo)">{{todo.text}}</label>
  </div>
</li>

<script>
  new Vue({
    data: {
      editedTodo: null,
    },

    methods: {
      editTodo(todo) {
        this.editedTodo = todo
      },
    },
  })
</script>
```

双击 label 后，显示输入框。

## v-else 指令

我们会希望输入框的显示状态与 todo 的显示状态互斥，这时候就需要 `v-else` 指令了。

与传统的 `if-else` 语句相同，`v-if` 同样拥有 `v-else` 和 `v-else-if` 兄弟指令。

`v-else` 不需要表达式，它必须与 `v-if` 一起使用，完整代码如下：

```html
<input type="text" v-if="todo === editedTodo" v-model="todo.text" />
<div v-else>
  <input type="checkbox" v-model="todo.completed" />
  <label @dblclick="editTodo(todo)">{{todo.text}}</label>
  <button @click="removeTodo(index)">x</button>
</div>
```

## 完成编辑

我们希望按下 `Enter` 键时完成编辑，并且在 todo 内容为空时删除该项。

```html
<input @keyup.enter="doneEdit(todo)" />

<script>
  new Vue({
    methods: {
      doneEdit(todo) {
        if (!this.editedTodo) {
          return
        }
        this.editedTodo = null
        todo.text = todo.text.trim()
        if (!todo.text) {
          this.removeTodo(this.todos.indexOf(todo))
        }
      },
    },
  })
</script>
```

因为 `v-model` 会实时更新 todo 的内容，所以我们只需要在按下 `Enter` 键时隐藏输入框即可。

## 取消编辑

我们希望按下 `Esc` 键时取消编辑，并且恢复 todo 未修改时的内容。

```html
<input @keyup.esc="cancelEdit(todo)" />

<script>
  new Vue({
    methods: {
      editTodo(todo) {
        this.beforeEditCache = todo.text
        this.editedTodo = todo
      },

      cancelEdit(todo) {
        todo.text = this.beforeEditCache
        this.editedTodo = null
      },
    },
  })
</script>
```

缓存 todo 未修改时的内容，在按下 `Esc` 键时恢复它并隐藏输入框。

## 自定义指令

我们希望在双击 todo 时自动聚焦到输入框，这样就能在点击其他区域失焦时自动完成编辑了。

这种情况下我们需要对普通的 DOM 元素进行底层操作，所以需要用到自定义指令。

```html
<input v-todo-focus @blur="doneEdit(todo)" />

<script>
  new Vue({
    directives: {
      'todo-focus': {
        inserted(el) {
          el.focus()
        },
      },
    },
  })
</script>
```

通过 directive 选项可以注册一个局部指令，钩子函数 `inserted` 会在被绑定元素插入到父节点时调用，参数 el 即为被绑定的元素。

## 生命周期钩子

我们需要添加三个哈希路由来实现全部，已完成，未完成三种状态的 todo 分开显示。

哈希路由通过 `#` 来标识，不会引起页面的刷新，所以我们可以通过它来实现单页应用。

```html
<div>
  <a href="#/all">All</a>
  <a href="#/active">Active</a>
  <a href="#/completed">Completed</a>
</div>
```

我们需要在路由改变时，拿到当前的状态值（all/active/completed），方便之后根据状态来过滤 todo。

```js
new Vue({
  data: {
    visibility: 'all',
  },
  methods: {
    onHashChange() {
      const visibility = window.location.hash.replace(/#\/?/, '')
      if (filters[visibility]) {
        this.visibility = visibility
      } else {
        window.location.hash = ''
        this.visibility = 'all'
      }
    },
  },
})
```

默认为 all，然后在路由改变时通过正则拿到当前的状态值，如果不是 all/active/completed 之一，则重置为 all。

但是我们该在什么时候调用方法呢？Vue 为我们提供了一系列的生命周期钩子，其中 `mounted` 钩子会在实例被挂载后调用。

```js
new Vue({
  mounted() {
    this.onHashChange()
    window.addEventListener('hashchange', this.onHashChange)
  },
})
```

我们会在挂载时先调用一次获取状态，之后监听 hashchange 事件，当路由改变时再次调用获取状态。

## 计算属性

我们已经获取到了当前的状态值，接下来就需要根据状态来过滤 todo 了。

通过 computed 选项也就是计算属性，可以根据当前的 todos 和 visibility 来计算出过滤后的 filteredTodos，这样可以避免模版中的冗余逻辑。

并且计算属性是基于它们的响应式依赖进行缓存的，只有当依赖发生改变时才会重新计算。

```html
<li v-for="(todo, index) in filteredTodos"></li>

<script>
  new Vue({
    computed: {
      filteredTodos() {
        if (this.visibility === 'all') {
          return this.todos
        } else if (this.visibility === 'active') {
          return this.todos.filter((todo) => !todo.completed)
        } else if (this.visibility === 'completed') {
          return this.todos.filter((todo) => todo.completed)
        }
      },
    },
  })
</script>
```

可以像绑定普通属性一样在模版中绑定计算属性，声明 `filteredTodo` 这个计算属性时，我们提供的函数将作为它的 getter 函数使用。

现在我们点击不同的路由，就可以看到不同状态下的 todo 了。

另外，我们可以进行一个小小的重构，将过滤逻辑提取到一个名为 `filters` 的对象中。

```js
const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.completed),
  completed: (todos) => todos.filter((todo) => todo.completed),
}

const vm = new Vue({
  computed: {
    filteredTodos() {
      return filters[this.visibility](this.todos)
    },
  },
})
```

## v-show 指令

在没有 todo 的情况下，底部的链接也没有必要显示了，我们可以通过 `v-show` 指令来根据 todos 的长度来显示或隐藏底部。

`v-show` 与 `v-if` 指令用法类似，不同的是带有 `v-show` 的元素始终会被渲染并保留在 DOM 中，`v-show` 只是简单的切换元素的 CSS 属性 `display`。

`v-if` 会在切换过程中对条件块内的事件监听器和子组件进行适当的销毁和重建，并且 `v-if` 在初始条件为假时什么也不会做，所以如果需要非常频繁地切换，那么使用 `v-show` 较好。

```html
<div v-show="todos.length">
  <a href="#/all">All</a>
  <a href="#/active">Active</a>
  <a href="#/completed">Completed</a>
</div>
```

## filters 选项

我们需要在底部显示剩余未完成 todo 的数量！

```html
<span>{{remaining}} items</span>

<script>
  new Vue({
    computed: {
      remaining() {
        return filters.active(this.todos).length
      },
    },
  })
</script>
```

通过计算属性可以很方便的计算出剩余未完成 todo 的数量，但很显然全部显示 `x items` 不够友好，我们需要根据数量来显示不同的文案。

在 x 为 1 时，我们应该显示 item 而不是 items，Vue 为我们提供了 filters 选项来自定义文本格式化的过滤器。

```html
<span>{{remaining}} {{remaining | pluralize}} left</span>

<script>
  new Vue({
    filters: {
      pluralize(n) {
        return n === 1 ? 'item' : 'items'
      },
    },
  })
</script>
```

通过管道符号 `|` 将 remaining 作为参数传递给 pluralize 过滤器，然后根据 n 的值来返回不同的文本。

## 计算属性的 setter

我们需要增加一个全选按钮，当点击时，所有的 todo 都会被标记为已完成/未完成状态。

```html
<input type="checkbox" v-model="allDone" />

<script>
  new Vue({
    computed: {
      allDone: {
        get() {
          return this.remaining === 0
        },
        set(value) {
          this.todos.forEach((todo) => (todo.completed = value))
        },
      },
    },
  })
```

将计算属性 allDone 通过 `v-model` 指令绑定到复选框按钮上，当点击按钮时，会触发计算属性的 setter 方法，将所有的 todo 的 completed 属性设置为按钮的值。

可以看出 `v-model` 其实就是个语法糖，它会将 `checked` 属性和 `change` 事件绑定到一起，所以我们也可以这样写：

```html
<input type="checkbox" :checked="allDone" @change="allDone = $event.target.checked" />
```

## 小结

我们需要在底部继续增加清除所有已完成的按钮以及样式，当做课后作业吧！

最终完整代码（不包含 CSS）如下所示：

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
        <input type="checkbox" v-model="allDone" />
        <input type="text" autofocus placeholder="What needs to be done?" @keyup.enter="addTodo" />
      </div>
      <ul>
        <li v-for="(todo, index) in filteredTodos" :key="todo.id" :class="{completed: todo.completed}">
          <input type="text" v-if="todo === editedTodo" v-model="todo.text" @keyup.enter="doneEdit(todo)" @keyup.esc="cancelEdit(todo)" v-todo-focus @blur="doneEdit(todo)" />
          <div v-else>
            <input type="checkbox" v-model="todo.completed" />
            <label @dblclick="editTodo(todo)">{{todo.text}}</label>
            <button @click="removeTodo(index)">x</button>
          </div>
        </li>
      </ul>
      <div v-show="todos.length">
        <span>{{remaining}} items</span>
        <button @click="removeCompleted" v-show="todos.length > remaining">Clear completed</button>
        <div>
          <a href="#/all">All</a>
          <a href="#/active">Active</a>
          <a href="#/completed">Completed</a>
        </div>
      </div>
    </div>

    <script>
      const STORAGE_KEY = 'vue2-todomvc'

      const filters = {
        all: (todos) => todos,
        active: (todos) => todos.filter((todo) => !todo.completed),
        completed: (todos) => todos.filter((todo) => todo.completed),
      }

      const vm = new Vue({
        data: {
          title: 'todos',
          todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'),
          editedTodo: null,
          visibility: 'all',
        },

        watch: {
          todos: {
            handler: function (todos) {
              localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
            },
            deep: true,
          },
        },

        mounted() {
          this.onHashChange()
          window.addEventListener('hashchange', this.onHashChange)
        },

        computed: {
          filteredTodos() {
            return filters[this.visibility](this.todos)
          },

          remaining() {
            return filters.active(this.todos).length
          },

          allDone: {
            get() {
              return this.remaining === 0
            },
            set(value) {
              this.todos.forEach((todo) => (todo.completed = value))
            },
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

          editTodo(todo) {
            this.beforeEditCache = todo.text
            this.editedTodo = todo
          },

          doneEdit(todo) {
            if (!this.editedTodo) {
              return
            }
            this.editedTodo = null
            todo.text = todo.text.trim()
            if (!todo.text) {
              this.removeTodo(this.todos.indexOf(todo))
            }
          },

          cancelEdit(todo) {
            todo.text = this.beforeEditCache
            this.editedTodo = null
          },

          removeCompleted() {
            this.todos = filters.active(this.todos)
          },

          onHashChange() {
            const visibility = window.location.hash.replace(/#\/?/, '')
            if (filters[visibility]) {
              this.visibility = visibility
            } else {
              window.location.hash = ''
              this.visibility = 'all'
            }
          },
        },

        filters: {
          pluralize(n) {
            return n === 1 ? 'item' : 'items'
          },
        },

        directives: {
          'todo-focus': {
            inserted(el) {
              el.focus()
            },
          },
        },
      })

      vm.$mount('#app')
    </script>
  </body>
</html>
```
