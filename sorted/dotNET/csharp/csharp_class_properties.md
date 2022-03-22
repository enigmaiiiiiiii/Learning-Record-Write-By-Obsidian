# 属性

## 与字段的关系

- 和字段相同的特征
  - 命名的类成员
  - 可以被赋值和取值
- 与字段的不同之处
  - 不为数据存储分配内存
  - 执行代码
- 属性通常用来读写某个关联字段

## set和get

- set访问器
  - 拥有一个单独的，隐式的值参数, 参数名就是value, 与属性类型相同
  - 拥有一个返回类型void
- get访问器
  - 没有参数
  - 拥有一个与属性类型相同的返回类型

## 使用属性

- 属性赋值: 隐式调用set
- 读取属性: 隐式调用get 
- get和set不能被显示调用

## 属性和字段关联

- 用于封装该字段
- 和属性关联的字段称为后备字段
- 可以用公有属性读写私有字段
- 命名约定
  - 属性使用Pascal: 每个单词首字母大写
  - 后备字段使用Camel: 除第一个单词每个单词首字母大写，以下划线开始或没有下划线

## 只读和只写

- 只写属性: 只有set
- 只读属性: 只有get

## 自动实现属性

- 只声明属性而不声明字段
- 没有set,get方法体, 只有简单的`set;get;`

```c#
class C1
{
    public int MyValue
    {
        set; get;
    }
}
```