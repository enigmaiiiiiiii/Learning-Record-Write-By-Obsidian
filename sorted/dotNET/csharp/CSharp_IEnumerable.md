## IEnumerable接口

- 只有一个成员GetEnumerator, 返回[IEnumerator接口](CSharp_IEnumerator_Interface.md)的方法称为枚举器

## `IEnumerable<T>`和`IDisosable`

- `IEnumerable<T>`继承自`IDisposable`

> 这样枚举器就可以保有像数据库连接这样的资源，而且可以在枚举结束后(或中途停止)确保释放这些资源