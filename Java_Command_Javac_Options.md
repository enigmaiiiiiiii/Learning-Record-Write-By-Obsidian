# Options

## Standard Options

`@filename`

- 指定包含javac命令参数的文件, 
- 可以在任何操作系统上创建任何长度的javac命令

`-Akey[=value]`

?

`--add-modules module, module`

?

`--boot-class-path path` or  `-bootclasspath path`

?

`--class-path path` , `-classpath path`, or `-cp path` 


`-d directory`

- 为类文件设置输出目录
- 如果类是包的一部分，那么javac会将类文件放在反映[模块](Java_Module.md)名(如果合适的话)和包名的子目录中。
- 如果目录和任何必要的子目录不存在，则将创建目录
- 不指定，则放在生成类文件对应的源文件所在的目录

编译模块时类文件的输出目录

- 编译单个模块，类输出目录的内容将被组织成[包](Java_Package.md)层次结构
- 当编译多个模块，输出目录的内容将被组织在一个模块层次结构中，每个模块的内容在单独的子目录中，每个模块都被组织成包层次结构

`-g`

- 调试信息

## Extra

`-Djava.endoresed.dirs=dirs`



`-Djava.ext.dirs=dirs`

