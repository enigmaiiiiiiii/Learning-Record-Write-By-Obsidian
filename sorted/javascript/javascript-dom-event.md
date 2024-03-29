# JavaScript - Event

* [what it is](#what-it-is)
* [Properties](#properties)
* [Method](#method)
* [Handle Event](#handle-event)
* [prevent pointer event](#prevent-pointer-event)
* [constructor](#constructor)
* [Event Objects Based on Event Interface](#event-objects-based-on-event-interface)

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

## prevent pointer event

[pointer-events style](/sorted/webdev/css-properties-list.md#pointer-events)

## constructor

Event():

- Constructor of Event object

## Event Objects Based on Event Interface

[KeyboardEvent](javascript-keyboardevent.md)

