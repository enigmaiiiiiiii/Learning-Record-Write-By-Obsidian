# 异步方法

- async修饰符
- 包含await表达式
- 返回void， `Task`,  `Task<T>`
- 参数不能为out, ref
- 命名约定，以Async为后缀

## Task And Task<T>

- Task
  - 不返回值的异步执行的[操作]
- Task<T>
  - 返回类型为T的异步操作
- Status属性确定任务状态
- 
