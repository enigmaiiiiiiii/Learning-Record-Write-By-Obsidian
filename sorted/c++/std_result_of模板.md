# std::result_of

- 用来获得[[可调用类型]]的返回类型

## 构造函数

```c++
template< class >  
class result_of;
  
template<class F, class... ArgTypes>  
class result_of<F(ArgTypes...)>;

template<class F, class... ArgTypes>  
class invoke_result;
```

- `F`必须是[[可调用类型]], 函数的引用，或可调用表达式的引用

## 嵌套类型(辅助类型) 

- `std::result_of<F(ArgTypes)>::type`:  表示以 *参数类型ArgTypes* 调用 *可调用类型F* 的*返回类型*
  > F是可调用类型，不是函数名