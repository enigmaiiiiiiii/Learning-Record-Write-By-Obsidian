# WebGLRender

* [Contructor](#contructor)
* [Properties](#properties)
* [Methods](#methods)

## Contructor

```js
WebGLRenderer(parameters);
```

parameters: object with properties defining the renderer's behaviour

- object valid properties
  - canvas: where the renderer draws its output, create a new canvas element

## Properties

- domElement: a **canvas element**
- autoClear: Defines whether the renderer should automatically clear its output

> it's useful to set false if render sperate viewport from different camera on the same canvas

## Methods

`render(scene, camera)`

`setRenderTarget(renderTarget, activeCubeFace, activeMipmapLevel)`

- set [render target]()
- parameters
  - renderTarget: a [render target](threejs-reference-renderertarget.md)
  - activeCubeFace:
  - activeMipmapLevel

`readRenderTargetPixels(renderTarget, x, y, width, height, buffer, activeCubefaceIndex)`

- read pixel data from render target into buffer
- parameters
  - renderTarget: 
  - x: x coordinate of the left top corner of the area to read
  - y: y coordinate of the left top corner of the area to read
  - width: width of the area to read
  - height: height of the area to read
  - buffer
    - read pixel data into buffer
    - `Uint8Array` type is supported in all cases
  - activeCubefaceIndex
