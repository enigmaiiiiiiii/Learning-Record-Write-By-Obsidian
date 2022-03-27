# 枚举接口

- IEnumerable和IEnumerator
- [c++中的迭代器](c++_iterator.md)

```c#
public interface IEnumerator
{
    bool MoveNext();
    object Current{get;}
    void Reset();
}
```

- MoveNext(): 移动到下一个元素
- Current: 当前位置的元素
- Reset
