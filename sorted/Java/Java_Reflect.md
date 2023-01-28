# 反射

## Introduction

- 反射机制的用途
  - **运行时**分析类
  - **运行时**查看对象
  - 通用数组操作代码
  - 定位资源位置
  - ~~Method对象, 很像[c++中的函数指针](c++_Function_Pointer.md)~~

## Feature

- from Java 9, 增加了使用reflect的限制, will cause `InaccessibleException`

## API

Class

[java.lang.Class](Java_Reflect_Class.md)

AccessibleObject

[java.lang.reflect.Field](Java_Reflect_Field.md)

[java.lang.reflect.Method](Java_Reflect_Method.md)

[java.lang.reflect.Constructor](Java_Reflect_Constructor.md)

Modifier

[java.lang.reflect.Modifier](Java_Reflect_Modifier.md): public, private, 等修饰符

Annotation

[java.lang.Annotation](Java_Reflect_Annotation.md)

[注解元素接口](Java_AnnotatedElement.md)

## 通过反射实现通用toString()

