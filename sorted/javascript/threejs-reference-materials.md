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

blending: Blending constant

- how material is blended with the background
  - THREE.NoBlending
  - THREE.NormalBlending
  - THREE.AdditiveBlending: rgb value is **added** to the background rgb
  - THREE.SubtractiveBlending: rgb value is **subtracted** from the background rgb
  - THREE.MultiplyBlending
  - THREE.CustomBlending

## MeshBasicMaterial


## MeshNormalMaterial

## MeshPhongMaterial

- a material that computes lighting on every pixel

properties

- emissive: a [color](threejs-reference-color.md) value, represent the material color affected by light
  - default is black

> object apperence color is the **combination** of emissive color and metarial color

## MeshLambertMaterial

