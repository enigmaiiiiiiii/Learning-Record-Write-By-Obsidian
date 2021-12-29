# auto

- 说明符，让编译器去分析表达式的类型
- auto会忽略掉顶层const,底层const会保留下来
- 顶层const需明确指出`const auto f = ci;`
- 若表达式是引用对象，auto以引用对象的类型作为auto的类型

```c++
int i = 0;
int &r = i;
const int ci = i;
const int &cr = ci;
auto a = r;  // r is alias of i,type is int; a is int
auto b = ci;  // b type is int
auto c = cr;  // c type is const int
auto d = &i;  // d type is int*
auto e = &ci  // e type is const int*
```