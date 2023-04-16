# WebGLRender

* [Contructor](#contructor)
* [properties](#properties)
* [create a renderer](#create-a-renderer)
* [render a scene](#render-a-scene)

## Contructor

```js
WebGLRenderer(parameters);
```

parameters: object with properties defining the renderer's behaviour

- object valid properties
  - canvas: where the renderer draws its output, create a new canvas element

## Properties

- domElement: a **canvas element**

## Create A Renderer

```js
const renderer = new THREE.WebGLRenderer();
```

## Render A Scene

```js
renderer.render(fooScene, fooCamera);
```

- render picture that shoot by the `fooCamera` on the `fooScene`

## Method

`setRenderTarget(renderTarget, activeCubeFace, activeMipmapLevel)`

- set [render target]()
- parameters
  - renderTarget: a [render target](threejs-reference-renderertarget.md)
  - activeCubeFace:
  - activeMipmapLevel

`readRenderTargetPixels(renderTarget, x, y, width, height, buffer, activeCubefaceIndex)`

- read pixel data from render target into buffer
- parameters
  - renderTarget
  - x
  - y
  - width
  - height
  - buffer
  - activeCubefaceIndex