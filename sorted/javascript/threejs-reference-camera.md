# three.js Camera

## what is this

- abstract base class for all cameras

## Cube Camera

## Orthographic Camera

Orthographic projection

- all object shown at the **same scale**, **regardless of distance**
- can **accurately** represent object's **size** and **shape**
- suitable for **2D** game art, and **architectural** and **drawing** design

Constructor

- `OrthographicCamera( left, right, top, bottom, near, far )`
  - left, right, top, bottom: **view frustum** plane
  - near, far: object outside this range will not be rendered

## Perspective Camera

Perspective projection

- mimic the way the **human eye** sees
- suitable for **realistic** and **natural-looking** rendering

constructor

- `PerspectiveCamera( fov, aspect, near, far )`
  - fov: field of view
  - aspect: aspect ratio
  - near, far: object outside this range will not be rendered

feature

- anything inside the definded frustum will be drawn. anything outside will not
- `updateProjectionMatrix()` must be called after any change of parameters
