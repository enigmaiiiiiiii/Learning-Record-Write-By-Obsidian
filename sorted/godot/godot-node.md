# Godot - Node

## What It Is

- inherit from `Object`
- constitute the [scene](#scene)

A Node Looks Like:

```
Player
├── Camera2D
├── Sprite2D
└── CollisionShape2D
```

> nodes and [scenes](#scene) are look the same in editor

## enter tree

- when a node is added to the scene tree, the **scene** receives `NOTIFICATION_ENTER_TREE` [notification]()
- `_enter_tree` callback is triggered
- child node will be added after their parent
- `_enter_tree` triggered order: parent → child

## enter ready

- Once all nodes have been added in the scene, the **nodes** receives `NOTIFICATION_READY` [notification]()
- `_ready` callback are triggered
- `_ready` triggered order: child → parent

## handle input

- `_input` can be called for each input that the program receives, this is overkill for many case
- `_unhandled_input` function is called when the input event was not handled by any one else

## Features

- All Node have those characteristics
  - A name
  - They receive callbacks to update every frame
  - You can extend them with new properties and functions
  - **You can add then to another node as a child**

## Node2D

## Node3D

