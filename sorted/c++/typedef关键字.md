# typedef关键字

- 定义类型别名

  ```c++
  typedef double wages;
  typedef wages base,*p;  // base是double的别名,p是double*的别名
  ```

- 复合类型或常量的类型别名

  ```mermaid
  graph TB
  A0[typedef char *pstring]-->A
  A[pstring是char*的类型别名]-->B[const pstring cstr = 0]; 
  A-->C[const char *cstr = 0];
  B--类型是const指针-->D[cstr的类型char *const];
  C--指向常量的指针,底层指针-->E[cstr的类型是const char*]
  ```

  [[c++_const#指针和const]]

  ```c++
  typedef char *pstring;  // pstring是char*的别名
  const pstring cstr = 0;  // cstr是指向char的const指针 
  const pstring *ps;  // ps是一个指针，他的对象是指向char的常量指针
  ```

- `typedef int arrT[10];`: arrT是一个包含10个整型的数组

```c++
typedef int arrT[10];
using = arrT = int[10];
arrT* func(int i);  // 对func的返回值解引用得到包含10个整型的数组，因此func的返回类型是数组指针
```

- c语言中typedef可以用来定义结构体

```c
typedef struct
{
    int a;
    double b;
} structname;
```