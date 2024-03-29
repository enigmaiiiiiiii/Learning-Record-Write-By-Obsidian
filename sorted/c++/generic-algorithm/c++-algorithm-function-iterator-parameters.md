# C++ - algorithm function iterator parameters

- 容器类型中返回迭代器的成员函数
- 插入迭代器
  - 可以通过插入迭代器向容器中添加元素
  - 接受一个容器或容器引用作为参数
  - 常常用来作为标准库算法函数的参数
  - 有三种类型，back_inserter, front_inserter, inserter
    - back_inserter创建一个push_back迭代器
    - front_inserter创建一个push_front迭代器
    - inserter接受一个迭代器参数插入定位，一个值参数作为插入元素, 将元素插入到迭代器**所指元素之前**

  ```c++
  vector<int> vec;
  auto it = back_inserter(vec);  // it创建为一个push_back迭代器
  *it = 42;  // 通过解引用it以push_back的方式向容器中添加元素
  ```

  ```c++
  list<int> lst = {1, 2, 3, 4};
  list<int> lst2, lst3;
  copy(lst.cbegin(), lst.cend(), front_inserter(lst2));
  // front_inserter每次迭代都在第一个元素之前插入
  copy(lst.cbegin(), lst,cned(), inserter(lst3, lst3.begin()));
  // 使用inserter每次迭代都在第一个插入的元素之前插入
  ```

- iostream迭代器
  - 用泛型算法通过流迭代器来写入数据
  - 创建流迭代器时, 必须指定迭代器将要读写的对象类型
  - 默认初始化迭代器是空迭代器，可以作为尾后迭代器
  - 文件尾和IO错误，迭代器的值就等于尾后迭代器
