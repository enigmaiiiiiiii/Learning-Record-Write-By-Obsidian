# Threejs Matrix4

## what is this

- A class representing a 4x4 matrix
- most common use of matrix4 is [transformation matrix](computer-graphics-matrices.md)

## feature

Every [Object3D] has three associated Matrix4s

- Object3D.matrix: the local transform matrix
- Object3D.matrixWorld: the global or world transform of the object
  - if no parent, matrixWorld is identical to the local matrix
- Object3D.modelViewMatrix: represents the object's transformation relative to the **camera's** coordinate system
  - modelViewMatrix = camera.matrixWorldInverse * Object3D.matrixWorld

Camera have three additional Matrix4s

- Camera.matrixWorldInverse: The View matrix
- Camera.projectionMatrix
- Camera.projectionMatrixInverse: [inverse](/sorted/Math/linear-algebra.md#inversible-matrix) of projectionMatrix

## create matrix4 instance

initialize a 4x4 [identity matrix](/sorted/Math/linear-algebra.md#identity-matrix)

```js
const matrix4 = new Matrix4();
```

## set matrix4 element

`.set(n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44)`

```js
const m = new THREE.Matrix4();
m.set(
  11, 12, 13, 14,
  21, 22, 23, 24,
  31, 32, 33, 34,
  41, 42, 43, 44
);
// equals to
m.elements = [
  11, 12, 13, 14,
  21, 22, 23, 24,
  31, 32, 33, 34,
  41, 42, 43, 44
];
```


