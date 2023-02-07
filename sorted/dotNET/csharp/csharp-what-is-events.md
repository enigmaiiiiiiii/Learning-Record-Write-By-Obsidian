# 事件组成

[code](csharp-event-code.md)

## 发布事件

- 发布者内定义事件, 包括
  - 声明事件: 在事件名称前加event关键字和委托类型
  > `public event Handler CounteADozen;`
  - 触发方法: 满足条件时执行注册到事件内的委托

```c#
delegate void Handler();

class Incrementer
{
    // 声明事件
    public event Handler? CountedADozen;

    // 触发条件
    public void DoCount()
    {
        for (int i = 1; i < 100; i++) {
            if (i % 12 == 0 && CountedADozen != null)
                CountedADozen();
        }
    }
}
```

## 订阅事件

注册事件

- `incrementer.CountedADozen += IncrementDozenCount;`

```c#
class Dozens
{
    public int DozensCount {get; private set;}

    public Dozens(Incrementer incrementer)
    {
        DozensCount = 0;
        
        // 注册事件
        incrementer.CountedADozen += IncrementDozensCount;
    }

    void IncrementDozensCount()
    {
        DozensCount++;
    }
}
```

## 触发事件

```c#
class Program
{
    static void Main()
    {
        Incrementer incrementer = new Incrementer();
        Dozens dozensCounter = new Dozens(incrementer);
    
        incrementer.DoCount();
        Console.WriteLine("Number of dozens = {0}",     
            dozensCounter.DozensCount); 
    }
}
```