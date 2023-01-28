# java.util.Properties

## Introduction

- a persistent set of properties
- can be saved to stream
- can be loaded from stream

## Load From Stream

`load(Reader reader)`

- load property list form **line-oriented character stream**

sample.properties

```properties
name = dopamine
number = large
```

sample.java

```java
public class PropertiesLoad {
    public static void main(String[] args) throws IOException {
        Properties properties = new Properties();
        properties.load(new FileReader("sample.properties"));
        for (String k: properties.stringPropertyNames()) {
            System.out.println(k + " = " + properties.getProperty(k));
        }
    }
}
```

## getProperty(String key)

## setProperty(String key, String value)

- return previous value or null

