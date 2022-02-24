# 操作IO类的函数

- getline函数，从一个给定的istream读取一行数据，存入string对象
  - `getline(input, str, delim)`
  - input: 获取数据来源的流
  - str: 目标字符串
  - delim: 使出所终止于的分割字符，释出但不存储
- 缓冲区：一个存储区域，用于保存数据
  - 显示的刷新会**输出**缓冲
- 条件状态对象是流
- `>>`运算符，从istream读取数据, `cin >> word;` 表示从cin读取输入存入word
- `<<`运算符, 向ostream写入输出数据, `cout << word;` 表示向cout写入word并用于输出

   ```c++
   ofstream out1, out2;
   out1 = out2;
   ofstream print(out1);  
   out2 = print(out2);  // 不能作为实参，因为不支持拷贝
   ```