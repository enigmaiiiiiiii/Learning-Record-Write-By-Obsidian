# java point

## 通用mapper

1. JDBC
2. jpa
3. haibernate
4. mybatis

## nginx反向代理

- nginx作为公网的访问地址
- 用户正常访问会发送到nginx, nginx再转发到

## redis中数据持久化策略

[note](Redis_Principle.md#redis持久化)

- RDB: 保存快照, 效率高
- AOF: 保存操作日志

## redis为什么分片

- 方便动态扩容

## 单点登录的实现

- 用户访问单点登录器服务器，输入用户名密码
- 如果是正确的，生成一个token，返回给用户
- 前端把token存储在cookie中
- 前端在此发送请求携带此token

## controller 并发安全

- controller是单例的
- 如果在controller中有成员变量，那么就会有线程安全问题
- 将类变量定义为, 使用threadlocal解决

## Spring事务管理类型

编程式事务管理

声明式事务管理

- 使用`@transaction`注解

## SpringMVC的主要组件

- DispatcherServlet
- HandlerMapper: 处理器映射
  - 根据请求的url，找到对应的Controller方法

## SpringMVC和AJAX的交互

通过Jackson可以把java对象转换为json字符串

## SpringMVC工作原理

1. DispatcherServlet
2. HandlerMapping返回处理方法handler
3. HandleAdapter调用处理方法

## mybatis工作流程

1. 读取配置文件
2. 加载映射文件
3. 创建SqlSessionFactory, SqlSessionFactory程序运行时建立, 程序结束时销毁
4. SqlSessionFactory创建SqlSession, SqlSession随方法创建, 方法结束时销毁
5. Executor根据SqlSession参数生成SQL语句
6. 生成MappedStatement(映射信息封装对象)对象
7. 输入参数，List, Map, POJO
8. 输出结果, 包装成java对象