# Enum

- 默认从0开始，依次加1


限定作用域

```c++
enum class open_modes{input, output, append}
```

不限定作用域

```c++
enum color {red, yellow, green};  
```

- 未命名的不限定作用域的枚举类型

```c++
enum {floatPrec = 6, double Prec = 10, double_doublePrec = 10};
```