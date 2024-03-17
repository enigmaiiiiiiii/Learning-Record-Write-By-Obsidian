# Godot - SceneTree

## What It Is

- A [MainLoop]() Implementation
- A class has some important functions
- Contains the root Viewport

## Features

- When a node is part of the SceneTree, its **singleton** can be obtained by `Node.GetTree()`
- Viewport is at the top of the tree

## Get The SceneTree

```c
GetTree().Root
GetNode("/root")
```

## Tree Order

most node operations in Godot, such as drawing 2D, processing, or getting notifications are done in [pre-order](binary-tree-preorder-traversal.md) traversal, such as:

- [`_process()`](godot-node.md) method is called by pre-order traversal
- [`_enter_tree()`](godot-node.md#enter-tree) method is called by pre-order traversal

Exceptions, such as

- [`_ready()`](godot-node.md#enter-ready) method is called by post-order traversal
- [`_exit_tree()`](godot-node.md#exit-tree) method is called by post-order traversal

## When Nodes Enter A SceneTree

- `_enter_tree()` ⮕  `_ready()` ⮕ `_exit_tree()`

## SceneTreeTimer

- A timer managed by the scene tree
- Create By `SceneTree.create_timer()`
- This timer is processed **after** all nodes in current frame, includes [`_process()`](godot-processing#idle-processing), [`_process_physics()`]

