# Threejs CatmullRomCurve3

- create smooth 3d spline curve from a series of points

```js
CatmullRomCurve3(
  points: Array[Vector3],
  closed: boolean,
  curveType: String,
  tension: Float
): boolean
```

- points: array of Vector3
- closed: whether the curve is closed
- curveType: type of curve
  - centripetal
  - chordal
  - catmullrom
- tension: default 0.5

