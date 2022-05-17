# 以委托的方式扩展编辑器

1. 第一步 在方法前添加`[InitializeOnloadMethod]`

  > 此方法会在C#代码每次编译完成后首先调用

2. 第二步 监听委托

> 向委托对象添加[可调用对象](CSharp_Delegate.md)

## Unity中的委托对象

- `SceneView.duringSceneGui`
- `EditorApplication.projectWindowItemOnGUI`: 为Project中的文件添加UI, 监听[project](Unity_Editor_Project_Window.md)窗口的OnGUI事件委托
- `EditorAppication.projectWindowChange`: 监听[Project](Unity_Editor_Project_Window.md)下的资源是否发生变化，如添加，移动删除
- hierarchyWindowItemOnGUI：为hierarchy中的物体添加UI
