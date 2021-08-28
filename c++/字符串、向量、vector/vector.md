### 2. vector

- vector表示**对象**的集合, 引用不是对象，vector不能包含引用
- vector是c++的**类模板**(class template)而非类型
- **类模板**需要提供 **额外信息(T)** 来确定实例化成什么样的类
- 初始化方式
  - **默认初始化**，不含任何元素,如以下code中的**v1**
  - **拷贝初始化**，如**v2**
  - **列表初始化**，多个元素用花括号括起来,如**v5**
  - **值初始化**，参数用圆括号括起来,如**v3,v4**
  - **用数组初始化**, 和值初始化相似，参数为首元素指针，和尾后指针
  > 所给列表不符合列表初始化类型是，编译器会尝试用值初始化vector对象

```c++
vector<T> v1;  // 空vector
vector<T> v2(v1);  // v2是v1的副本
vector<T> v2 = v1;  // v2是v1的副本 等价于vector<T> v2(v1)
vector<T> v3(n,val);  // v3包含了n个重复元素,每个元素的值都是val
vector<T> v4(n);  // v4包含了n个T类型的初始化对象
vector<T> v5{a,b,c...};  // v5包含了对应元素
vector<T> v5 = {a,b,c...};  // 等价于v5{a,b,c...}
vector<T> v6(begin(arr),end(arr));  // v6由数组arr初始化的指针
vector<T> v7(arr+1,arr+4)  // v7是由数组arr的第2个元素到第4个元素的部分组成
```

- 支持下标查找元素，不支持下标添加元素, **object[ind]**
- vector对象中添加元素
  - `vector_object.push_back()`; 尾端添加元素
- **vector&lt;T>::size_type**类型
  - 同string,由size函数返回
  - 需指定T的类型
- 只有当**元素**可比较时，**vector对象**才可以比较
- 添加元素
  [[手册#顺序容器添加元素]]
- 删除元素
  [[手册#顺序容器删除元素]]