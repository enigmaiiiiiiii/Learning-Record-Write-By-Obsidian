## Inspector

- 当前GameObject上的所有属性
  - gameObject上的位置信息，脚本信息等 
  - gameObject上的组件
  - 可设置gameObject的layer
- 扩展方式  
  - 继承基类Editor
  - 类应用特性CustomEditor(type)
  - 方法OnInspectorGUI()添加GUI