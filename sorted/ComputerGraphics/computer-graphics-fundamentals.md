# Fundamentals

* [Vertex](#vertex)
* [mesh](#mesh)
* [UV mapping](#uv-mapping)
* [Orthographic projection](#orthographic-projection)
* [Perspective projection](#perspective-projection)
* [Viewing Frustum(视锥体)](#viewing-frustum视锥体)
* [Alpha Test](#alpha-test)
* [gamma correction](#gamma-correction)

## Vertex

- a point in 3D space
- represents a specific point on on a polygon or a [mesh](#mesh)
- vertex typically has properties such as **position**, **color**, **texture**

> vertices is plural(复数) of vertex

## mesh

- mesh is a collectoin of [vertices](#vertex), edges and faces

## UV mapping

- a process of projecting(转换/投影) 2D image onto a 3D model's surface
- U, V denote X, Y
- helps to apply textures to 3D models

## Orthographic projection

- all object shown at the **same scale**, **regardless of distance**
- can **accurately** represent object's **size** and **shape**
- suitable for **2D** game art, and **architectural** and **drawing** design

## Perspective projection

- mimic the way the **human eye** sees
- suitable for **realistic** and **natural-looking** rendering

## Viewing Frustum(视锥体)

## Alpha Test

- a technique to **reduce** the number of **pixels** that need to be **rendered**
- use pixels alpha value to determine whether to render it or not
- which can avoiding the performance overhead, for example
  - leaves on a tree
  - window on a building

## gamma correction

- is the process of **adjusting the brightness of images or videos**
- to compensate for the human eye's **non-linear** perception of color and light
- without gamma correction, images or videos appear **too dark** or **too bright** on different devices
