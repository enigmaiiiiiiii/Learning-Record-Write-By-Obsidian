# 注释元素


## containing annotation interface

注释接口A的containing annotation interface必须具有以下条件: 

1. 声明一个value()方法, 返回类型为A[]
2. 除value()外的其他方法有默认值
3. 保留时间至少和A一样长
4. ~~~A中元素适用于其中的对应的元素~~~
5. 与A对应的的java.lang.annotation.Documented
6. 与A对应的的java.lang.annotation.Inherited

## 保留策略

> 指定注释保留时间

- CLASS: In class but need not be retained in VM
- RUNTIME: In class by compiler and at run time in VM
- SOURCE: discarded by compiler
## AnnotatedElement接口

- 当前VM中运行的程序的带注释结构
- 实现了AnnotatedElement接口的类
  - [x] [AccessibleObject](Java_Reflect_AccessibleObject.md)
  - [x] [Class](Java_Reflect_Class.md)
  - [ ] Constructor
  - [ ] Executable
  - [x] Field
  - [x] Method
  - [ ] Module
  - [ ] Package
  - [ ] Parameter
  - [ ] RecordComponent
- 在元素上的AnnotatedElement, 称为declaration annotation
- 在type(class, interface, enum)上的AnnotatedElement, 称为type annotation