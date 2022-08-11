# 集合

- 元素是[引用类型](Java_Variable.md)
  - 集合中保存的是变量的值, 不是对象本身
  - 基本类型存入集合会执行[装箱](Java_Boxer.md)转换

[通用接口](Java_Collection_Interface.md)

[具体实现](Java_Collection_Implementation.md)

[迭代器](Java_Collection_Iterator.md)

## 创建集合

- `Collection<T> c = new ArrayList<T>();`: 创建空集合
- `Collection<T> c = new ArrayList<T>(c1);`: 用另一个集合的元素创建一个新的集合

## 集合的实例方法

- contains(Object o): 如果集合包含指定的元素，则返回true

> 当且仅当该集合包含至少一个元素e，Objects.equals(o, e);

## Collections类方法

> Collections仅由操作集合和返回集合的静态方法组成

- `public static <T extends Comparable<? super T>> void sort(List<T> list)`
  - 集合元素需要实现Comparable接口
- static <T> void sort(List<T> list, Comparator<? super T> c): 用指定的比较器对集合进行排序
  - Comparator<? super T> c: 比较器参数, 提供Comparator比较器参数
  - 集合元素没有特殊要求

### interface Comparator\<T>

- 函数式接口
- 包含一个抽象方法: `int compare(T o1, T o2)`
  - 返回负值表示: o1 < o2
  - 返回零: o1 == o2
  - 返回正值表示: o1 > o2
- 必须保证
  - `signum(compare(x, y))` 等于 `-signum(compare(y, x))`
  - `(compare(x, y) > 0) && (compare(y, z) > 0)` ==> `compare(x, z) > 0`
  - `compare(x, y) == 0` ==> `signum(compare(x, z)) == signum(compare(y, z))`

### interface Comparable\<T>

- 实现类的natural ordering, 可以使用方法:
  - `Collections.sort(List<T> list)`
  - `Arrays.sort(Object[] a)`

## Arrays类

- `Arrays.asList(array)`: 数组转集合
  - 返回定长list
  - 实现了部分collection方法, 不包括可改变size的方法
- `Arrays.toString()`: 输出数组字符串内容  
