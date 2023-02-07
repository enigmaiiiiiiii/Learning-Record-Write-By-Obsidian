# 迭代器

## get Iterator

```java
Iterator it = coll.iterator();
```

- 迭代器起始位置在集合的第一个元素之前

## 遍历元素

- it.next(): 返回集合coll中下一个元素
- it.hasNext(): 判断集合coll中是否还有元素

## remove()方法

- 如果在迭代过程中，底层集合以任何方式被修改，而不是通过调用这个方法，那么迭代器的行为是未被指定的，除非一个覆盖类指定了一个并发修改策略。
- 调用forEachRemaining方法后，迭代器行为未指定
