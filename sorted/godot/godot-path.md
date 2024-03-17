# Godot - Path

## Path2D

what it is

- A Class inherites [Node2D](godot-node.md#node2d) 
- used for constructing navigational path that other nodes, specifically [PathFollow2D] can follow

what's for

- draw a predefined path in godot editor for game objects, without complex programming

> following code can be done in godot editor by hand, but it will add to [.tscn file](godot-scene.md)

creating Path2D by code

```
var path = Path2D.new()
var curve = Curve2D.new()
curve.add_point(Vector2(100, 100))
curve.add_point(Vector2(400, 100))
curve.add_point(Vector2(400, 400))
curve.add_point(Vector2(100, 400))

path.curve = curve
add_child(path)
```

attaching

```
var path_follow = PathFollow2D.new()
path.add_child(path_follow)
var sprite = Sprite.new()
sprite.texture = preload("res://path_to_icon.png")
path_follow.add_child(sprite)
```
