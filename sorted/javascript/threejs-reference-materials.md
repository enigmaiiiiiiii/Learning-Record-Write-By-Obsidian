# Threejs Materials

## what is it

- define the appearance of an 3D Object, for example
  - color
  - reflectivity
  - transparency
- determine how light is interacts with the surface

## Common Properties

map

- [texture](threejs-reference-texture.md) to be applied to the surface

opacity

- how transparent is
  - range of 0.0 ~ 1.0
  - when transparent is false, material fully opaque, value is ignore

transparent: boolean

- whether material is transparent
- default is false
- not effect on its [emissive color](threejs-reference-meshphongmaterial.md#properties)

blending: Blending constant

- how material is blended with the background
  - THREE.NoBlending
  - THREE.NormalBlending
  - THREE.AdditiveBlending: rgb value is **added** to the background rgb
  - THREE.SubtractiveBlending: rgb value is **subtracted** from the background rgb
  - THREE.MultiplyBlending
  - THREE.CustomBlending

## MeshBasicMaterial

```js
const material = new THREE.MeshBasicMaterial({
  color: 0x44aa88,
  map: texture,
  transparent: true,
  opacity: 0.5,
  blending: THREE.AdditiveBlending
});
```

## MeshNormalMaterial

## MeshPhongMaterial

[threejs-reference-materials.md](threejs-reference-meshphongmaterial.md)

## MeshLambertMaterial

