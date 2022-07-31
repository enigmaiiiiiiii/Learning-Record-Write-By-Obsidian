# 预定义的函数式接口

## 常用函数式接口

|函数式接口|参数类型|返回类型|抽象方法名|描述| 其他方法 |
|--|--|--|--|--| -- |
| Runnable | 无 | void | run | 作为无参数或无返回值的动作 | |
| Supplier<T> | 无 | T | get | 提供一个T类型的值 |  |
| Consumer<T> | T | void | accept | 处理T类型的值 | andThen |
| BiConsumer<T, U> | T, U | void | accept | 处理T类型和U类型的值 | andThen |
| Function<T, R> | T | R | apply | 有一个T类型参数的函数 | compose, andThen, identity |

## 基本类型函数式接口

|函数式接口|参数类型|返回类型|抽象方法名|
|--|--|--|--|
|BooleanSupplier|none|boolean|getAsBoolean|
|PSupplier|none|p|getAsP|
|PConsumer|p|void|accept|

