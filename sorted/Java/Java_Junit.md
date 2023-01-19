# Java Junit

- framework to write repeatable test

## take a look in maven

- add dependency in pom.xml

```xml
<dependency>
  <groupId>junit</groupId>
  <artifactId>junit</artifactId>
  <version>4.12</version>
</dependency>
```

CalculatorTest.java

```java
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class CalculatorTest {

  @Test
  public void evaluatesExpression() {
    Calculator calculator = new Calculator();
    int sum = calculator.evaluate("1+2+3");
    assertEquals(6, sum);
  }
}
```

## API

`public static assertEquals(Object unexpected, Object actual)`

- if two object not equal, an `AssertionError` is thrown

