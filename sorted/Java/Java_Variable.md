# 变量

## 声明

```java
Employee e;
```

## 定义

```java
e = new Employee()
```

引用类型

- 定义一个对象
  - 对象可以通过变量来访问
  - 并没有包含一个对象，而是引用一个对象
  - 变量的值为对象的地址

基本类型  
  
- 定义一个基本类型
  - 变量保存了基本类型的值

## 对象

- 使用Constructor构造对象
- 所有对象存储在堆中
- 使用`clone`方法获得对象的完整拷贝

```
Date birthday;  // java
Date* birthday; // c++
```

## 常量

- 用static final修饰的field
- 与c++不同，Java常量包含在类中
- 编译器在编译时会将常量直接替换为具体的数， 效率高
- 命名建议： 所有字母大写