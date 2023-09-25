# C - String

## What It Is

- String is an array of char terminated by a null character [`\0`](c-character.md)
- for this reason, when specifying the size of an array, you must ensure that the number of array elements is at least *1* more than the length of the string

this is an array of characters

- `{'h','e', 'l', 'l', 'o'}`
- because it is **not terminated by `\0`**

this is a string

- `{'h','e', 'l', 'l', 'o', '\0'}`

## Initialize A String

initialize with pointer

> It is recommended to use the [const] qualifier when initializing pointers

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

