# Unity UI

- Unity UI是一套为游戏和应用程序开发用户界面的工具
- 一个基于游戏对象的UI系统，使用组件和游戏视图来布置和样式化用户界面。
- 不能用在Unity Edito中创建或更改用户界面

## Canvas

- Canvas是容纳所有 UI 元素的区域。
  - 画布是一种带有画布组件的GameObject，
  - 所有 UI 元素都必须是此类画布的子项
- 如果场景中还没有Canvas，则会自动创建。UI 元素将创建画布的子项。
  - 菜单 GameObject $\rightarrow$ UI $\rightarrow$ Image 创建image
- 在 Scene 视图中显示为矩形。可以轻松定位 UI 元素，无需始终显示 Game 视图。
- Canvas使用 EventSystem 对象来协助消息系统
- Render渲染

## 锚点

- 如果矩形变换的父项也是矩形变换，则子矩形变换还可通过各种方式锚定到父矩形变换
- 通过锚点锚定到父矩形变换

## [事件](Unity_UI_uGUI_Event.md)



## 组件

按钮， slider

## 动画