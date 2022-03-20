# 几个预定义特性

## SerializableAttribute

- 

## Obsolete

- 旧方法警告

```c#
[Obsolete("Use method SuperPrintOut")]
// "Use method SuperPrintOut"为警告信息
static void PrintOut(string str)
{
    Console.WriteLine(str);
}
static void Main(string[] args)
{
    pringOut("start of Main")
}
```

`[Obsolete("Use method SuperPrintOut", true)]`

Obsolete重载特性接收第二个bool类型参数, 表示目标被标记为错误而不是警告

## Conditional  

- 接收一个表示[编译符号](csharp_preprocess.md)的参数，检查编译符号是否被定义

`[Conditional("DoTrace")]`, 如果"DoTrace"没有定义，所有调用被该特性标记的方法不会被执行

## 调用者信息

- 三个特性CallerFilePath, CallerLineNumber, CallerMemberName，表示调用者路径，行数，成员名称的信息
- 只能用于方法中的[可选参数](csharp_method.md)，如果参数被提供则使用真是参数

## DebuggerStepThrough

## 其他预定义

- CLSCompliant
- Serializable 声明结构可以被序列化
- NonSerialized
- DLLImport
- WebMethod
- AttributeUsage
