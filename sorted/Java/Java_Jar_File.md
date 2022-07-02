# Jar文件

- 将大量文件打包成单独文件
- jar文件时压缩的，使用zip压缩格式

## [清单文件](Java_Jar_Manifest_File.md)

## 创建JAR文件

```shell
jav cvf JARFileName File1 File2
```


## 可执行JAR文件

1. 使用`e`选项指定程序入口点

```shell
jar cvfe MyProgram.jar com.mycompany.mypkg.MainAppClass files to add
```

2. 在[清单文件](Java_Jar_Manifest_File.md)中指定应用程序的主类

- 执行`.jar`文件

```shell
java -jar MyProgram.jar
```

## 密封

- 保证不会有其他类加入其中
- 在清单文件主节下加入`Sealed: true`, 表示JAR文件全局密封
- 改变全局设定, 在清单文件单独节加`Sealed: true/false` 

```
Name: com/mycompany/util/
Sealed: true

Name: com/mycompany/misc/
Sealed: false
```

- 通过将带有`Sealed`行的清单文件通过[jar](Java_Command_Jar.md)命令封装成JAR文件

```shell
jar cvfm MyArchive.jar manifest.mf files to add
```




