# Godot - Physics

* [Reference Classes](#reference-classes)
  * [CollisionObject2D](#collisionobject2d)
  * [Shape2D](#shape2d)
  * [CollisionShape2D](#collisionshape2d)
  * [CollisionPolygon2D](#collisionpolygon2d)
* [4 Kinds Of Collision Objects](#4-kinds-of-collision-objects)

## Conclusions

- Without [shape](), collision object will not collide or interact with other objects
- But the signal related to collision like `body_entered` is not part of the shape, it's part of the collision object

## Reference Classes

### CollisionObject2D

- Abstract base class for 2D physics objects

### Shape2D

- For adjusting the shape of object and detect contact with other objects
- Can be hold any numbers by A physics body
- Not A Node

### CollisionShape2D

- A **node** that provides a [shape2D](#shape2D) to a [CollisionObject2D](#CollisionObject2D)

### CollisionPolygon2D

- A node that provide a polygon shape to a [CollisionObject2D](#CollisionObject2D)

## 4 Kinds Of Collision Objects

Godot offers 4 kinds of collision objects which all extend [CollisionObject2D](#CollisionObject2D)

- Area2D
- StaticBody2D
- RigidBody2D
- CharacterBody2D

