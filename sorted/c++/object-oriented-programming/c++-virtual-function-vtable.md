## C++ - Virtual Function Vtable

## What Is This

vtable

- Exists in each class type
- Length is related to the number of virtual functions in the derived class

## vptr: 

- vtable pointer

## Vtable In Derived Class

Virtual Function Does Not Inherited From Base Class

- Virtual Function placed in vtable in the order of declaration
- The order of virtual function in vtable that derived class [vptr](#vptr) points to: base class virtual function before derived class virtual function

Virtual Function inherited from Base Class

- Virtual Function In Derived Class Will Replace The Virtual Function In Base Class

