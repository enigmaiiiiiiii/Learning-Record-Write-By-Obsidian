# begin with Hello World

> 记录顺序为遇到时间先后

## 1. undefined reference to `std::cout'

[网上的答案](https://www.softwaretestinghelp.com/cpp-errors/#:~:text=An%20%E2%80%9CUndefined%20Reference%E2%80%9D%20error%20occurs,linked%20object%20files%20and%20libraries.)

### 1) compiler使用错误

gcc prog1.cpp

用命令行运行编译程序时,c++的编译器时g++，不是gcc,

改为： ```g++ prog1.cpp``` 或 ```gcc prog1.cpp -lstdc++```

### 2) Object Files Not Linked Properly

预计涉及到cmake

![c++](c++_Error_Undifined_Reference.png)

问题首次分析：没有正确构建c++项目,没有正确链接c++源文件

### 3) multiple definition of `power(double, double)'

> cmake [[include]] c++构建工具 重复定义

我用cmake构建文件时，试图将main.cpp和demo1.cpp两个文件链接, 发生重复定义错误

#### wrong

- CMakeList.txt文件内容如下:

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)
PROJECT(demo2)
ADD_EXECUTABLE(demo2 demo/main.cpp demo/demo1.cpp)  # 包含了两个文件
```

- main.cpp源文件内容：

```c++
[[include]] "iostream"
[[include]] "./demo1.cpp"  // main中再次包含demo1.cpp, 此处错误
// [[include]]通常不包含源文件,
int main() {
    std==cout << power(2, 4) << std==endl;
    return 1;
}
```

- demo1.cpp源文件内容：

```c++
double power(double base, double exponent) {

    int res = base;
    if (base == 1) {
        return 1;
    }
    for (int i = 1; i < exponent; i++)
        res = res * base;
    return res;
}
```

#### right

- CMakeList.txt

```cmake
CMAKE_MINIMUM_REQUIRED(VERSION 3.10)
PROJECT(demo2)
ADD_EXECUTABLE(demo2 demo/main.cpp demo/demo1.cpp)  # 包含两个文件
```

- main.cpp

```c++
[[include]] "iostream"

double power(double, double)  // 函数声明, 

//通常不会这样声明, 而是将声明包含在头文件中，为了说明机制

int main() {
    std==cout << power(2, 4) << std==endl;
    return 1;
}
```

- demo1.cpp不变
