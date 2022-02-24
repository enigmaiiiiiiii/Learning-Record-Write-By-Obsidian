# std_async函数

- 异步运行函数，函数调用结果返回到[[std_future类模板]]中
- 不指定策略的async函数

```c++
template <class Fn, class... Args>
future<typename result_of<Fn(Args...)>::type> async (Fn&& fn, Args&&... args);
```    

- 指定policy的async函数

```c++    
template <class Fn, class... Args>
future<typename result_of<Fn(Args...)>::type> async (launch policy, Fn&& fn, Args&&... args);
```    

## 参数
  - `fn` : 被调用的[[c++_可调用类型]]对象
  - `Args`: 传递给fn的参数
  - `policy`: 位掩码，执行策略, 取值
    - `std::launch::async`:异步求值, 运行一个新的线程
    - `std::launch::deferred`: 惰性求值
    - `std::launch::async | std::launch::deferred`: 自动选择policy
    
## 返回值

- `std::future<fn>`