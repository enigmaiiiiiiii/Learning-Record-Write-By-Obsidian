# 处理拖放事件

  
```c++
event->setDropAction(Qt::DropAction action);
event->posibleActions();  // 返回可能的操作
event->proposedActions();  // 返回建议的操作
```

setDropAction()设置目标对数据执行的action。使用它可以用一个可能的QDropAction操作覆盖建议的QDropAction

- 如果设置的拖放操作不是可能的操作，则拖放操作将默认为复制操作。

```c++
event->source();
```

Qt::DropAction 可选动作

- Qt::CopyAction:		Copy the data to the target.
- Qt::MoveAction:	Move the data from the source to the target.
- Qt::LinkAction: Create a link from the source to the target.
- Qt::ActionMask:	
- Qt::IgnoreAction: Ignore the action (do nothing with the data).
- Qt::TargetMoveAction:	
  - On Windows, this value is used when the ownership of the D&D data should be taken over by the target application, i.e., the source application should not delete the data. 
  - On X11 this value is used to do a move. TargetMoveAction is not used on the Mac