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

- 常用的特化类型
  - std::cmatch
  - std::wcmatch
  - std::smatch
  - std::wsmatch
  - std::pmr::cmatch
  - std::pmr::wcmatch
  - std::pmr::smatch
  - std::pmr::wsmatch
