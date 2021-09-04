## unique_ptr

- 只能有一个unique_otr指向给定对象,所以不支持拷贝或赋值
  - 例外，可以拷贝或赋值一个将要被销毁的unique_ptr
    [[对象移动]]
  

  ```c++
  unique_ptr<int> clone(int p) {
      return unique_ptr<int>(new int(p));
  }
  unique_ptr<int> clone(int p) {
      unique_ptr<int> ret(new int (p));
      return ret;
  }
  /// 编译器可以推断出返回的对象将要被销毁，编译器执行一种特殊拷贝
  ```

- 必须直接初始化
- release成员返回当前指针，并释放当前指针,通常用于初始化当前指针或给另一个指针赋值
