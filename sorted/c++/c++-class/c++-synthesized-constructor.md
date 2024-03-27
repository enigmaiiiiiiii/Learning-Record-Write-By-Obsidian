# C++ - Synthesized Constructor

Synthesized Default Constructor

- Applicable only for very simple classes.
- A constructor created by the compiler.
- Initializes with initial values if there are any, otherwise default initialization.
- By adding `classtype() = default;`, it indicates coexistence of the default constructor with other forms of constructors; otherwise, the compiler won't automatically synthesize the default constructor.
  - Default inline within the class.
  - Default not inline outside the class.


