# 区域划分

## 菜单栏

- 扩展方式通过给方法[MainItem特性](Unity_Script_Mainmenu_Extention.md)
- 通过方法OnInspectorGUI()添加GUI

## 工具栏

- Hand Tool:
- Move Tool:
- Rotate Tool:
- Scale Tool: 缩放
- Rect Tool: 控制UI中的文字
- 扩展脚本继承基类[Editortool](Unity_Script_EditorTools_Extention.md)
- 对应快捷键: QWERTY

## Scene

- 位于中心的窗口
- 游戏场景窗口

[Unity中的场景](Unity_Scene.md)

## Project

- 浏览项目文件目录
- 创建文件和文件夹

## Hierarchy

- 游戏中的gameObject

## Inspector

- 当前GameObject上的所有属性
  - gameObject上的位置信息，脚本信息等 
  - gameObject上的组件
  - 可设置gameObject的layer
- 扩展方式  
  - 继承基类Editor
  - 类应用特性CustomEditor(type)
  - 方法OnInspectorGUI()添加GUI
