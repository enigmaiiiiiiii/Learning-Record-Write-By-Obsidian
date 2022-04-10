# 几个预定义特性

## SerializableAttribute

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

- 接收一个表示[编译符号](Csharp_Preprocess.md)的参数，检查编译符号是否被定义

`[Conditional("DoTrace")]`, 如果"DoTrace"没有定义，所有调用被该特性标记的方法不会被执行

## 调用者信息

- 三个特性CallerFilePath, CallerLineNumber, CallerMemberName，表示调用者路径，行数，成员名称的信息
- 只能用于方法中的[可选参数](Csharp_Method.md)，如果参数被提供则使用真实参数

## DebuggerStepThrough

- 单步调试时希望跳过某些方法

## AttributeUsage

- 应用在特性类上的特性

```c#
public sealed class AttributeUsageAttribute: Attribute
{
    public AttributeUsageAttribute(AttributeTargets validon);

    public bool AllowMultiple {get; set;}  // 一个特性是否允许多次应用
    public bool Inherited {get;set;}
    public AttributeTargets validOn {get;}
}
```

- AllowMultiple
- Inherited
- validon: 可以附加在那些目标上(类，接口，属性，方法，参数)
  - 可以是AttributeTargets枚举值任意组合, All, Delegate, Parameter, Assemble, Enum, Class, Interface, Property

## 其他预定义

- CLSCompliant
- Serializable 声明结构可以被序列化
- NonSerialized
- DLLImport
- WebMethod
