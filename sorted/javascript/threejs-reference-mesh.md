# mesh

- representing polygon mesh object

## Contructor

`Mesh(geometry: BufferGeometry, material: Material)`

- [geometry](threejs-reference-geometry.md)
- [material](threejs-reference-materials.md)

## Properties

isMesh: boolean

receiveShadow

- Whether the material receives shadows
- default is false

castShadow

- Whether the object gets rendered into shadow map
- Default is false

## Method

`applyMatrix4(matrix: Matrix4)`

- apply matrix transform to the object

