# Electron - Context Isolation

## What It Is

- An isolation between [preload.js](electron-process-model.md#preloadjs) and **web page**, such as html, react, in separate context
- which means it prevents **web page** from accessing **electron API** and `preload.js`

> where `preload.js` is a script that runs in the **renderer process**
> this isolation is enabled by default since electron 12

## Expose API To Web Page

with [`contextBridge`](electron-module.md#renderer-process-modules)

- [`preload.js`](electron-process-model.md#preloadjs)

```js
const { contextBridge } = require('electron')
contextBridge.exposeInMainWorrld('myAPI', {
    doAThing: () => {}
})
```

- `render.js`

```js
window.myAPI.doAThing()
```

## Take Care In TypeScript


