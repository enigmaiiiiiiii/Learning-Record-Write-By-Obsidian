# Threejs BufferGeometry

## what is this

- representation of mesh, line, or point gemoetry
- includes vertex positions, face indices, normals, colors, UVs
- reducing the cost of passing all this data to the cpu
- use [BufferAttribute](threejs-reference-bufferattribute.md) to read and edit data

## Read And Edit Data In BufferGeometry

```js
const geometry = new THREE.BufferGeometry();
const vertices = new Float32Array([
  -1.0, -1.0, 1.0,
  1.0, -1.0, 1.0,
  1.0, 1.0, 1.0,

  -1.0, -1.0, 1.0,
  -1.0, 1.0, 1.0,
  -1.0, -1.0, 1.0,
])

geometry.setAttribute(
  'position',
  new THREE.BufferAttribute([vertices, 3]),
)
const material = new THREE.MeshBasicMaterial( { color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
```

## Method

`applyMatrix4(matrix: Matrix4)`

- Applies `matrix` to every vector3 element of the BufferAttribute

