# 程序设计

如果可以使用前置声明，就不要使用#include

```c++
#include "classb.h"
#include "classd.h"
// other #include directives as needed
class C;
// forward declaration
class A : public B
{
public:
     C* f1(D);
//other stuff that does not involve classc
};
```

B和D需要#include
