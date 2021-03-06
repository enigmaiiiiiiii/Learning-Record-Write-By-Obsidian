# 容器操作

[[c++手册#容器操作]]

- 某些操作是所有容器都提供的
- 一些操作针对**顺序容器**，有的仅针对**关联容器**，有的针对**无序容器**
- 还有一些只适用于小部分容器
- 迭代器范围首元素到尾后元素, $[begin, end)$
  - begin等于end时，范围为空  
  - begin与end不相等，则范围至少包含一个元素，begin指向第一个元素
  - 我们可以对begin递增若干次,使begin == end为true
- cbegin和cend是容器的const成员，**返回类型**为const_iterator，属于底层**const**
- cbegin和cend可以**读**，不可以**写**
- c++过去必须**显示**声明用那种迭代器; 新标准实现用**auto**声明迭代器

  ```mermaid
  graph LR
  A[普通iterator] --可以转化--> B[const_iterator]
  B --不能转化--> A
  ```

  ```c++
  while (begin != end) {
      *begin = val;
      ++begin;
  }
  ```