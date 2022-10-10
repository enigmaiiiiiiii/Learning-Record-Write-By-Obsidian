# Spring JDBC

## 处理事务

- `@Transactional`注解的方法 
 - 在方法执行前开启[事务](../../数据库/MySQL_Transaction.md)
 - 执行完后提交事务
 - 如果方法执行过程中出现异常，则回滚事务

大致过程: 

```java
try {
    // 开启事务
    transactionManager.beginTransaction();
    // 执行方法
    Object result = method.invoke(target, args);
    // 提交事务
    transactionManager.commit();
    return result;
} catch (RuntimeException e) {
    // 回滚事务
    transactionManager.rollback();
    throw e;
}
```

## `@Transactional`注解

- `@Transactional(rollbackFor=ExceptionClass, noRollbackFor=ExceptionClass)`
  - `rollbackFor`: 指定哪些异常需要回滚事务, 参数值为异常类, 不是字符串
  - `noRollbackFor`: 指定哪些异常不需要回滚事务, 参数值为异常类, 不是字符串
- 用于接口方法, 不能添加在**接口实现类**的**非接口方法**上
