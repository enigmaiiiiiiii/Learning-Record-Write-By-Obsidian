# Threejs Box3

- represent a bounding box 3d space

## Create A Box

set from Object

```js
const box = new Box3().setFromObject(object);
```

- `object` is a [Object3D](threejs-reference-object3d.md) instance

Use Constructor

`Box3(min: Vector, max: Vector)`

## Size

`getSize(target: Vector3): Vector3`

- return the [vector3](threejs-reference-vector3.md) representing the size of the box
- respectively are **width, height, depth**
- result will also store in target

## Center

`.getCenter(target: Vector3): Vector3`

- return the center of the box and copied into `target`
