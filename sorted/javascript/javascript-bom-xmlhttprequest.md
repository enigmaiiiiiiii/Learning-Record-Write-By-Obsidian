# Javascript - XMLHttpRequest

## What's This

- allow page to update without reloading the page
- plenty use for AJAX programming

problem

- in browser you can type address in address bar and press enter to get a page
- how to use javascript to do this? use XMLHttpRequest

XMLHttpRequest

- Object used to interact with servers
- heavily used in [AJAX](web-dev-ajax.md) programming

## Take A Look

```js
function reqListener() {
    console.log(this.responseText);
}
const httpRequest= new XMLHttpRequest();
httpRequest.onreadystatechange = reqListener;
httpRequest.open("GET", "http://example.org/example.txt");
httpRequest.send();
```

- `open()` initialize a request
- `send()` send request
- `onreadystatechange` event handler

## property

## method
