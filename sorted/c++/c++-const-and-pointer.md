# 指针和const

- `int *ptr` **普通指针**指向普通对象

### 指向const的指针
  - `const int *ptr` 
  - <font color="red">没有规定所指对象必须是一个常量</font>, 可以指向常量,也可以指向普通对象
  - 仅仅是**不能通过该指针改变所指对象**
  - ptr的类型是const int*
  - 指向const引用和指针，**不能**修改指向或引用对象的值，修改**普通对象**的值**可以**修改const引用或const指针指向的值,属于底层const
  
```c++
const double pi = 3.14;
double *ptr = &pr;
const double *cptr = &pi;
*cptr = 42;
```

### const指针
  - 指针本身是个常量，属于顶层const
  - `int *const ptr;`表示一个指向**普通**int对象的const指针
  - `const int *const ptr`表示一个指向**const** int对象的const指针

  ```c++
  const double pi = 3.14159;
  const double *const piptr = &pi;  // piptr是一个const指针，指向const double(双精度浮点常量)类型的对象
  ```

  - 表示ptr是一个const指针,指向一个int对象
