---
date: 2024-01-09
tags:
  - react
  - docs
---

## 描述 UI

### 组件名称必须大写开头

组件是常规的 JS 函数，但必须大写开头，否则无法运行。


### 组件 return 语句不在同一行必须添加小括号

```jsx
return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />

// or
return (
  <div>
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
  </div>
)
```

### 组件不能嵌套定义

组件可以渲染别的组件，但是不能在组件中定义组件，如果要使用父组件的数据，通过 props 传递即可，而不是嵌套定义。

### JSX 只能返回一个根元素

因为 JSX 会被转换 JS 对象，但函数不能返回多个对象（除非包到数组里面），所以 JSX 也只能返回一个根元素。

如果你不想增加一个额外的 `<div>` 标签作为根元素，可以使用 `<></>` 空标签 Fragment 代替，它不会在 HTML 结构中添加额外节点。

### JSX 标签必须闭合

自闭合标签必须有 `/`，如 `<img>` 必须写成 `<img />`。

有开始标签 `<div>` 就必须有闭合标签 `</div>`。

### 一个好用的网站

官方推荐了一个网站可以将 HTML 快速转换为 JSX：

https://transform.tools/html-to-jsx

这个网站还有 CSS 转换 Tailwind，好东西。

### props 不可更改

如果子组件的 props 需要改变，只能向父组件“请求”传递一个新的 props 对象，旧 props 将会被丢弃最后被 JS 引擎回收。

需要交互性时可以设置 state。

### 条件渲染切勿将数字放在 `&&` 左侧

JS 会自动把左侧的值转成布尔类型以判断条件是否成立，如果左侧是数字 `0`，为“假”值，此时 React 会渲染 `0` 而不是不进行渲染。

一个常见错误就是 `itemCount && <p>items</p>`，本意是 `itemCount` 为 0 时不进行渲染，实际会渲染成一个 `0`，可以用 `itemCount > 0 &&` 更正。

### 渲染数组列表一定要给上 key 值

React 会通过 key 值将组件和数组里的元素对应起来，这在数组项进行排序、插入或者删除等操作时非常重要。React 通过 key 值可以推断发生了什么，从而正确的更新 DOM 树。

尽量不要把数组的索引当做 key 值使用，实际上没有显式指定 key 值时，React 默认就是这么做的。当然如果你的数组元素不会更新可以例外。

key 值在兄弟节点中必须唯一，但不要求全局唯一。

key 值不能改变，所以不要这样 `key={Math.random()}` 在渲染时动态地生成 key。

另外，注意直接放在 `map()` 方法中的 JSX 元素一般都要指定 key 值，数组列表并不单单指 `<li>` 这种元素。

如果想要列表渲染的每一个组件都输出多个 DOM 节点，可以用 `<Fragment key={id}></Fragment>` 包裹。

> 偷懒就直接用内置函数 `crypto.randomUUID()` 生成


### 组件函数为什么会执行两次？组件函数为什么会执行两次？

组件渲染时会读取三种输入：props，state 和 context，应该始终将它们视作只读的。

如果需要根据用户输入来改变内容，应该通过 setState，而不是直接写入变量。

在组件渲染时，永远不应该改变预先存在的变量和对象（不纯）。

新创建的项目默认在“严格模式”下开发，它将会调用每个组件函数两次，来帮助找到违反以上规则的组件。


### 在渲染时可以更改“刚刚”创建的变量和对象

上文说到，组件不能改变预先存在的变量和对象，也就是组件函数作用域外的变量或是函数调用前创建的对象，这种改变的行为也被称为突变（mutation）。

但是你完全可以在作用域内做一些更改变量或对象的行为，比如：

```jsx
function TeaGathering() {
  let cups = []
  for (let i = 1; i <= 12; i++) {
    cups.push(<Cup key={i} guest={i} />)
  }
  return cups
}
```

这被称为局部突变，就像组件内部的小秘密一样。


## 添加交互


### 防止事件传播和默认行为

在 React 中所有事件都会传播，如果你想阻止一个事件到达父组件，通过事件处理函数的唯一参数调用 `e.stopPropagation()` 即可。

事件可能具有不需要的浏览器默认行为，通过调用 `e.preventDefault()` 来阻止这种情况。


### 通过捕获阶段事件埋点

极少数情况下，你可能需要捕获子元素上的所有事件，即使它们已经通过 `e.stopPropagation()` 阻止了传播，你扔可以通过在父元素事件名称末尾添加 `Capture` 来实现这一点。

如 `onClickCapture`，在子元素被点击后，它会首先执行然后向下执行所有的 `onClickCapture` 处理函数，然后执行被点击元素 `onClick` 函数，最后向上传播调用所有的 `onClick` 函数。


### Hooks 只能在组件或自定义 Hook 的顶层使用

Hooks 也就是以 `use` 开头的函数只能在顶部使用，类似于在文件顶部导入模块。

不能在条件语句、循环语句或其他嵌套函数内调用 Hook。


### 设置 state 只会在下一次渲染变更 state 的值

如果你在一个函数中调用多次 `setState()` 对 state 的值进行多次操作，你会发现每一次更改都用的是原有的 state 值，而不是你想象中的第一次修改后，第二次修改后的值。

