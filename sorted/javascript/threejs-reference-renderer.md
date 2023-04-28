# Threejs Renderer

* [Feature](#feature)
* [Renerer Object](#renerer-object)
* [Render Target](#render-target)
* [Create Renderer](#create-renderer)
* [Render Scene](#render-scene)
* [render multiple viewports](#render-multiple-viewports)
* [encoding](#encoding)

## Feature

- renderer will create a canvas element

## Renerer Object

[WebGLRenderer](threejs-webglrenderer.md)

[WebGL1Renderer](threejs-webgl1renderer.md)

[WebGL3DRenderer](threejs-webgl2renderer.md)

[WebGLArrayRenderer](threejs-webglarrayrenderer.md)

## Render Target

> a [render target](threejs-reference-rendertarget.md) is a texture you can render to

- render target is where to render the scene
- default is the **canvas element**
- can be set by `setRenderTarget(tg)`
  - if `tg` is `null`, render on canvas element

```js
const rtg = new THREE.WebGLRenderTarget(512, 512);
renderer.setRenderTarget(rtg);
renderer.render(fooScene, fooCamera);
```

- then the scene will be rendered on the `rtg`, not the canvas element

## Create Renderer

```js
const renderer = new THREE.WebGLRenderer();
```

## Render Scene

```js
renderer.render(fooScene, fooCamera);
```

- render `fooscene` that shoot by the `fooCamera` on the [**target**](#render-target)


## render multiple viewports

- set `autoClear` to `false` to prevent the renderer from clearing the canvas automatically

## encoding

- it's common to set `renderer.outputEncoding` to [`THREE.sRGBEncoding`](threejs-reference-color.md#encoding-constant) when [load outside model](threejs-loading-3d-model.md)

```js
const renderer = new THREE.WebGLRenderer();
renderer.outputEncoding = THREE.sRGBEncoding;
```
