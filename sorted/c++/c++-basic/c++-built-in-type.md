
# C++ - Built-in type

## 算术类型

- 布尔类型：bool
- 字符类型
  - char 字符
  - wchar_t 宽字符
  - char16_t Unicode字符16
  - char32_t Unicode字符32
- 整型
  - short 短整型16
  - int 整形16
  - long 长整型32
  - long long 长整型64
- 浮点类型
  - float 单精度浮点数 6位有效数字
  - double 双精度浮点数
  - long double 扩展精度浮点数

## 带符号类型和无符号类型

- 带符号类型:int, short, long, long long
  - 在这些类型前加unsigned可以得到相应的无符号类型
- 无符号类型:

## 选择类型的经验

- 明确数值不可能为负时，选择无符号类型
- 使用int做整数运算
- 算数运算表达式不使用char或bool
- 浮点用double,float精度不够

## 字面值

- 以0开头的整数代表八进制
- 以0×开头的代表十六进制
- 字符：`'a'`
- 字符串：`"hello world"`
- 转义序列以反斜线`\`开始, `\ + 字符`可以表示换行符，制表符等
  - `\ + 对应字符的数值`也可以表示转义字符
- 指定字面值类型
  - 字符串前缀u Unicode 16字符 char16_t
  - 字符串前缀U Unicode 32字符 char32_t
  - 字符串前缀L 宽字符 wchar_t
  - 整型前缀u或U unsigned
  - 整型前缀l或L long
  - 整型前缀ll或LL long long
  - 浮点后缀f或F long double
