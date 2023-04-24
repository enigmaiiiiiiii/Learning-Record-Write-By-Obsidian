# Threejs Fundamentals

![threejs](/image/threejs-structure.svg)

* [Summerize](#summerize)
* [Renderer](#renderer)
* [Scene Graph](#scene-graph)
* [Camera](#camera)
* [Mesh](#mesh)
* [Geometry](#geometry)
* [Material](#material)
* [Texture](#texture)
* [Light](#light)
* [Animate](#animate)
* [Render Target](#render-target)

## Summerize

view part

- [ scene ](#scene-graph)
- [ camera ](#camera)
- [ renderer ](#renderer)

object part

- [ geometry ](#geometry)
- [ material ](#material)
- [ texture ](#texture)
- [ light ](#mesh)

Animate part

- [requestAnimation](javascript-bom-window.md#requestanimationframe)

## Renderer

[renderer](threejs-reference-renderer.md)

- render camera view as a 2D image to a canvas

resolution

- renderer method `setSize()` will set the number of pixels in the canvas
- if `setSize(width, height)` with no `false` argument, the canvas element will be resized
- but mostly we want use css determine the size of element
- so pass `false` to `setSize(width, height, false)` to prevent the canvas from being resized
- if the size is already what we want,we should avoid calling `setSize()`

```js
const needResize = canvas.clientWidth !== canvas.width || canvas.clientHeight !== canvas.height;
```

HD-DPI

- HD-DPI devices have 9x pixels for every pixels in non-HD-DPI devices
- use `renderer.setPixelRatio()` is **not recommended**
- to always know what the size being used. the other way is to do it yourself 

```js
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const pixelRatio = window.devicePixelRatio;
  const width = canvas.clientWidth * pixelRatio | 0;
  const height = canvas.clentHeight * pixelRatio | 0;
  const needResize = canvas.width !== width || canvas.height ! == height
  if (needResize) {
    renderer.setSize(width, height, false);
  }
  return needResize;
}
```

## Scene Graph

- tree-like structure
- [`scene`](threejs-reference-scene.md) object defines the root of the tree
- children are positioned and oriented relative to their parent
- consist of
  - multiple Mesh
  - multiple Light
  - multiple Group
- `camera` can be is half in half out

## Camera

## Mesh

- drawing a specific `geometry` with a specific `material`
- both `material` and `geometry` objsects can be used by multiple `Mesh`

```js
const boxWidth = 1;
const boxHeight = 1;
const boxDepth = 1;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry. material);
```

## Geometry

- vertex data like sphere, cube, plane, dog, cat, etc

## Material

- **surface** properties used to draw the geometry

```js
const material = new THREE.MeshBasicMaterial({
  color: 0x44aa88
})
```

built-in materials

- MeshBasicMaterial: not affected by light
- MeshPhongMaterial: computes lighting at every pixel
- MeshLambertMaterial: computes lighting only at the [vertices](webgl.md#vertex)
- MeshNormalMaterial: use **vectors** to determine color for each pixel
  - x is red
  - y is green
  - z is blue

```js
const material = new THREE.MeshBasicMaterial({
  // ... properties
})
```

## Texture

- **image** data used to draw the geometry

## Light

- light source

```js
const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(
  color,
  intensity
);
light.position.set(-1, 2, 4);
scene.add(light);
```

## Animate

```js
function render(time) {
  time *= 0.001; // convert time to seconds

  cube.rotation.x = time;
  cube.rotation.y = time;

  renderer.render(scene, camera);

  requestAnimationFrame(render);
}
```

## Render Target
