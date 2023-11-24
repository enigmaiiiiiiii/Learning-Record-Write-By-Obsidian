# JAVA - Reflect

## Introduction

Use of Reflection in Java

- analysis class at **runtime**
- access object at **runtime**
- 通用数组操作代码
- 定位资源位置
- ~~Method对象, 很像[c++中的函数指针](c++-function-pointer.md)~~

## Feature

- from Java 9, 增加了使用reflect的限制, will cause `InaccessibleException`

## API

Class

[java.lang.Class](java-reflect-class.md)

AccessibleObject

[java.lang.reflect.Field](java-reflect-field.md)

[java.lang.reflect.Method](java-reflect-method.md)

[java.lang.reflect.Constructor](java-reflect-constructor.md)

Modifier

[java.lang.reflect.Modifier](java-reflect-modifier.md): public, private, 等修饰符

Annotation

[java.lang.Annotation](java-reflect-annotation.md)

[annotated element](java-annotated-element.md)

## 通过反射实现通用toString()

