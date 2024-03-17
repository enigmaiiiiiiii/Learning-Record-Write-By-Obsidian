# Godot - MainLoop

## What It Is

- Abstract base class for game's main loop

## Methods

Calling Order

1. `_initialize()`

- called once during initialization

2. `_process(float delta)`

- Called each frame
- `delta` is the time in seconds since the last frame

3. `_physics_process(float delta)`

- Called each physics frame
- `delta` is the time in seconds since the last frame

4. `_finalize()`

- called before the program exits
