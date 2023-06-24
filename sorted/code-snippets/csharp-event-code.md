# code

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
            if (i % 12 == 0 && CountedADozen != null) {
                Console.WriteLine("触发事件");
                CountedADozen();
            }
        }
    }
}

class Dozens
{
    public Incrementer? Incrementer;
    public int DozensCount {get; private set;}

    public Dozens()
    {
        DozensCount = 0;
    }

    public void Regis()
    {
        Incrementer = new Incrementer();
        Incrementer.CountedADozen += IncrementDozensCount;
    }

    void IncrementDozensCount()
    {
        DozensCount++;
    }
}

class Program
{
    static void Main()
    {
        Incrementer incrementer = new Incrementer();
        Dozens dozensCounter = new Dozens();
        dozensCounter.Incrementer = incrementer;
        
        dozensCounter.Regis();  // 注册事件
        incrementer.DoCount();  // 触发事件
        
        Console.WriteLine("Number of dozens = {0}",     
            dozensCounter.DozensCount); 
    }
}
```