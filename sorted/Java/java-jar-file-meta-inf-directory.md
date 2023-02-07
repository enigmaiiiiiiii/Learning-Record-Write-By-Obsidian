# META-INF目录

MANIFEST.MF

- [清单文件](java-jar-manifest-file.md)

INDEX.LIST

- 由jar命令的新“-i”选项生成的
- 它包含应用程序或扩展中定义的包的位置信息
- 它是JarIndex实现的一部分，class loader使用它来加快类装入过程。

x.SF

- JAR文件的签名文件。x表示基本文件名。

x.DSA

- 存储对应签名文件的数字签名。

`services/`

- 此目录存储所有服务提供商配置文件

## 语法

- 文档中的所有规范都使用相同的语法

