# 类

## 静态对象

[Application](Unity_Class_Application.md)

[Selection](Unity_Class_Selection.md)

[Undo](Unity_Class_Undo.md)

[Debug](Unity_Script_Debug.md)

Input

- 获取输入

SceneManager

- SceneManager命名空间
- 运行时的场景管理

Handles

- 辅助显示
- 如坐标轴
- 比Gizmos有更多功能，可以通过handles来编辑Scene中物体

Gizmos

- 画笔工具，通过**静态方法**完成绘制工作
- 用于辅助显示
- 需要在方法OnDrawGizmos()和OnDrawGizmosSelected()中完成
  - 每帧调用
- OnDrawGizmos(): 每帧调用，
  - 调用时间: Unity编辑器Scene界面加载之后
  - 每帧调用

## 用于被继承的基类

[GameObject](Unity_Class_GameObject.md)

- Unity中所有[游戏对象](Unity_Develop_Factor.md))的基类
- 有属性, 方法，静态方法
  
Editor

- OnSceneGUI: 编辑Scene窗口对象
- OnEnable
- OnInspectorGUI
- 属性
  - target: 当前查看的object

## TextAsset

- 通过TextAsset类获取文本文件的原始内容。
- 访问二进制文件中的数据，可以将该文件作为原始字节数组访问
