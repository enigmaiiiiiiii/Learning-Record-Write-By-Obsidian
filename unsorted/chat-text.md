rewrite this code use typescript

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