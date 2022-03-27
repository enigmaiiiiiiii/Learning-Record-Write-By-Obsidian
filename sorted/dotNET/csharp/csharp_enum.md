# 枚举

- 只有一种类型成员, 整数值常量  

```c#
enum Trafficight
{
    Green,
    Yellow,
    Red
}
```

- 默认情况下，第一个成员赋值0，后续成员比前一个值加1
- 可以显式初始化，隐式初始化规则是前一个成员值加1
- 可以把**枚举类型成员**赋值给**枚举类型变量**
- 使用其他整数类型

```c#
enum TrafficiLight: ulong
{
    ...
}
```

## 用作位标志

[Linux文件权限设置](Linux_file_API_fd_open.md)

- 每个位代表一个符号

```c#
[Flags] 
enum CardDeckSettings : uint 
{
    SingleDeck    = 0x01,
    LargePictures = 0x02, 
    FancyNumbers  = 0x04, 
    Animation     = 0x08
}
```
