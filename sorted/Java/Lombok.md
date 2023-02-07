# Lombok

- 简化POJO类的开发, 添加注解，编译期自动生成getter/setter/toString/equals/hashCode等方法

## maven dependency

```xml
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.20</version>
    <scope>provided</scope>
</dependency>
```

## annotation

[lombok annotation](lombok-annotation.md)

## `@Data`

- 注解在实体类上

## `@Getter`

## `@Setter`

## `@ToString`

## `@EqualsAndHashCode`

## `@RequiredArgsConstructor`

## `@NoArgsConstructor`

- 自动生成无参构造函数

## `@AllArgsConstructor`

- 自动生成全参构造函数