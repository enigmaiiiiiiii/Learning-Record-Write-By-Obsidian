# 线程

-  线程共享全局变量，和进程的区别之处
- 线程上下文：线程结构，用户结构，栈，私有存储区域，线程属性和指令
- 线程的调度是随机的，因此不对线程顺序做任何假设


## 1. pthread_create()

```c++
#include <pthread.h>

int pthread_create(pthread_t *thread, 
                   const thread_attr *attr,
                   void *(*start_routine*)(void *),
                   void *arg);
```

- 成功返回0， 失败返回常数
- 参数：
  - thread: 成功返回之前，将创建的线程id存入thread参数
  - attr: 指向thread_attr的指针, 设置线程的attribute
  - start_routine: 
  - arg: 传递给start_routine的唯一参数

## 2. pthread_jion()

```c++
#include <pthread.h>
int pthread_join(pthread_t thread, void **retval)
```

-  等待线程thread完成, 若retval不为NULL, 则目标线程提供给pthread_exit()的值复制到retval指向的对象
- 所以相当于是阻塞等待
- 成功返回0， 失败返回错误数字
- 参数
  - thread: 
  - retval: 如果retval参数不为NULL，将退出状态拷贝到retval指向的地址

## 3. pthread_exit()

```c++
#include <pthread.h>
void pthread_exit(void *retval);
```

- 终止线程并将想要保存的值存入retval指向的地址,
- 当线程终止时，线程共享的资源不会被释放
- pthread_exit()和return, 通过return返回会回收所有资源
- pthread_exit将值保存到retval中

[[理解线程终止]]

## 4. pthread_cancel()

## 5. pthread_detached()

```c++
#include <pthread.h>
int pthread_detach(pthread_t thread);
```

- 将进程thread设置成可分离的
- 一个可分离的进程终止后，系统会自动回收它的资源，而不需要其他进程去join
- 参数thread: 进程id

## 6. 线程属性 

```c++
#include <pthread.h>
int pthread_attr_init(pthread_attr_t *attr);
int pthread_attr_destroy(pthread_attr_t *attr);
```

### 创建和销毁线程属性pthread_attr_t对象

- pthread_attr_init：创建指针，指向线程pthread_attr_t结构体对象
- pthread_attr_destroy: 销毁attr指向的pthread_attr_t对象

### 查询和设置分离属性

```c++
int pthread_attr_getdetachstate(pthread_attr_t *attr, int *detachstate);
int pthread_attr_setdetachstate(const pthread_attr_t *attr, int detachstate);
```

- 参数
  - detachstate: 设置属性值
    - PTHREAD_CREATE_DETACHED: 用该参数创建的pthread_attr_t 对象, 作为pthread_create的的参数创建的线程, 这个线程是分离状态
    - PTHREAD_CREATE_JOINABLE: 用来创建joinable线程
  - attr: pthread_attr_t结构体
  
  ### 查询和设置线程栈
  
## 互斥变量
  
- 初始化后，变量处于未锁状态
- 一般由主线程初始化
- 两种初始化方法
  
```c++
#include <pthread.h>  
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
int pthread_mutex_init(pthread_mutex_t *restrict mutex,
                       const pthread_mutexatttr_t *restrict attr);
                       // attr指定mutex的属性
int pthread_mutex_destroy(pthread_mutex_t *mutex);  // 销毁                       
```

- 变量类型
  - PTHREAD_MUTEX_NORMAL: 基本类型 
  - PTHREAD_MUTEX_RECURSIVE: 递归类型，多次加锁，相同次数解锁
  - PTHREAD_MUTEX_ERRORCHECK: 报告错误
  - PTHREAD_MUTEX_DEFAULT: 默认类型
- 互斥变量属性
   - 类似线程属性可以(设置)set和(查询)get

```c++  
#include <pthread.h>
int thread_mutexattr_init(pthread_mutexattr_t *attr);
int thread_mutexattr_destory(pthread_mutexattr_t *attr);
```

### 加锁和解锁

```c++
#include <pthread.h>
int pthread_mutex_lock(pthread_mutex_t *mutex);  // 加锁, 调用线程占有
int pthread_mutex_trylock(pthread_mutex_t *mutex);  // 
int pthread_mutex_unlock(pthread_mutex_t *mutex);
```

- 如果mutex类型是PTHREAD_MUTEX_NORMAL, 重复对mutex加锁会导致死锁

## 读写锁

```c++
#include <pthread.h>
pthread_rwlock_t rwlock = PTHREAD_RWLOCK_INITIALIZER;
int pthread_rwlock_init(pthread_rwlock_t *restrict rwlock,
                        const pthread_rwlock_t *restrict attr);
int pthread_rwlock_destroy(pthread_rwlock_t *rwlock);  
```

- 读写锁创建后, 其属性可以查看，不能改变

```c++
#include <pthred.h>
// 创建读写锁属性对象
int pthread_rwlockattr_init(pthread_rwlockattr_t *attr);
int pthread_rwlockattr_destory(pthread_rwlockattr_t *attr);
```

- 

