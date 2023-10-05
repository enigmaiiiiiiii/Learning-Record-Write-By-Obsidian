# macro and function

## macro

#cmake

```cmake
macro(<name> [<arg1> ...])
 <commands>
endmacro()
```

- define a `macro`, receive series of parameters `<arg1>, ...`, begin with `macro()`，end with `endmacro()`, 
- it wont be execute before it is called

call a macro

```cmake
foo()
Foo()
cmake_language(CALL foo)
```

- pass parameters

## function

```cmake
function(<name> [<arg1> ...])
 <commands>
endfunction()
```

- 

## 不同之处

- function的参数是cmake中的真实变量, macro的参数是字符串的替换


