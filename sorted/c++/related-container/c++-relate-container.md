# 关联容器

- 主要内容map, set

  > [[c++手册#关联容器]]
  
- 无序容器:unordered_map, unordered_set, unordered_multimap, unordered_multiset
- map, set等容器名称表示一个[模板](c++ template(模板).md)，因此必须指定元素类型,即键的类型和值的类型
- 键是**const**, 只能删除或增加, 不能修改
- 有序容器键类型必须**可比较**，
- 无序容器需用hash函数组织元素
- 自定义的**操作类型**必须在尖括号中紧跟元素类型给出
  - 操作类型是一种类型, 是[可调用类型](cpp-callable-type.md)
  - 函数指针指向操作函数
  - **自定义类型**要使用**有序容器**，需要定义一个[stric weak order](https://en.wikipedia.org/wiki/weak-ordering)
  - **自定义类型**要使用**无序容器**，需要定义一个hash模板
  - 如`set<keytype,decltype(CompareFunc)*>`

[[c++中的strict weak order]]

[[cpp-pair]]

[[关联容器迭代器操作]]

[[关联容器算法]]

[[关联容器添加元素]]

[[关联容器删除元素]]

[[map下标操作]]

[[关联容器查找元素]]

[[无序容器]]

[[无序容器操作]]