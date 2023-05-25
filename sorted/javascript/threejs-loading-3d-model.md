# Threejs Loading 3d Model

* [Recommend File Format](#recommend-file-format)
* [loader](#loader)

## Recommend File Format

- glTF: GL Transmission Format
  - .GLB
  - .GLTF

## loader

```js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

loader.load(

  // resource URL
  '/donut.gltf',
  // called when the resource is loaded
  (gltf) => {
    scene.add( gltf.scene );
  },

  // called while loading is progressing
  function ( xhr ) {
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  },

  // called when loading has errors
  function ( error ) {
    console.log( 'An error happened' );
  }
);
```
