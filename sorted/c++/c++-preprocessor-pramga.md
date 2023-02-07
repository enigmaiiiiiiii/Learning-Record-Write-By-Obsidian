# \#pramga

- 定义编译器行为

## pramga pack

- 定义类和联合体的最大对齐

```c++
#pragma pack(arg)  // (1)
#pragma pack()     // (2)
```

> arg是2的幂, 指定

- (1) 设置当前对齐值 
- (2)设置当前对齐为默认值