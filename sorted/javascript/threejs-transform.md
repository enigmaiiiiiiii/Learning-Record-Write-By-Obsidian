# Threejs Transform

* [translate position](#translate-position)
* [Rotate with matrix4](#rotate-with-matrix4)
* [Rotate With Property Position](#rotate-with-property-position)

## translate position

[how to implement position translate](/sorted/ComputerGraphics/computer-graphics-matrices.md#only-translate-on-position)

```js
const matrix = new THREE.Matrix4();
matrix.set(
  1, 0, 0, 3,
  0, 1, 0, 0,
  0, 0, 1, 0,
  0, 0, 0, 1,
);
mesh.applyMatrix4(matrix);
```

this code will translate the mesh 3 units along x axis, equal to

```js
mesh.position.x += 3;
```

## Rotate with matrix4

[rotate](computer-graphics-rotate.md) around x axis

```js
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshNormalMaterial();
const mesh = new THREE.Mesh(geometry, material);
const matrix = new THREE.Matrix4();
const angle = Math.PI / 3;
matrix.set(
  1, 0, 0, 0,
  0, Math.cos(angle), -Math.sin(angle), 0,
  0, Math.sin(angle), Math.cos(angle), 0,
  0, 0, 0, 1
);
mesh.applyMatrix(matrix);
```

## Rotate With Property Position

- around z axis

```js
mesh.rotation.x += Math.PI / 3;
mesh.rotation.y += Math.PI / 3;
```

## Scale

```js
matrix.set(
  2, 0, 0, 0,
  0, 2, 0, 0,
  0, 0, 2, 0,
  0, 0, 0, 1
);
mesh.applyMatrix(matrix);
```

equal to

```js
mesh.scale.set(2, 2, 2);
```
