# for语句的语法形式 

## 传统for循环

- for (init-statement;condition;expression)  
&emsp;&emsp; statement
  - init-statement必须是一下三种形式
    - 声明语句
    - 表达式语句
    - 空语句

## 范围for循环

```c++
for (auto begin = v.begin(),end = v.end();beg != end; ++beg) {
    statement
}
```

- for (declaration: expression)
&emsp;&emsp; statement
  - expression必须是一个序列，比如<u>花括号括起来的初始值列表，数组，vector对象，string对象等</u>
  - declaration定义一个变量
    - 确保类型相容的方法是 **auto** 类型说明符
    - 需要操作序列中的元素声明成引用
    - 不能用来增加vector对象