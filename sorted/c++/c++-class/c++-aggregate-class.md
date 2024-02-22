# C++ - Aggregate Class

> {key:value}

```c++
struct Data {
    int ival;
    string s;
}
Data val1 = {0,"Anna"}
// val1.ival = 0;val1.s = string("Anna")
```

> the order of the initializers must match the order of the members in the class definition

When a class satisfies the following conditions, it is called an aggregate class:

- All members are public
- No constructor
- No initial value for any of its members
- No base class, no [virtual functions](c++-virtual-function.md)

