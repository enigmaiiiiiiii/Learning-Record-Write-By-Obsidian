# Event Interface

## constructor

Event():

- Event对象的构造函数

## properties

Event.bubbles

Event.type: event type

Event.target:

- most common target: [Element](), as well as Document, Window

```html
<div>
  <input class="demo">
<div>
```

```js
const inputElement = document.querySelector('.demo')
inputElement.addEventListener('change', (e) => {
  console.log(e.target);  // <input class="demo">
  console.log(e.target.value);
})
```