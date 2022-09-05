# Javac: 标准选项 

`-Akey[=value]`

?

`-d directory`

- 为类文件设置输出目录
- 如果类是包的一部分，那么javac会将类文件放在反映[模块](Java_Module.md)名(如果合适的话)和包名的子目录中。
- 如果目录和任何必要的子目录不存在，则将创建目录
- 不指定，则放在生成类文件对应的源文件所在的目录

编译[module](Java_Moduel.md)时类文件的输出目录

- 编译单个模块，类输出目录的内容将被组织成[package](Java_Package.md)层次结构
- 编译多个模块，输出目录的内容将被组织在一个[module](Java_Module.md)层次结构中，每个模块的内容在单独的子目录中，每个模块都被组织成包层次结构

`-g`

- 调试信息

## 与源文件相关的选项

`--source-path path`  or `-sourcepath path`

指定源文件搜索路径

## 与.class文件相关的选项

`--class-path path` , `-classpath path`, or `-cp path` 

- 指定何处查找类文件

`--boot-class-path path` or  `-bootclasspath path`

?

## 模块

`--add-modules module1, module2`

- 添加要解析的模块，
- 如果module参数是ALL-MODULE-PATH, 则添加module搜索路径中的所有模块

`--module-path path` or `-p path` 

- 添加模块搜索目录

`--module-source-path module-source-path`

- 添加模块源文件的搜索路径

`--module module-name(,moduel-name)*`  or `-m module-name (,module-name)*`

## 参数文件

`@filename`

- 指定包含javac命令参数的文件, 
- 可以在任何操作系统上创建任何长度的javac命令





