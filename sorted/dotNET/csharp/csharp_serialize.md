# 序列化

- 用于保存对象状态，并在需要时重建对象
- 通过序列化开发人员可以:
  - 使用Web服务将对象发送到远程应用程序
  - 将对象从一个域传递到另一个域
  - 将对象通过防火墙传递为JSON或XML字符串
  - 跨应用程序维护安全或用户特性的信息

## 序列化格式: 二进制和XML序列化, json序列化

- 二进制和XML序列化

`System.Runtime.Serialization`包含用于对二进制和XML进行序列化和反序列化

- json序列化

`System.Text.Json`包含json序列化和反序列化

## 序列化方式: 基本和自定义序列化

- 基本序列化: 唯一要求，类应用[SerializableAttribute](csharp_attribute.md)特性
- 自定义序列化: 除基本序列化要求外还要实现[ISerializable]接口
