# 设置编译选项

## 方法1：变量CMAKE_LANGUAGE_FLAGS

-   `CMAKE_C_FLAGS`: Initialized by the CFLAGS environment variable.
-   `CMAKE_CXX_FLAGS`: Initialized by the CXXFLAGS environment variable.
-   `CMAKE_CUDA_FLAGS`: Initialized by the CUDAFLAGS vironment variable.
-   `CMAKE_Fortran_FLAGS`: Initialized by the FFLAGS environment variable.
- `set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} str")`

## 方法2：命令ADD_COMOILE_OPTIONS

```cmake
if (MSVC)
 # warning level 4 and all warnings as errors
 add_compile_options(/W4 /WX)
else()
 # lots of warnings and all warnings as errors
 add_compile_options(-Wall -Wextra -pedantic -Werror)
endif()
```

