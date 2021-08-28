# IO类

- IO对象无拷贝和赋值
- IO类的继承关系
  - ios是流类的系欸
  - istream: 接收盘输入数据
    - cin是istream类的对象
  - ostream: 输出数据到屏幕
    - cout是ostream类的对象
    - cerr也是ostream类的对象
  - ifstream: **读取**文件中的数据
  - ofstream: 用于向文件中**写入**数据
  - iostream: 继承自istream类和ostream类, 既能输入又能输出
  - fstream: 兼ifstream和ofstream类, 既能读取文件的数据，又能向文件中写入数据

```mermaid
flowchart TB
A[ios] --> B[istream]
A --> C[ostream]
B --> D[ifstream]
B --> E[iostream]
C --> E
C --> F[ofstream]
E --> G[fstream]
```

![继承关系](std-io-complete-inheritance.svg)

- getline函数，从一个给定的istream读取一行数据，存入string对象
  - `getline(input, str, delim)`
  - input: 获取数据来源的流
  - str: 目标字符串
  - delim: 使出所终止于的分割字符，释出但不存储

- what is 流
- what is 置位
- 清除错误标志，清除的具体是什么？为何能使流有效?
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

### 文件输入输出

- fstream操作