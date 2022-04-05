## 扩展Inspector

> 特性CustomEditor

```c#
[CustomEditor(typeof(Map))]
public class MapModelCreator: Editor 
{
    public override void OnInspectorGUI()
    {

    }
}
```

一个继承了Editor的类(MapModeCreator)指定某个[组件](Unity_Script_Component.md)(Map), 当此[组件](Unity_Script_Component.md)(Map)处于run-time时, 创建自定义editor

- 方法
  - OnInspectorGUI(), 扩展InspectorGUI

