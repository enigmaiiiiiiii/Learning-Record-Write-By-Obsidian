# 单例模式

```java
public class Singleton {
    /*
     * 1. 私有化构造方法, 防止外部创建对象
     * 2. 私有化静态变量, 用于保存唯一的实例
     * 3. 提供静态方法, 用于获取唯一的实例
     */
    private static Singleton instance = new Singleton();

    private Singleton() {}

    public static Singleton getInstance() {
        return instance;
    }
}
```

- 最简单的单例模式, 也是饿汉模式: 类加载时创建
- 懒加载: 类加载时不创建, 调用时创建


```java
public class Singleton {
    private static Object lock = new Object();
    private static Singleton instance;

    private Singleton() {}

    public static Singleton getInstance() {
        if (instance == null) {

            synchronized (lock) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }

        return instance;
    }
}
```
```