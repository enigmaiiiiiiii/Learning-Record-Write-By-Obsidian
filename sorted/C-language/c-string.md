# C语言字符串

- 字符串是以空字符`\0`结尾的char类型数组
- 所以在指定数组大小时, 要确保数组元素个数至少比字符串长度多1
- `{'h','e', 'l', 'l', 'o'}`, 没有`\0`结尾, 表示一个字符数组
- `{'h','e', 'l', 'l', 'o', '\0'}`, 表示一个字符字符串

## 初始化字符串

指针初始化

> 建议指针初始化时, 使用const限定符

```c++
const char *p1 = "Klingon";
```

数组初始化

```c++
const char arr[] = "hello";
```

### 两种表示方法的区别

编译器确定[数组](c++-array.md)的大小

```c++
const char arr[] = "hello";
```

用指针表示法创建字符串

```c++
const char *pt = "Something is pointer.";`
```

- arr和pt都可进行指针加法操作
- 只有pt可以进行递增操作pt++
- `pt = arr;` 表示pt指向s
- `arr = pt;` 非法操作

```c++
pt = arr;  // 可以
arr = pt;  // 不可以
```

对于非const arr和pt

- `arr[1]`: 可以改变元素值
- `pt[2]`: 行为未定义

