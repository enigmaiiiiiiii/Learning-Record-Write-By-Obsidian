# string对象

- 初始化方式
  - 默认初始化，string s1; s1是一个空字符串
  - 直接初始化，string s2("hello");
  - 拷贝初始化，string s3 = "hello";
  - 也可以 string s4(10,"h");
- 字符**数组**用**字符串**初始化时，结尾默认添加一个空字符;这是c++继承自C风格的字符串
- string不是内置类型
- 读写string
  - cin:读取时忽略空白、换行、制表符,直到下一处空白符

  ```c++
  std::cin >> s;
  ```

  - getline:读取一整行，保留空白符

  ```c++
  getline(cin, line);
  ```

- **string::size_type**类型
  - 是一种**配套类型**，通过作用域操作符表明定义在哪种类型
  - 由size函数返回的string::size_type类型
  - 是一个无符号类型
  - 可以通过auto,decltype分析出来

  ```c++
  auto len = line.size();  // line的类型时string::size_type
  ```

- 支持下标运算，**str[index]**
- 处理string对象中的字符
  - isspace(c) 当c是空白时为真
  - isalnum(c) 当c是字母或数字时为真
- 两个string对象比较
  - 符号：$>=，<=, ==, !=$
  - 对应位置对应位置字符相等，则比较长短
  - 对应位置不一致，则比较第一个相异字符
- 字面值并不是标准库的string对象
- 字面值不能相加
- 建议使用c++版本的c标准库头文件
  - c语言版本的头文件如`string.h`,相应的c++版本的头文件命名为`cstring`。去掉 **".h"**,在前面加 **"c"**