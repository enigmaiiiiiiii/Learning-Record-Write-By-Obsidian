# 时间API

- LocalDate, LocalTime, LocalDateTime

## LocalDateTime

获取February 20, 2015, 6:30am

```java
LocalDateTime.of(2015, Month.FEBRUARY, 20, 6, 30);
LocalDateTime.parse("2015-02-20T06:30:00");
```

+1 day

```java
localDateTime.plusDays(1);
```

## LocalTime: 时间

获取当前时间

```java
LocalTime now = LocalTime.now();
```

通过字符串解析时间

```java
LocalTime sixThirty = LocalTime.parse("06:30");
```

## LocalDate: 日期类型

当前日期的LocalDate对象

```java
LocalDate localDate = LocalDate.now();
```
代表February 20, 2015的LocalDate对象

```java
LocalDate.of(2015, 02, 20);
LocalDate.parse("2015-02-20");
```

当前日期 +1 day

```java
LocalDate tomorrow = LocalDate.now().plusDays(1);
```

当前日期 -1 month

```java
LocalDate previousMonthSameDay = LocalDate.now().minus(1, ChronoUnit.MONTHS);
```

- ChronoUnit: 枚举类，表示时间单位
  - ChronoUnit.DAYS
  - ChronoUnit.WEEKS
  - ChronoUnit.MONTHS
  - ChronoUnit.YEARS
  - ...

返回2016-06-12是星期几和本月的第几天

- DayOfWeek: 枚举类，表示星期几

```java
DayOfWeek dayOfWeek = LocalDate.parse("2016-06-12").getDayOfWeek();
int twelve = LocalDate.parse("2016-06-12").getDayOfMonth();
```

检查日期是否在闰年

```java
boolean leapYear = LocalDate.now().isLeapYear();
```

## ZonedDateTime: 带时区的日期时间

获得所有ZoneId

```java
Set<String> allZoneIds = ZoneId.getAvailabelZoneIds();
```
paris zoneid

```java
ZoneId zoneId = ZoneId.of("Europe/Paris");
```
zone time

```java
ZoneDateTime zoneDateTime = ZonedDateTime.of(LocalDateTime, zoneId);
```

## TemporalAccessor

- 框架级接口
- 定义对时间对象(如日期、时间、偏移量或这些对象的某种组合)的只读访问。
- 这是日期、时间和偏移量对象的基本接口类型。它是由那些可以作为Field或查询提供信息的类实现的。

## TemporalField

`public interface TemporalField`

## ChronoField

`public enum ChronoField extends Enum<ChronFiled> implements TemporalField`