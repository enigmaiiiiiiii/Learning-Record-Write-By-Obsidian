# 组织源文件

- 在Java语言中，类和接口可以组织成package，package可以组织成module
- Javac期望在文件系统目录中的源文件的物理排列会将类的组织镜像到package中，将package的组织镜像到module中
- `.java`文件表示一个类

> 1. 建议将文件分为多个目录，并将列表传递给[javac]
> 2. 命名约定: 模块名和包名以小写字母开头，类名以大写字母开头
