# thread

- 原子类型和内置类型是互相对应的，如atomic_int 对应内置类型 int 
- 可通过模板定义需要的原子类型, 通用形式：`std::atomic<T> t;`

```c++
#include <atomic>
#include <thread>
#include <iostream>

std::atomic_llong total {0};  // 定义一个原子数据类型 
long long tt = 0;  
void func(int) {  
  for (long long i = 0; i < 100; i++) {  
    total += i;  
 }  
}  

int main() {  
  std::thread t1(func, 0);  
  std::thread t2(func, 0);  
  t1.join();  
  t2.join();  
  std::cout << tatal << std::endl;
  return 0;  
}
```