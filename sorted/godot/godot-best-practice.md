# Godot - Best Practice

## Changing Current Scene

```c
pulic void _MyLevelWasCompleted()
{
    GetTree().ChangeSceneToFile("res://levels/level2.tscn");
}
```

or with PackedScene:

```c
public void _MyLevelWasCompleted()
{
    var nextScene = (PackedScene)ResourceLoader.Load("res://levels/level2.tscn");
    GetTree().ChangeSceneToPacked(nextScene);
}
```

## Singleton

## Create Player Scene

2D scene

1. create `Area2D` or `Node2D` node
2. lock or unlock its editable
3. Add [2D Sprite Animation](#2d-sprite-animation) node
4. Add dependent scripts
5. Call `Play()` method on sprite node


## 2D Sprite Animation

2 ways to animate a sprite

1. Use `AnimatedSprite2D` to animate a collection of images
2. Use `AnimationPlayer` and `Sprite2D` to animate a sprite sheet which is a single image like a film strip


