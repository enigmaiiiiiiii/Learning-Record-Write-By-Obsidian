# Electron - Inter-Process Communication

## What It Is 

> Key Of Communication Between Main Process And Render Process

- Let an application use nodejs api by interacting with ui, such as
  - ...

## IPC channels

- [ipcMain]() 
- [ipcRenderer]()

## Renderer To Main

**[main.js]()**

```js
import { app, BroserWindow, ipcMain } from 'electron'

// ...
function createWindow() {

    // ...
    ipcMain.on('test', (event, msg) => {
        console.log(msg)
    })
}
//...
```

- set listener for specific event channel with `ipcMain.on`
- event handler takes two arguments
  - `event`: [IpcMainEvent]() object
  - `msg`: object or string sent from render process

**[preload.js](electron-process-model.md#preloadjs)**

```js
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
    foo: (msg) => ipcRenderer.send('test', msg)
})
```

- Add properties to `window` and expose to [render.js](electron-process-model.md#renderer-process)
- Trigger Event listened by main process

**[render.js](electron-process-model.md#renderer-process)**

```js
document.getElementById('btn').addEventListener('click', () => {
    window.electronAPI.foo('hello')
})
```

- Leveraging [`window`](javascript-bom-window.md) to interact with [preload.js] 
