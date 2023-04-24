# three.js Object3D

## what is this

- base class for all objects in three.js
- mostly use as a parent of a model

```
root
 ├─*no-name*[CameraHelper]
 ├─*no-name*[CameraHelper]
 ├─cameraRig[Group]
 | ├─*no-name*[PerspectiveCamera]
 | ├─*no-name*[OrthographicCamera]
 | └─mesh3[Mesh]
 ├─*no-name*[Mesh]
 | └─*no-name*[Mesh]
 └─*no-name*[Points]
```

## properties

parent

- Object's parent in [scene graph](threejs-fundamentals.md#scene-graph)

children

- Array of children

name

- name an Object, Default is an empty string.

position: [Vector3]()

- A vector3 representing the object's local position
- default is `(0, 0, 0)`
- `copy(vector3)`
- `set(x: Float, y: Float, z: Float)`

rotation: [Euler]()

```js
cube.rotation.set(x, y, z);
```

- Object's local rotation
- `set(x: Float, y: Float, z: Float);`
- `copy(euler: Euler);`

scale

- Object's local scale

## Methods


