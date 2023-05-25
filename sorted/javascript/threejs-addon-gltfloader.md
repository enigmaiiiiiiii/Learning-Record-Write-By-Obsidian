# ThreeJS Addon - Loadder

`load(url: string, onLoad: Function, onProgress: Function, onError: Function);`

- `url`:
- `onLoad`: function called after loading successfully
- `onProgress`: function called while loading
  - optional
  - argument is [`XMLHttpRequest`](javascript-bom-xmlhttprequest.md) instance
  - with additional `total` and `loaded` properties
- `onError`
