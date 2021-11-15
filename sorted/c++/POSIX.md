## POSIX

- 旧方法

```c++
#include <pthread.h>  
#include <iostream>  
  
static long long total = 0;  
pthread_mutex_t m = PTHREAD_MUTEX_INITIALIZER;   
  
void *func(void *) {  
  long long i;  
  for (i = 0; i < 100000000LL; i++) {  
    pthread_mutex_lock(&m);  // 锁线程
    total += i;  
    pthread_mutex_unlock(&m);  // 解锁线程
  }  
  return nullptr;  
}  
  
int main() {  
  pthread_t thread1, thread2;  
  pthread_create(&thread1, nullptr, &func, nullptr);  
  pthread_create(&thread2, nullptr, &func, nullptr);  
  pthread_join(thread1, nullptr);  
  pthread_join(thread2, nullptr);  
  std::cout << total << std::endl;  
  return 0;  
}
```