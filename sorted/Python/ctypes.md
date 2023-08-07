# ctypes

- Python external function library

## Load Dynamic Link Library

- ctypes导出cdll对象, 在windows系统中可导出windll和oledll
- 通过操作cdll对象可载入动态链接库  
  - cdll对象调用协议cdecl
  - windll调用协议stdcall
  
  ```python
  import ctypes
  
  
  ```
