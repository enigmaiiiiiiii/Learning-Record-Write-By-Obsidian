# JDBC API

- `java.sql.DriverManager`: 管理一组JDBC驱动程序的工具类
  - `java.sql.Connection getConnection(String url, String usr, String password)`: 创建connection对象 
- `interface javax.sql.DataSource`: 实现DataSource的对象是DriverManager的替代品
  - 由数据库供应商实现接口
- `java.sql.Connection`: 数据库连接对象 
  - `Statement createStatement()`: 创建数据库语句对象
- `Statement`: 数据库语句对象
  - `boolean execute(String sql)`: 执行任意sql语句
  - `int executeUpdate(String sql)`: 执行SQL修改语句
    - 包括INSERT, UPDATE, DELETE 
    - 返回生效的行数
  - `ResultSet executeQuery(String sql)`: 查询语句, 返回结果集

## `ResultSet`: 

- Object of query result 

getter方法

- `String getString(String columnlabel)`: 返回当前指向条目的`columnlabel`String值
- `String getString(int columnIndex)`
  - 返回第columnIndex列的字符串
  - 如果值是SQL NULL, 返回null
- `Double getDoule(String columnlabel)`
  - 第一行的columnIndex是1
  - 返回当前指向条目的`columnlabel`double值
  - 如果值是SQL NULL, 返回0
- `int getInt(int columnIndex)`: 
  - 第一行的columnIndex是1
  - 返回第columnIndex的值
  - 如果值是SQL NULL, 返回0

***

- `boolean absolute(int row)`移动到指定的行号
- `boolean wasNull()`方法
  - 确认最后读取的值是否为SQL NULL
  - 确认的是最后调用getter方法的列的值

### PreparedStatement

- 表示预编译的SQL语句对象
- 使用`Connection.prepareStatement(String sql)`创建PreparedStatement对象
  - 参数`sql`: SQL语句, 可能包含`?`作为参数占位符  
- 可以多次使用
- 可以用来避免[sql注入](sql-injection)问题

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

