# dispose Object in threejs

* [why dispose](#why-dispose)
* [how to dispose](#how-to-dispose)
* [when to dispose](#when-to-dispose)
* [Create A Cleanup Class](#create-a-cleanup-class)

## why dispose

- A 3D model might be 1 to 20 meg
- textures use compressed jpg file will expand uncompressed form to used
- most three.js apps load resources at init time and use those resources forever until page closed
- threejs **not automatically released**

## how to dispose

- calling `dispose()` function on
  - texture
  - material
  - geometries
  - materials

## when to dispose

[ Geometries ](threejs-geometry.md)

- a geometry becomes obsolete in your application

[ Materials ](threejs-materials.md)

- all related materials are disposed

[ Textures ](threejs-textures.md)

- [ ]

Render Targets

- [ ]

## Create A Cleanup Class

- recursively track all resources in an object

```ts
class ResourceTracker {

  resources: any[];

  constructor() {
    this.resources = new Set();
  }

  // recursively track all resources in an object
  track(resource) {

    if (!resource) {
      return resource;
    }

    if (Array.isArray(resource)) {
      resource.forEach(resource => this.track(resource));
      return resource;
    }

    if (resource.dispose || resource instanceof THREE.Object3D) {
      this.resources.add(resource)
    }

    if (resource instanceof THREE.Object3D) {
      this.track(resource.geometry);
      this.track(resource.material);
      this.track(resource.children);
    } else if (resources instanceof THREE.Material) {
      for (const value of Object.values(resource)) {
        if (value instanceof THREE.Texture) {
          this.track(value);
        }
      }

      if (resource.uniforms) {
        for (const value of Object.values(resource.uniforms)) {
          if (value) {
            const uniformValue = value.value;
            if (uniformValue instanceof THREE.Texture ||
                Array.isArray(uniformValue)) {
              this.track(uniformValue);
            }
          }
        }
      }
    }
    return resource;
  }

  untrack(resource) {
    this.resources.delete(resource);
  }

  dispose() {
    for (const resource of this.resources) {
      resource.dispose();
    }
    this.resources.clear();
  }
}
```

- for most loaders only return an [Object3D](threejs-reference-object3d.md) as a root
- so we need to recursively track all resources in an object
