# macro and function

## macro

#cmake

```cmake
macro(<name> [<arg1> ...])
 <commands>
endmacro()
```

- 定义一个`macro`, 接受一系列参数`<arg1>, ...`, 以`macro()`还是，`endmacro()`结束, 调用之前不会运行
- 调用macro

```cmake
foo()
Foo()
cmake_language(CALL foo)
```

- 参数传递

## function

```cmake
function(<name> [<arg1> ...])
 <commands>
endfunction()
```

- 

## 不同之处

- function的参数是cmake中的真实变量, macro的参数是字符串的替换