这是因为 React 会等到事件处理函数中所有代码都运行完毕后再处理你的 state 更新，这样 React 可以批量更新多个 state，甚至多个组件的 state，不会触发太多次的重新渲染。

当然也有办法在下一次渲染前多次更新 state，你可以像 `setNumber(n => n + 1)` 这样传入根据当前 state 计算下一个 state 的函数，而不是 `setNumber(n + 1)` 这样传入下一个 state 值。

React 会将所有更新函数加入队列，在下一次渲染期间调用 `useState` 时，遍历队列，逐个获取上一个函数的返回值，得到最终的 state 值。


### 将所有存放在 state 的中的对象视为只读的

每次更新对象时，需要创建一个新的对象传给 setState 函数，这样才能真正地触发一次重新渲染。

仅更新一个字段时，灵活使用对象展开语法：

```jsx
setPerson({
  ...person, // 复制其它字段的数据 
  artwork: { // 替换 artwork 字段 
    ...person.artwork, // 复制之前 person.artwork 中的数据
    city: 'New Delhi' // 但是将 city 的值替换为 New Delhi！
  }
})
```

或者使用 Immer.js 来打破规则，保持代码简洁：

```jsx
const [person, updatePerson] = useImmer({ ... })

// 通过 Proxy 代理修改对象
updatePerson(draft => {
  draft.artwork.city = 'Lagos'
})
```

数组在 JS 中是另一种对象，所以同理，每次更新数组时，你需要把一个新的数组传给 setState 函数。

|数组操作| 推荐使用函数 |
|--|--|
|添加元素| `concat`, `[...arr]`|
|删除元素| `filter`, `slice` |
|替换元素| `map` |
|排序| 先拷贝一个，然后 `reverse`, `sort` |
|拷贝| `[...arr]`, `slice` |


### 通过动态属性同时更新多个字段

```jsx
function handleChange(e) {
  setPerson({
    ...person,
    [e.target.name]: e.target.value
  })
}
```

## 状态管理

### 构建 state 的原则

> “Make your state as simple as it can be—but no simpler.”

1. 合并关联的 state：如果总是同时更新两个或更多的 state，考虑将它们合并成一个单独的 state
2. 避免互相矛盾的 state：避免 state 结构中存在多个相互矛盾或“不一致”的 state
3. 避免冗余的 state：如果能从 props 或现有的 state 变量中计算出来就不应该创建新的 state
4. 避免重复的 state：如果同一数据在多个 state 变量或多个嵌套对象中重复时，会很难保持同步，所以尽量减少重复
5. 避免深度嵌套的 state：深度分层的 state 更新不方便，尽量扁平化


### 使用“状态提升”在组件中共享状态

找到共同父组件，将相关 state 移到父组件中，父组件再通过 props 将 state 传递下去，这就叫做状态提升。

继续向下传递事件处理程序，以便子组件可以改变父组件的 state。


### 相同位置相同组件保留 state

React 通过组件在渲染树中的位置将它保存的每个 state 与正确的组件关联起来。

是的，状态由 React 保存而不是组件保存。只有在**树中相同的位置渲染相同的组件**时，React 才会一直保留着组件的 state，重点是组件树中的相同位置，而不是 JSX 中的位置。


### 使用 key 值重置 state

相同位置相同组件会保留 state，有时候你可能会想重置组件的 state，第一种方法就是将组件渲染在不同的位置。

第二种方法是使用 key 值，赋给组件不同的 key 值会让 React 将 key 值本身看作组件位置的一部分，而不是基于组件在父组件中的顺序。


### 状态更新逻辑过多时使用 useReducer 优化

简单来说，使用 `useReducer` 来替换 `useState`，事件处理函数不再通过设置状态来告诉 React 做什么，而是通过 dispatch 一个 action 对象来说明用户刚才做了什么，然后通过一个统一的 reducer 函数根据用户做了什么来得到下一个状态。

```jsx
const [state, dispatch] = useReducer(reducer, initialState)

function handleStateUpdate() {
  dispatch({
    type: 'action_type',
    ...
  })
}

function reducer(currentState, action) {
  switch(action.type) {
    case 'action_type': {
      return nextState
    }
    ...
  }
}
```

简化版如上，具体还是看[文档](https://zh-hans.react.dev/learn/extracting-state-logic-into-a-reducer)。

### 状态提升到太高层级时使用 useContext 优化

简单来说，context 可以让父节点给内部的整个组件树提供数据。

- 首先 `export const MyContext = createContext(defaultValue)` 创建并导出一个 context
- 然后在父组件中提供这个 context，用一个 `<MyContext.Provider value={...}>` 包裹 children
- 最后就可以在父组件内组件树上的任意组件内使用 `useContext(MyContext)` 来读取它。

具体看[文档](https://zh-hans.react.dev/learn/passing-data-deeply-with-context)，还有 [使用 Reducer 和 Context 拓展你的应用](https://zh-hans.react.dev/learn/scaling-up-with-reducer-and-context) 这篇也很有用。

另外因为 [应急方案 ](https://zh-hans.react.dev/learn/escape-hatches) 章节里的每一篇感觉都值得出一个文章细说，所以这篇文章就在这里结束吧。
