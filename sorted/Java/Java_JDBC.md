# JDBC

## 驱动程序

- 运行访问数据库的驱动程序时, 需要将驱动程序的[jar文件包](Java_Jar_File.md)包括到`classpath`(类路径)
  - 可以使用[命令行程序](Java_Command_Java_Options.md)添加类路径 
  - 或使用构建工具, 如maven[添加jar依赖](Maven_Import_Dependency.md)

## 数据库API

- `DriverManager`: 管理一组JDBC驱动程序的工具类
  - `Connection getConnection(String url, String usr, String password)`: 创建connection对象 
- `Connection`: 数据库连接对象 
  - `Statement createStatement()`: 创建数据库语句对象
- `Statement`: 数据库语句对象
  - `boolean execute(String sql)`: 执行任意sql语句
  - `int executeUpdate(String sql)`: 执行数据修改, 返回生效的行数
  - `ResultSet executeQuery(String sql)`: 查询语句
- `ResultSet`: 查询结果对象
  - `String getString(String columnlabel)`: 返回当前指向条目的`columnlabel`String值
  - `Double getDoule(String columnlabel)`: 返回当前指向条目的`columnlabel`double值

### PreparedStatement

- 表示预编译的SQL语句对象
- 使用`Connection.prepareStatement(String sql)`创建PreparedStatement对象
  - 参数`sql`: SQL语句, 可能包含`?`作为参数占位符  
- 可以多次使用
- 可以用来避免[sql注入](SQL_Injection)问题

方法

- `setString(int parameterIndex, String x)`: 将指定参数设置为String对象
- `executeQuery()`: 执行其中的sql语句

example

```java
BigDecimal sal = new BigDecimal("153833.00");
PreparedStatement pstmt = con.prepareStatement("UPDATE EMPLOYEES SET SALARY = ? WHERE ID = ?");
pstmt.setBigDecimal(1, sal);
pstmt.setInt(2, 110592);
```

## 数据库连接池


