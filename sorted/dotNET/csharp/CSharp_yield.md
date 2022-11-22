# yield

可通过使用 foreach 语句或 [LINQ](CSharp_LINQ.md) 查询来使用从迭代器方法返回的序列。 `foreach` 循环的每次迭代都会调用[迭代器](CSharp_Iterator.md)方法。

- yield的语句出现的**方法**, **运算符**或**get访问器**是[迭代器](CSharp_Iterator.md)

## 解释

- 迭代器方法运行到 `yield return` 语句时，会返回一个 `expression`，并保留当前在代码中的位置。 下次调用迭代器函数时，将从该位置重新开始执行。
- yield return表示这是当前枚举器产生的下一个元素

```csharp
public IEnumerable<int> GetNumbers()
{
    yield return 1;
    yield return 2;
    yield return 3;
}
```