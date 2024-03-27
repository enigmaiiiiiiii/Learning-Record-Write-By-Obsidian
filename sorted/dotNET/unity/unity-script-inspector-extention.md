# Unity Extending Script - Extending Inspector

1. Inherit base class `Editor`
2. Add Attribute `[CustomEditor(type)]`
3. Implement method `OnInspectorGUI()`
  
```c#
[CustomEditor(typeof(Map))]
public class MapModelCreator: Editor 
{
    public override void OnInspectorGUI()
    {

    }
}
```

