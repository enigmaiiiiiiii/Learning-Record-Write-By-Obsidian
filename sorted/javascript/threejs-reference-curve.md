# Threejs Curve

- absract base class for creating curves

## Method

`getPoints(divisions:Integer): Array`

- divisions: number of pieces to divide the curve into

`getPointAt(u: float, optionalTarget: Vector):Vector`

- u: position on the curve, must be [0, 1]
- optionalTarget: if provided, the result will be copied into this Vector
- return the the given position on the curve
  - return value use to create a variable
  - if want to give a new position to a variable, pass the variable as the second argument
