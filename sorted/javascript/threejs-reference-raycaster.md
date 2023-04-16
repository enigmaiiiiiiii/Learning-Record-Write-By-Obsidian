# Threejs Raycaster

## what is for

- for mouse picking

## set raycast origin

`setFromCamera(mouse, camera)`

- mouse: mouse position
  - in **normalized** device coordinates (NDC)
  - x and y are between -1 and 1
- camera: camera originate the ray

## check intersection with single object

`intersectObject(object, recursive, optionalTarget)`

- object: the object to check for intersection
- recusive: boolean, check all descendants of the object, default true
- optionalTarget: ~~set the optional result~~

return an array of intersection info

```js
[{ distance, point, face, faceIndex, object }, ...]
```

- `distance`: distance from the origin of the ray and the intersection
- `point`: the point of intersection
- `face`: intersected face
- `faceIndex`: index of the intersected face
- `object`: the object that was intersected
- `uv`: uv coordinates of the intersection point on the face
- `uv2`
- `normal`:
- `instanceId`:


```js
const raycaster = new THREE.Raycaster();
const intersect = raycaster.intersectObjects(scene.children);
```

## check intersection with multiple objects

`intersectObjects(objects, recursive, optionalTarget)`

- objects: array of objects to check for intersection
- recusive:
- optionalTarget:

