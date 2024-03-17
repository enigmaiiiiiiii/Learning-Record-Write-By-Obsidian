# Godot - Scene

## What Is Scene In Godot

They can be scene:

- A character, a weapon, a menu, ...

Scene can be nested

```
Game
├── Character
│   ├── Weapon
│   └── HealthBar
└── Menu
```

> Godot editor essentially is a scene editor

## Features

- Only requires **ONE** as your application's main scene
- A `.tscn` file corresponds to a scene
- scene have following characteristics:
  - have one root node
  - You can save them to your local drive and load them later
  - You can create as many instances of a scene as you want

