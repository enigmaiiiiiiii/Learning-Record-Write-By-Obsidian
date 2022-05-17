# 通过脚本扩展编辑器功能


## 方式

- [x] [通过MenuItem特性扩展](Unity_Script_Extend_Editor_MenuItem.md)

- [x] [通过Unity委托扩展](Unity_Script_Extend_Editor_By_Delegate.md)

- [ ] [继承AssetModificationProcessor] 

创建，删除，移动，保存发生时执行的方法

- [ ] [添加控件(按钮，滚动条等)]

- [ ] [通过Gizmo辅助显示]

- [ ] [绑定特定Component的GUI]

实现一个类，绑定CustomItem特性, 继承Editor，实现OnXXXGUI方法

- [ ] [Handles.BeginGUI(), Handles.EndGUI()用于在Scene中创建]

- [x] [创建自定义, 独立的window窗口](Unity_Script_Extend_Editor_Create_EditorWindow.md)

创建自定义窗口的菜单，通过继承IHasCustomMenu接口


## 应用

[扩展Project](Unity_Script_Project_Extention.md)

[扩展Scene]

[扩展Inspector](Unity_Script_Inspector_Extention.md)

[扩展Mainmenu](Unity_Script_Mainmenu_Extention.md)

[扩展EditortTools(工具栏)](Unity_Script_EditorTools_Extention.md)

[扩展预览信息窗口](Unity_Script_Preveiw_Extention.md)

[为扩展创建GUI](Unity_Script_GUI_for_extend.md)

[非游戏模式下可执行的脚本](Unity_Script_Extend_InEditMode.md)

- [ ] [通过源码扩展默认类型]