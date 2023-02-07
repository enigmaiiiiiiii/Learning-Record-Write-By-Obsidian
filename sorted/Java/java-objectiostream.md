# 对象流

支持Serializable接口的对象才能通过流传输

## ObjectOutputStream

- 用于将对象序列化到输出流中
- ObjectOutputStream(OutputStream out): 从指定的OutputStream创建对象
- writeObject()方法将对象写入流

## ObjectInputStream

- 将文件反序列化读取到内存中
- ObjectInputStream(InputSteam in): 从指定的InputStream创建对象
- readObject(): 从流读取对象, 返回Object类型

## 特殊处理序列化/反序列化处理的对象

需要实现以下方法:

```java
private void writeObject(java.io.ObjectOutputStream stream) 
    throws IOException;
private void readObject(java.io.ObjectInputStream stream)
    throws IOException, ClassNotFoundException;
private void readObjectNoData()
    throws ObjectStreamException;
```

## 版本号

- 字段serialVersionUID来标识对象的版本号
- 若不定义，会有默认的版本号

```java
public static final long serialVersionUID = 42L;  // 序列化版本号
```

- 版本号相同，类属性不同, 兼容模式进行反序列化
  - 相同属性保留
  - 不同属性用0初始化
  - 新类不存在的属性, 丢弃
- 版本号不同，类属性不同, 不能进行反序列化, 反序列化时抛出异常

## transient关键字

- 被transiend标记的字段, 序列化时，忽略该字段
