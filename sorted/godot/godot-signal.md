# Godot - Signal

- Engine signal connected as events are automatically disconnected when nodes are freed
- **Custom signals aren't disconnected automatically**

## Custom Signal

- Name convention: End with `EventHandler`

Defining Custom Signal

```c
[Signal]
public delegate void MySignalEventHandler();

[Signal]
public delegate void MySignalWithArgumentEventhandler(string myString);
```

Connected Event

```c
public override void _Ready()
{
    MySignal += () => GD.Print("Hello!");
    MySignalWithArgument += SayHelloTo;
}

private void SayHelloTo(string name)
{
    GD.Print($"Hello, {name}!");
}
```

## Await Signal

- use `await` and `GodotObject.Signal` to wait for a signal to be emitted

`await ToSignal(<emitter>, <signal_name>)`

- this will wait for signal `signal_name` to be emitted by `emitter`

```c
public async Task SomeFunction()
{
    await ToSignal(timer, Timer.SignalName.Timeout);
    GD.Print("After timeout");
}
```



