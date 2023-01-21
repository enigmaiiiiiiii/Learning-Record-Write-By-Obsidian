# 字段初始化方式

## 显式初始化

```java
class Employee {
    private String name = "";
}
```

## 初始化块

- 静态初始化块， 普通块前加static

```java
class Employee {
    {
        id =nextId;
        nextId++;
    }

    static {
        Random rd = new Random();
        nextId = rd.nextInt(10000);
    }
}
```


## 实例域初始化

- 构造类的实例时， 初始化块就会被执行

## 静态初始化块

- static标记的代码块`static {...}`
- [类第一次加载]时，会执行static block
- 可以用于加载资源到变量, 避免多次加载的IO消耗