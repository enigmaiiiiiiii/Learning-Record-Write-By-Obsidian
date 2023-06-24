# Gson TypeAdapter

Point.java

```java
public class Point {

  private double x;

  private double y;

  public Point(double x, double y) {
    this.x = x;
    this.y = y;
  }

  public double getX() {
    return x;
  }

  public double getY() {
    return y;
  }
}
```

PointAdapter.java

```java
public class PointAdapter extends TypeAdapter<Point> {
  public Point read(JsonReader reader) throws IOException {
    if (reader.peek() == JsonToken.NULL) {
      reader.nextNull();
      return null;
    }
    String xy = reader.nextString();
    String[] parts = xy.split(",");
    int x = Integer.parseInt(parts[0]);
    int y = Integer.parseInt(parts[1]);
    return new Point(x, y);
  }
  public void write(JsonWriter writer, Point value) throws IOException {
    if (value == null) {
      writer.nullValue();
      return;
    }
    String xy = value.getX() + "," + value.getY();
    writer.value(xy);
  }
}
```

Main.java

```java
public class App {
  public static void main(String[] args) throws IOException {
    Gson gson = new GsonBuilder()
      .registerTypeAdapter(Point.class, new PointAdapter())
      .create();
    String json = gson.toJson(new Point(1, 2));
    System.out.println(json);
  }
}
```