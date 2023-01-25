## Java IOStream

InputStream

- 读取数据read(): 读取下一个字节, **阻塞**直到input data is available

OutputStream

- public void write(int b): 写出一个byte
- public void write(byte[] b): 写出一个byte数组

```java
byte[] data = new byte[1024];
//...
out.write(data);
out.write(13);  // 若此处抛出IOException
```

> 推测: 可能在write(byte[] data)中时资源已经异常，data只写入了buffer, 所以没有抛出异常，而write(int b)会flush buffer, 因此在此处抛出异常
