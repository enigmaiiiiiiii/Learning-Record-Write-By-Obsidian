# 结构体

- 定义结构体

```c
struct type {
  type1 mem1;
  type2 mem2;
  type3 mem3;
}
```

- 声明结构体变量

```c
struct typeName typevar;
```

- 结构体初始化,
  - 使用`,`分隔各初始化项
  
  ```c
  struct book library = {
    "the Poous",
    "Renee Vivotte",
    1.92
  }
  ```
  
  - 由点运算符和成员名标识特定元素

  ```c++
  struct book gift = {
    .value = 25.99,
    .author = "jams", 
    .title = "rue for the road"
  };
  ```