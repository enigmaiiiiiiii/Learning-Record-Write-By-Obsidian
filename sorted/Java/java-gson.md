# Gson

## Maven Dependency

```xml
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.8.6</version>
</dependency>
```

## Json to Object

- `fromJson(String json, Class<T> classOfT)`
- param `json` also can be [Reader](java-io.md), JsonElement

Point.java

```java
public class Point {
    private double x;
    private double y;
}
```

point.json

```json
{
    "x": 1.0,
    "y": 2.0
}
```

Main.java

```java
Gson gson = new Gson();
Point point = gson.fromJson(new FileReader("point.json"), Point.class);
```

## Object to Json

toJson(Object src)

## GsonBuilder

- to build a custom gson instance other than default

take a look

```java
Gson gson = new GsonBuilder()
    .registerTypeAdapter(Id.class, new IdTypeAdapter())
    .enableComplexMapKeySerialization()
    .serializeNulls()
    .setDateFormat(DateFormat.LONG)
    .setFieldNamingPolicy(FieldNamingPolicy.UPPER_CAMEL_CASE)
    .setPrettyPrinting()
    .setVersion(1.0)
    .create();
```

## TypeAdapter

- Configuration Of [GsonBuilder](#gsonbuilder)
- 定义如何将一个对象转换为Json

> when converts class to Json, Default Gson use built-in type adapter. If default type adapter is not appropriate for a type, extends this class to customize the conversion

[demo](java-code-snippet-gson-typeadapter.md)

## `@SerializedName`

- define json field name

Point.java

```java
public class Point{
    @SerializedName("scaleX")
    private double x;

    @SerializedName("scaleY")
    private double y;

    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }
}
```

App.java

```java
public Class App {
    public static void main(String[] args) {
        Gson gson = new Gson();
        Point point = new Point(1.0, 2.0);
        String json = gson.toJson(point);
        System.out.println(json);
    }
}
```

```json
{"scaleX":1.0,"scaleY":2.0}
```