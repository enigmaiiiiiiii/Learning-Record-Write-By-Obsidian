# CMake - Dependency Propagation

## What Dependency Propagation In CMake

- cmake determine how **dependencies** of target propagate to other targets that link to this target
  - the dependencies of target can be **link libraries** or **header file search paths**
- mostly used in [`TARGET_LINK_LIBRARIES`](), [`TARGET_INCLUDE_DIRECTORIES`](), [`TARGET_COMPILE_FEATURES`]()
- here are 3 type of dependency propagation
  - [private](#private)
  - [public](#public)
  - [interface](#interface)

## private

- these dependencies will only used when building this target, not for targets that link to this target

## Public

- ~~default propagation type~~
- these dependencies will be used when building this target and targets that link to this target

## interface

- these dependencies will be used when building targets that link to this target, **but not for this target itself**

