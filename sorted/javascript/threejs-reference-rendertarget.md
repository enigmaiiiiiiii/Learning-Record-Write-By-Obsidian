# Threejs RendererTarget

## what is render target

- is a [texture](threejs-reference-texture.md) you can render to
- after rendering, you can use that texture like any other texture
- postprocessing to render a scene before it is displayed

## Contructor

`WebGLRenderTarget(width, height, options)`;

- width
- height
- options:
  - ...

## use on material

```js
const rtg = new THREE.WebGLRenderTarget(512, 512);
const material = new THREE.MeshBasicMaterial({
  map: rtg.texture
});
```