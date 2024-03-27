# C++ - Template

## Definition

```c++
template <typename T>
class MyClass {
public:
    MyClass(T val) : value(val) {}

    void print() {
        std::cout << "Value: " << value << std::endl;
    }

private:
    T value;
};

int main() {
    // Function template
    myFunction(10);  // Instantiation with int

    // Class template
    MyClass<int> obj1(5);  // Instantiation with int
    MyClass<double> obj2(3.14);  // Instantiation with double

    return 0;
}
```

## Features

- Begins with a template followed by a template parameter list `template <typename T>`.
- Template header files usually include both declarations and definitions.
- The compiler does not generate code when encountering template definitions.
- [typename](c++-keyword-typename.md) can also be replaced by class.
- Errors during template instantiation may be reported only at [linking](c++-compile.md) stage.

## Template Instantiation

[Ins](c++-template-instation.md)

## Template Specialization

[Template Specialization](c++-template-specialization.md)

- when there are multiple templates that satisfy the conditions, the compiler selects the most specialized template

