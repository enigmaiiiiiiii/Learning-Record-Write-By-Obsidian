# begin with Hello World

> 记录顺序为遇到时间先后

## 1. compiler使用错误

gcc prog1.cpp

用命令行运行编译程序时,c++的编译器时g++，不是gcc,

改为： ```g++ prog1.cpp``` 或 ```gcc prog1.cpp -lstdc++```

## 2. Object Files Not Linked Properly

预计涉及到cmake

![c++](c++_Error_Undifined_Reference.png)

问题首次分析：没有正确构建c++项目,没有正确链接c++源文件

[Bug3](c++_Bug_Multiple_Definition.md)

[Bug4](c++_Bug_Undefine_Reference_To_VTable.md)

