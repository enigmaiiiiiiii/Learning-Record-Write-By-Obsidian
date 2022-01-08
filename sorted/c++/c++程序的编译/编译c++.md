# c++编译

- 源文件命名约定:不同编译器不同后缀命名约定，常见的后缀有 **.cc, .cxx, .cpp, .cp, .C**
  
![[编译器和连接器.excalidraw]]
 
## 连接器

- [目标文件](目标文件(objectfile).md)中只包含编译器为你编写的代码翻译的机器语言代码，
- [可执行文件](可执行文件(executablefile).md)中还包含你编写的程序中使用的库函数和启动代码的机器代码。
- 把目标代码、系统标准启动代码和[库文件](库文件(libraryfile).md)合并成一个文件，即[可执行文件](可执行文件(executablefile).md)  
- [GNU linker](GNU_linker.md)
 
## c++编译器

- [[GCC]]
- MSVC
- clang
