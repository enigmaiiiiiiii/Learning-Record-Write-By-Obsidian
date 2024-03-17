# Godot - Processing

## What Is This

- Each frame you need to update the state of your game world before drawing it on screen

## Idle Processing

- Allows you to run code that updates a node every frame, as often as possible
- `Node._process(delta)` is called

## Physics Processing

- Like moving a body that collides with the environment
- Happens at a fixed rate, 60 times per second by default
- This rate is independent of your game's  actual frame rate
- `Node._physics_process(delta)` is called before each physics step, delta is 0.0166667 by default


