# .NET概念

## .NET框架

- [.NET框架组成](dotNET_frame.md)

## CLR(Common Language Runtimen)

- 执行环境称为[CLR](dotNET_CLR.md)
- 托管代码: .NET框架编写的代码称为托管代码
- 非托管代码: 不在CLR控制之下运行的代码，比如Win32 C/C++,称为非托管代码

## 程序集

- 编译成CIL, 源代码生成名为程序集的输出文件
- 程序集是[可执行文件]或DLL
- 程序集中的代码不是本机代码，而是一种被称作CIL的中间语言
- 程序集包含的信息
  - [CIL](dotNET_CIL.md)
  - 程序中使用的类型的元数据
  - 对其他程序集引用的元数据

## JIT(Just-In-Time)

- CLR执行以下步骤, 将程序集编译成本机代码
  - 安全检查
  - 在内存中分配空间 
  - 把程序集中的可执行代码发送给实时(Just-in-Time)编译器
- 程序集中的代码只在需要时被JIT编译, 被调用的代码只被编译一次

## CLI(Common Language Infrastructure)

- [CLI](dotNET_CLI.md)公共语言基础结构