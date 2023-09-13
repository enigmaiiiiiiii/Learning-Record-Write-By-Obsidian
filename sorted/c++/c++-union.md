# C++ - union

## What Is Union

- A kind of class that saves space
- A special class: only one data member can have value at any time
- When assign value to one member, other members become undefined
- Every member share the same memory space, this feature does not conflict with other member's undefined state, except array

>  [check machine order](c++-check-machine-order.md)

## Define union

```c++
union Token {
// members are public by default
char cval;
int ival;
double dval;
} 
// defined a union named Token

Token first_token = {'a'};  // initialize first member cval
Token last_token;  // uninitialized Token object
Token *pt = new Token; 
```

## Anonymous Union

- it's members can be accessed directly

```c++
union {
  char cval;
  int ival;
  double dval;
};
cval = 'c';
```
