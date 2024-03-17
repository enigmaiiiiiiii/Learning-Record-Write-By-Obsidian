# Godot - NodePath

## What It Is

- A relative or absolute path in a scene
- for use with [`Node.get_node`]() and similar functions
- can reference not only nodes, also properties and methods

```
main
├── player
│   ├── camera
│   └── sprite
└── enemy
```

## Method Node.get_node()

- receive a string as node path
- syntax `^"path"`

```py
^"A" # Immediate child A
^"A/B" # A's child B
^"." # The current node.
^".." # The parent node.
^"../C" # A sibling node C.
^"../.." # The grandparent node.
# A leading slash means it is absolute from the SceneTree.
^"/root" # Equivalent to get_tree().get_root().
^"/root/Main" # If your main scene's root node were named "Main".
^"/root/MyAutoload" # If you have an autoloaded node or scene.
```
