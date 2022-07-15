#  类之间的关系
- 依赖
  - 尽可能将相互依赖的类简直最少(低耦合度)
  - UML中用虚线 + 实线箭头表示
- 聚合
  - 一个对象包含另一个对象
  - UML中用菱形 + 实线表示
- 继承
  - UML中用实线 + 空心三角箭头表示

## 对象析构

- Java有自动的垃圾回收机制
- 某些对象使用了系统资源, 当资源不再需要时，将其回收
- 通过给类添加一个finalize方法， finalize方法将在垃圾回收器清楚对象之前调用

## 设置类文件搜索路径的方式

- java命令参数`-classpath`
- Linux

```shell
`export CLasspath=/home/usr/classdir:.:/home/user/archives/archives/archive.jar`
```
- Windows shell

```shell
set CLASSPATH=c:\classdir;.;c:\archives\archive.jar
```

> 环境变量设置，shell退出前有效

