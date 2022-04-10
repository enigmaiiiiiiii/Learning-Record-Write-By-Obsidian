# 通过脚本扩展编辑器功能

- 继承自UnityEditor.Editor类
- 脚本文件放在editor文件夹下

[扩展Inspector](Unity_Script_Inspector_Extention.md)

[扩展Mainmenu](Unity_Script_Mainmenu_Extention.md)

[扩展EditortTools(工具栏)](Unity_Script_EditorTools_Extention.md)

[为扩展创建GUI](Unity_Script_GUI_for_extend.md)

## 总结

- 菜单栏
  - 扩展方式通过给方法[MainItem特性](Unity_Script_Mainmenu_Extention.md)
  - 通过方法OnInspectorGUI()添加GUI
- 工具栏  
  - 类应用i特性EditorTool(displayname)
  - 扩展脚本继承基类[Editortool](Unity_Script_EditorTools_Extention.md)
- Inspector
  - 继承基类Editor
  - 特性CustomEditor(type)
  - 方法OnInspectorGUI()