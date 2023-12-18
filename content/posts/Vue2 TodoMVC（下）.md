---
title: Vue2 TodoMVC (2)
tags:
  - vue
  - todomvc
date: 2023-08-16
---


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
