# 标准事件

[code](CSharp_Standard_Event_Code.md)

`public delegate void EvnetHandler(object sender, EventArgs e);`

- 在System命名空间声明的EventHandler委托类型, 专门用于系统事件
- `EventArgs`类声明在System命名空间
- 两个参数
  - sender: object类型，事件的发布者
  - e:  保存状态信息, 例如用于传递发布者信息


```c#
class Program
{
    static void Main()
    {
        Incrementer incrementer = new Incrementer();
        Dozens dozensCounter = new Dozens(incrementer);

        incrementer.DoCount();
        Console.WriteLine("Number of dozens = {0}", dozensCounter.DozensCount);
    }
}
```


##  传递数据

- 声明一个类IncrementerEvnetArgs，派生自EvenetsArgs
- 事件发布者使用这个类实例化泛型委托`EventHandler<IncrementerEvnetArgs>`

```c#
public class IncrementerEventArgs: EvnetArgs
{
    public int InterrationCount{get;set;}
}
```

