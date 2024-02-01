# code

```cs
public class IncrementerEventArgs: EventArgs
{
    public int IterationCount{get;set;}
}

class Incrementer
{
    // declare event
    public event EventHandler<IncrementerEventArgs>? CountedADozen;

    // trigger event
    private IncrementerEventArgs args = new ();

    public void DoCount()
    {
        for (int i = 1; i < 100; i++) {
            if (i % 12 == 0 && CountedADozen != null) {
                args.IterationCount = i;
                CountedADozen(this, args);
            }
        }
    }
}

class Dozens
{
    public Incrementer Incrementer;
    public int DozensCount;

    public Dozens()
    {
        DozensCount = 0;
    }
    public void Regis()
    {
        Incrementer.CountedADozen += IncrementDozensCount;
    }
    void IncrementDozensCount(object source, IncrementerEventArgs e)
    {
        Console.WriteLine("Incremented at iteration: {0} in {1}", e.IterationCount, source.ToString());
        DozensCount++;
    }}

class Program
{
    static void Main()
    {
        Incrementer incrementer = new Incrementer();
        Dozens dozensCounter = new Dozens();
        dozensCounter.Incrementer = incrementer;
                dozensCounter.Regis();  // register event handler
        incrementer.DoCount();  // trigger event
        Console.WriteLine("Number of dozens = {0}",
            dozensCounter.DozensCount);
    }
}
```
