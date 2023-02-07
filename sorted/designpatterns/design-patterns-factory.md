# 工厂模式

## 特点



## 接口

Creator.java

- Creator接口, 包含一个抽象方法, 用于创建Product对象

```java
public interface Creator {
    public Product factory();
}
```

Product.java

- Product接口

```java
public interface Product {

    public void method1();
    public void method2();
}
```

## 实现

ConcreteCreator.java

```java
public class ConcreteCreator implements Creator {

    @Override
    public Product factory() {
        return new ConcreteProduct();
    }
}
```

ConcreteProduct.java

```java
public class ConcreteProduct implements Product {

    @Override
    public void method1() {
        // method body 
    }

    @Override
    public void method2() {
        // method body
    }
}
```

## 应用

```java
public class FactoryMethodDemo {
    public static void main(String[] args) {
        Creator creator = new ConcreteCreator();
        Product product = creator.factory();
        product.method1();
        product.method2();
    }
}
```

