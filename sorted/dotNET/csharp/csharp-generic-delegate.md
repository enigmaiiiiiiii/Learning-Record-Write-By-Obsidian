## 泛型委托

- `delegate R MyDelegate<T, R>(T value)`
  - 返回类型R
  - 类型参数`<T, R>`

## 协变和逆变

```c#
delegate T factory1<out T>();
delegate void factory2<in T>(T val);

class Animal {}
class Dog: Animal {}

class Program
{
    static Dog MakeDog()
    {
        return new Dog();
    }

    static void ActOnAnimal(Animal a)
    {
        Console.WriteLine(a.NumberOfLegs);
    }

    
    static void Main()
    {
        // 将返回值由派生类转换为基类
        Factory1<Dog> dogMaker = MakeDog;
        Factory1<Animal> animalMaker = dogMaker;

        Factory2<Animal> act1 = ActOnAnimal;
        Factory2<Dog> dog1 = act1;
        dog1(new Dog());
    }
}
```

- 用于**泛型委托实例化**声明的委托对象, 在类型参数所在的**派生体系中的转换**
- 协变
  - 通过类型参数中加out关键字
  - 表示**泛型委托**中返回类型参数, 可以是基类参数
- 逆变
  - 泛型委托中参数的类型参数加in关键字，可以将类型的派生类作为类型参数