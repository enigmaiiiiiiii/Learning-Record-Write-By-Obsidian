# 事件

- 事件是一个成员
- **订阅者** 将 **方法** 注册到 **发布者** 的 **事件成员**

[事件的三个部分: 发布，注册，触发](CSharp_What_is_Events.md)

[标准事件](CSharp_Events_EventsHandles.md)

## 事件访问器

```c#
public event EventHandler CountADozen
{
    add
    {
        ...
    }
    remove
    {
        ...
    }
}
```