# Singleton

## What is Singleton

- ensures that a class has only one instance and provides a global point of access to that instance

## use scenarios

- database connections
- logging
- configuration

## java

```java
public class Singleton {
    /*
     * 1. private constructor, prevent create object from outside
     * 2. private static variable, to ensure only one instance
     * 3. provide static method, for outside to get the instance
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