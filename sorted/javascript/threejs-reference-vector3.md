# Threejs Vector3

## method

`lerpVectors(v1, v2, alpha): this`

- v1: starting vector
- v2: ending vector
- alpha: interpolation factor

```js
const v1 = new THREE.Vector3(0, 0, 0);
const v2 = new THREE.Vector3(1, 1, 1)
const v3 = new THREE.Vector3().lerpVectors(v1, v2, 0.8);
console.log(v3); // Vector3 { x: 0.8, y: 0.8, z: 0.8 }
```

`set(x: Float, y: Float, z: Float): this`

- set x, y, z of this vector

