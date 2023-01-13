# threadpool

- 构造函数ThreadPool
  - 构造时创建一个线程并分离，不断执行从线程池中取出任务并执行
- 执行线程池中的任务时, 可以加入任务，即执行`task->AddTask()`
- 上锁的情况
  - 向任务池中加入任务
  - 从任务池中取出任务

simle threadpool

- threadpool.h

```c++
class ThreadPool {
 public:
  ThreadPool(int thread_number = 8, int max_requests = 10000);
  ~ThreadPool();
  bool Append(T* request);

 private:
  static void* Worker(void* arg);
  void Run();

 private:
  int m_thread_number;  // 线程池中的线程数
  int m_max_requests;   // 请求队列中允许的最大请求数
  pthread_t* m_threads; // 描述线程池的数组，其大小为m_thread_number
  std::list<T*>
      m_workqueue; // 请求队列, 用于存放请求的队列, 使用list模板类
  Locker m_queuelocker; // 保护请求队列的互斥锁
  Sem m_queuestat;      // 是否有任务需要处理
  bool m_stop;          // 是否结束线程
};
```

- threadpool.cpp

```c++

```