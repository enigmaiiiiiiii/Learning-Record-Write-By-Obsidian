# WebGLRender

## Contructor

```js
WebGLRenderer(parameters);
```

parameters: object with properties defining the renderer's behaviour

object valid properties

- canvas: where the renderer draws its output, create a new canvas element

## properties

- domElement: a canvas element

## create a renderer

```js
const renderer = new THREE.WebGLRenderer();
```

## render a scene

```js
renderer.render(fooScene, fooCamera);
```

- render picture that shoot by the `fooCamera` on the `fooScene`
