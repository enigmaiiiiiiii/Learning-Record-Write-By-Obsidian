# acm模式输入输出

## 1. 常用输入

## std::cin >> input >> input2

  - 遇到换行符返回
  - 发生错误如输入的类型不一致，返回错误, 可用作判断条件
  - 遇到文件结束符eof,当作false返回
  - 输入中有空格且在换行符之前, input = 空格前的输入, input2 = 下一个空格或换行前的输入
  
## getline(cin, str)  

  - 遇到换行符`'\n'`, 读取结束并返回结果 
  - 遇到delim字符，丢弃delim字符并返回, 下一次读入操作从下一个字符开始
  - 已存储str.max_size()个字符， getline设置failbit并返回
  

## 2. 字符流 + getline实现字符串分隔

- stringstream

## 类型转换

- `stoi()`: 字符串 $\rightarrow$ int
- `char - '0'`: 字符类型数字0~9 $\rightarrow$ 整数类型0~9
- `char - 'A'`: 十六进制A ~ F $\rightarrow$ 整数类型10~15
- `'a' - 'A'`:  获得大小写之间的间隔

## 进制转换

## vector最值

- `max_element(vec.begin(), vec.end())`： 返回范围内最大值的指针