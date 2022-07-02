# 用法实例

## 例1

1. 创建一个版本化或多版本的JAR foo.jar，
2. 将类目录中的文件放在JAR的根目录中
3. 将classes-10目录中的文件放在JAR的META-INF/versions/10目录中

假设

- 目录classes/con/foo包含两个类，
    1. com.foo.Hello(入口类), 
    2. com.foo.NameProvider
- 目录classes-10/com/foo 包含com..foo.NameProvider的不同版本

按照这个假设, 通过在目录classes和classes-10中运行以下命令,创建一个多版本foo.jar

```shell
jar --create --file foo.jar --main-calss com.foo.Hello -C classes . --release 10 -C classes-10 .
```

列出foo.jar文件的内容

```shell
jar -tf foo.jar
```

```
META-INF/
META-INF/MANIFEST.MF
com/
com/foo/
com/foo/Hello.class
com/foo/NameProvider.class
META-INF/versions/10/com/
META-INF/versions/10/com/foo/
META-INF/versions/10/com/foo/NameProvider.class
```

META-INF/MANIFEST.MF包含以下内容

```
Main-Class: com.foo.Hello
Multi-Release: true
```

- 假设com.foo.Hello类调用了com.foo.NameProvider类的一个方法，
- 使用JDK 10运行程序将确保com.foo.NameProvider类是META-INF/versions/10/com/foo/中的那个
- 使用JDK 8运行程序将确保com.foo.NameProvider类是位于JAR包根目录com/foo中的类。

## 例2

创建一个归档文件classes.jar, 包含两个class文件Foo.class和Bar.class

```shell
jar --create --file classes.jar Foo.class Bar.class
```

## 例3

1. 使用现有清单mymanifest来创建一个归档文件classes.jar
2. 使用目录foo/中的所有文件创建classes.jar

```shell
jar --create --file classes.jar --manifest mymanifest -C foo/
```

## 例4

将现有的非模块化JAR foo.jar更新为模块化JAR文件。

```shell
jar --update --file foo.jar --main-class com.foo.Main --module-version 1.0 -C foo/module-info.class
```