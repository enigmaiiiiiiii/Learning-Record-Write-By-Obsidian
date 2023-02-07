# 构造函数

- 没有返回类型
- 不能声明为const
- 可以有多个构造函数,多个构造函数之间必须有参数数量或类型上的区别
- 构造函数的结构
  - 类名
  - 参数列表
  - 构造函数初始值列表
  - 函数体
- 如果成员是const,引用，或未提供默认构造函数的类型，必须通过构造函数初始值列表为这些成员提供初始值

> 在构造函数体内给类内成员赋值和使用构造函数初始化列表来初始化成员的区别 
>> 一个是初始化一个是赋值
>> 有些成员必须被初始化
>> 底层效率问题  
  
- 类外定义构造函数，和其他成员一样，通过作用域操作符说明属于哪个类

[转换构造函数](c++-class-convert-constructor.md)

[默认构造函数](c++-default-construct.md)

[合成构造函数](c++-合成-constructor.md)

[字面值常量类](c++-constexpr-class.md)

- 委托构造函数

  ```c++
  class Sales_data{
      public:
      Sales_data(std::strings, unsinged cnt, double price):
          bookNo(s), units_sold(cnt), revenue(cnt*price) {}
      Sales_data(): Sales_data(" ", 0, 0){}  // 委托构造函数
  }
  ```