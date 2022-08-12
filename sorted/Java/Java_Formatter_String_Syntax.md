# 格式化输出

- `System.out.printf(String format, Object... args)`
- 通用语法:

&emsp;&emsp;&emsp;&emsp;%[argument_index$][flags][width][.precision]conversion

- (必要)*conversion*: 一个字符, 可用的转换由参数类型决定
- (可选)*argument_index*: 参数在列表中的位置， 第一个参数1$, 第二个参数2$, ...
- (可选)*flags*: 输出格式的字符
- (可选)*width*: 一个十进制正整数, 要输出的最小字符数
- (可选)*precision*:

## Conversion

- General: 适用于所有类型的转换
- Character: 字符转换, char, byte, short
- Numeric: 
  - Integral: byte, short, int, long, BigInteger
  - Floating point: float, double, BigDecimal
    - `'e'`: 使用计算机科学记数法
    - `'f'`: 十进制输出小数
    - `'g'`: 
    - `'a'`: 十六进制指数形式
- Date/Time: 
- Percent: 
- Line Separator: 行分割符

## flag

适用于整数的flag

- `'+'`: 在正数前面加上正号
- `' '`: 非负值的额外空格
- `'0'`: 填充0达到width指定的宽度
- `'('`: 负数两边加()