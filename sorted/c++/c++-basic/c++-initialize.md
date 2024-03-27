# c++ - initialize

## Default initialize

- `ListNode n;`

## Direct initialize:

- `ListNode n(val);`

## Copy initialize:

- `ListNode n = n1;`

## Initialization Between Built-in Type and Class Type

[Built-in type](c++-built-in-type.md) has different initialization rules from class type

built-in type initialization

- **Global Scope** built-in type is initialized to 0
- **Local Scope** built-in type is not initialized, undefined value

class type initialization

- **Global Scope** class type is first zero-initialized, then [default-initialized](#default-initialize)
- **Local Scope** class type is directly [default-initialized](#default-initialize)


