# CSharp - Generic Delegate

## Take A Look

`delegate R MyDelegate<T, R>(T value)`

- `<T, R>` is the type parameters
  - `R`: return type
  - `T`: parameter type

## Covariance and Contravariance

what's for:

- For Generic Delegate instantiation, the conversion of the [type parameter]() in the **derived hierarchy**

what is Covariance

```c
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
        // 
        Factory1<Dog> dogMaker = MakeDog;
        Factory1<Animal> animalMaker = dogMaker;

        Factory2<Animal> act1 = ActOnAnimal;
        Factory2<Dog> dog1 = act1;
        dog1(new Dog());
    }
}
```

- Covariance
  - 通过类型参数中加out关键字
  - 表示**泛型委托**中返回类型参数, 可以是基类参数
- Contravariance
  - 泛型委托中参数的类型参数加in关键字，可以将类型的派生类作为类型参数

