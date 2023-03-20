# Event

- [what it is](#what-it-is)
- [Properties](#properties)
- [Method](#method)
- [Handle Event](#handle-event)
- [constructor](#constructor)
- [Event Object Based on Event Interface](#event-object-based-on-event-interface)

## what it is

## Properties

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

## Method

Event.preventDefault()

- prevent default action

## Handle Event

handle keyboard event

```js
document.onkeydown = function(e) {
  if (e && e.keyCode == 27) {
    // things to do when ESC key is pressed
  }
  if (e && e.keyCode == 113) {
    // things to do when F2 key is pressed
  }
  if (e && e.keyCode == 13) {
    // thing to do when enter key is pressed
  }
};
```

## constructor

Event():

- Event对象的构造函数


## Event Object Based on Event Interface

> keyboard event as a example

property

- KeyboardEvent.key: 按键的值