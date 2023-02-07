# 通过MainItem特性扩展

通过给方法添加[MenuItem特性](unity-script-mainmenu-extention.md)一般用于扩展各种菜单，包括主菜单，右键菜单

- `[MenuItem(path)]`, path为用/隔开的路径, 可以是
  - CONTEXT路径
  - 主菜单路径
  - Asset
- `[MenuItem("CONTEXT/Transform/New Context 1")]` ： Transform组件新增右键菜单 