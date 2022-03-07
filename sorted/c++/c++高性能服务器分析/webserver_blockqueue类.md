# blockqueue

- 生产者push_front()
- 消费者pop()
- 生产者和消费者的执行速度不同

通过条件变量平衡生产者消费者速度

- 条件变量加lock_guard