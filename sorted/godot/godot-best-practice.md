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
