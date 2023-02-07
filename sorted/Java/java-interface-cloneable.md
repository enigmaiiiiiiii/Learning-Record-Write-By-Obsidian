# Cloneable接口

- 一个类实现拷贝
  - implement Cloneabel Interface
  - 实现clone()方法的类应该重写Object的方法, 并指定public

> 1. 如果一个类没有实现Cloneable接口，则对象在执行clone()操作时会抛出CloneNotSupportedException
> 2. [Object类](java-object-class.md)不实现Cloneable接口

## Object类的clone()方法

- 是一个protected方法
- 是[浅拷贝]()