# ClassLoader类

- ClassLoader类是一个**抽象类**
- 每个[Class](Java_Reflect_Class.md)对象都包含一个对定义它的ClassLoader的引用
- ClassLoader还负责定位资源
- defineClass()方法将字节码转换为Class对象

network class must define findClass() and loadClass()

```java
class NetworkClassLoader extends ClassLoader {
    String host;
    int port;

    public Class findClass(String name) throws {
        byte[] b = loadClassData(name);
        return defineClass(name, b, 0, b.length);
    }

    private byte[] loadClassData(String name) {
        // load the class data from network 
    }
}
```

## 抽象方法

getResource()

- 默认实现首先在parent class loader中搜做指定资源
  - 如果parent is null, 则搜索JVM的内置class loader
  - 如果没有找到，则调用findResource()方法

> 当前目录`.`, 同[-cp](Java_Command_Java.md)指定的classpath路径

URL findResource(String name)

- 返回被查找资源的URL, Class Loader应该重写此方法

URL findResource(String moduleName, String name)

- 返回 **类加载器定义的** Module中的资源的URL
- 支持 **从模块加载** 的 **类加载器** 应该重写此方法
- moduleName: module name
- name: resource name
