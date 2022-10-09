# 泛型

```java
public class Generic<T> {
    private T key;

    public Generic(T key) {
        this.key = key;
    }

    public T getKey() {
        return key;
    }
    
    // 静态方法
    public static<T> Generic<T> getGeneric(T key) {
        return new Generic<>(key);
    }

    // 返回空类型泛型
    public static Generic<Void> getGeneric() {
        return new Generic<>(null);
    }
}
```

## Void
