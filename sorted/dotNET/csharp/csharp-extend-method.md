# 扩展方法

- 声明扩展方法的类必须声明为static
- 方法本身必须声明为static
- 必须包含[this](csharp-this.md)作为它的第一个参数类型, this后为它所扩展的类的名称

```c#
static class ExtendMyData
{
    public static double Average(this MyData md)
    {
        return md.Sum() / 3;
    }
}

class Program
{
    static void Main()
    {
        MyData md = new MyData(3, 4, 5);
        Console.WriteLine("Average: {0}", md.Average());
    }
}

```
