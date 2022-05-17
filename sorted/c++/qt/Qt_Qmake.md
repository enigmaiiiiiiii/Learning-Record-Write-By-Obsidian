# Qmake


```qmake
#禁用qdebug打印输出
DEFINES     += QT_NO_DEBUG_OUTPUT

#自定义define变量 可以在整个项目中使用
#pro文件可以这样判断 contains(DEFINES, videovlc) {}
#代码文件可以这样判断 #ifdef videovlc
DEFINES += videovlc1 videoffmpeg

CONFIG += warn_off #关闭编译警告提示 眼不见为净
CONFIG += console #用来设置运行文件附带调试输出窗口

#指定编译生成的文件到temp目录 分门别类存储
MOC_DIR     = temp/moc
RCC_DIR     = temp/rcc
UI_DIR      = temp/ui
OBJECTS_DIR = temp/obj

#指定编译生成的可执行文件到bin目录
DESTDIR     = bin
```
