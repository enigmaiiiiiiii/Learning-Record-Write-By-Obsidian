# regex_match

- 声明

```c++
template<class BidirIt, class Alloc = std::allocator<std::sub_match<bidirIt>>
class match_result;
namespace pmr {
  template<class BidirIt>
  using match_results = std::match_results<BidirIt,
                                           std::pmr::polymorphic_allocator<std::sub_match<BidirIt>>>
}
```

- 常用形式:
  - `regex(str, regex)`
  - `regex(first, last, regex)`
- 返回值
  - 存在返回true，失败返回false
- 参数
  - first, last: 字符[迭代器](c++-iterator.md)，给定目标字符串范围
  - str: 目标字符串, [std::string](c++-std-string.md)类
  - regex: 正则表达式
- 常用的特化类型
  - std::cmatch
  - std::wcmatch
  - std::smatch
  - std::wsmatch
  - std::pmr::cmatch
  - std::pmr::wcmatch
  - std::pmr::smatch
  - std::pmr::wsmatch
