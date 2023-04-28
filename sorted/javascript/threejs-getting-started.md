# Getting started of Three.js

* [Display Something](#display-something)
* [Binding renderer to DOM](#binding-renderer-to-dom)
* [animate](#animate)

## Display Something

to actually to display anything with three.js, we need three things: 

- scene
- camera
- renderer

## Camera

```js
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,  // field of view
  window.innerWidth / window.innerHeight,  // aspect ratio
  0.1,  //
  1000
);
```

- PerspectiveCamera(fov, aspect, near, far)
  - fov: field of view, value is in degrees(单位 is degrees)
  - aspect: width / height
  - near: objects closer than `near` won't be rendered
  - far: objects further than `far` won't be rendered

## Scene

```js
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;
```

## Renderer

> pencil of threejs

create on existed [canvas](javascript-dom-htmlcanvaselement.md)

```js
const canvas = document.querySelector('#three');
const renderer = new THREE.WebGLRenderer({ canvas });
```

- `canvas` is optional, if not provided, it will create a new one

Add as child of DOM after Create

```js
const element = document.querySelector('#three');
element.appendChild(renderer.domElement);
```

To React Component

```js
export default function Foo() {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.appendChild(renderer.domElement);
  }, []);

  return <div ref={ref} />;
}
```

## Render A Scene

```js
renderer.render(scene, camera);
```

- `renderer` will render the `scene` shoot by the `camera`

## Animate

```js
function animate() {
  requestAnimataionFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}

animate();
```

> here is the explaination [requestAnimationFrame()](javascript-bom-window.md#requestanimationframecallback)

## light

for MeshPhongMaterial, **need light**

```js

const light = new THREE.PointLight(0xffffff, 1, 100);
scene.add(light);
```