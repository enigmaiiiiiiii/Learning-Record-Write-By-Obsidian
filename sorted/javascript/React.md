# React

## 使用

使用\<script>标签引入React

- to be add

React工具链

```shell
npx create-react-app my-app
```

## React.Component

1. 在index.js中创建组件


```js
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

// 使用: <ShoppingList name="Mark" />
```

此时

- ShoppingList 是一个 React 组件类
- 组件接收一些参数，参数被称为 props

```jsx
<ShoppingList name="mark" id="4529"/>
```

- props的值为{ name: "mark", id: "4529" }

Render方法

- 表示展示在屏幕上的内容, ~~~隐式调用~~~

与上面代码return语句等价的代码: 

```js
return React.createElement(
  "div",
  { className: "shopping-list" },
  React.createElement("h1", null, "Shopping List for ", this.props.name),
  React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Instagram"),
    React.createElement("li", null, "WhatsApp"),
    React.createElement("li", null, "Oculus")
  )
);
```

jsx语法

- `<div />`等价于`React.createElement('div')`
- `<shopping-list />`