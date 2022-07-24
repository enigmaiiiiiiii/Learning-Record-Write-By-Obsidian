# instanceof运算符

```java
RelationalExpression instanceof ReferenceType
RelationalExpression instanceof Pattern
```


## 发生编译错误的情况

1. RelationalExpression必须是[引用类型]或null, 否则发生编译错误
2. RelationalExpression必须downcast与引用类型兼容, 否则发生编译错误

## 返回值

- RelationalExpression是null, 返回false
- RelationalExpression强制转换为ReferenceType不引发ClassCastException异常，返回true

## 示例

```java
class Parent {}
interface MyInterface{}
class Child extends Parent implements MyInterface{}

Parent obj1 = new Parent();
Parent obj2 = new Child();
// obj1 instanceof Parent:      true
// obj1 instanceof Child:       false
// obj1 instanceof MyInterface: false
// obj2 instanceof Parent:      true
// obj2 instanceof Child:       true
// obj2 instanceof MyInterface: true
`