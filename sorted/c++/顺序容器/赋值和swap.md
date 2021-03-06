# 赋值和swap

- `c1 = c2;`, 将c1中的元素替换为c2中**元素的拷贝**，c1和c2必须具有相同的类型
- `c = {a, b, c};`, 将c中元素替换为列表中元素的拷贝(array不适用), 区别于列表初始化，容器名前没有类型名
- `swap(c1, c2);`, **交换**c1和c2中的元素，c1和c2必须具有相同的类型, 同`c1.swap(c2);`,比从c2向ci拷贝快的多
- assign容器成员函数
  - 仅适用于**顺序容器(除array)**，不适用于关联容器和array
  - 允许从一个不同但相容的类型赋值
  - 传递给assign的参数不能指向调用assign的容器
  - `seq.assign(b, e);`, 将seq中元素替换为迭代器b和e所示的范围中的元素，b和e不能指向seq中的元素
  - `seq.assign(il);`, 将seq中元素替换为初始化列表il中的元素
  - `seq.assign(n, t);`, 将seq中元素替换为n个值为t的元素
- swap交换
  - `swap(c1, c2);`
  - 不交换元素，交换容器内部数据结构,除了数组
  - swap两个**数组(array)** 会交换元素,迭代器，指针，引用所绑定的**元素值**会**改变**
  - 因此swap可以在很短时间内完成
  - **除string外**，指向容器的迭代器，引用，指针都**不会失效**,且指向**swap之前**的元素
  - 对string调用swap，会导致迭代器，引用，指针**失效**
  - 新标准库中既有成员函数版本的swap, `swap(a, b);`
  - 非成员版本的swap，`a.swap(b);`