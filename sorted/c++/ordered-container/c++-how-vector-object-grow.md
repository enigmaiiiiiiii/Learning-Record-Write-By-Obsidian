# how vector object grow

- 没有足够空间容纳新元素时,会将旧元素[**移动**](c++-object-move.md)到更大的空间，然后添加新元素

## steps

- 成员函数`size()`返回当前含有多少元素
- 成员函数`capacity()`返回容器在不分配新内存空间的前提下能保存多少元素
- 成员函数`reserve()`分配至少能容纳n个元素的内存空间
- vector在需要分配新空间时，将当前容量翻倍
- 成员函数`shrink_to_fit()`来要求vector将超出当前大小的多余内存退回系统

> shrink_to_fit只是一个请求,标准库并不保证退还内存