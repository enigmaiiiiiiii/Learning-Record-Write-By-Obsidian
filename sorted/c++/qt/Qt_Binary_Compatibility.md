# 二进制兼容

- 在设计像 Qt 这样的类库的时候，理想的行为应该是[动态连接](GCC_Build_Shared_Libraries.md)到 Qt 的应用程序，甚至在 Qt 类库升级或者替换到另外一个版本的时候，不需要重新编译就可以继续运行。

> 例如，你的应用程序 _CuteApp_ 是基于 Qt 4.5 的，你应该可以把你的 Qt 由4.5升级到 Qt 4.6 ，而你用 Qt 4.5 构建的 CuteApp 应该还可以运行

为什么会破坏二进制兼容

widgetlib 1.0

```c++
class Widget
{
// ...
private:
   Rect m_geometry;
};

```

```c++
class Label : public Widget
{
public:
   // ... 
   String text() const 
   {
       return m_text;
   }

private:
    String m_text;
};
```

更新widgetlib 1.1

```c++
class Widget
{
   // ...
private:
    Rect m_geometry;
    String m_stylesheet; // NEW in WidgetLib 1.1
};
```

- 我们发布了WidgetLib 1.1，但却发现在WidgetLib 1.0下编译并运行良好的CuteApp崩溃了!

内存中的格式类似这样
|Label object layout in WidgetLib 1.0 | Label object layout in WidgetLib 1.1|
|--|--|
|m_geometry<offset 0>|m_geometry <offset 0>|
|---|m_stylesheet <offset 1>| 
|m_stylesheet <offset 1>|---| 
|---|m_text <offset 2>|


