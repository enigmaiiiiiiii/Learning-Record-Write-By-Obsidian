# CMake - Package

## Command find_package

```cmake
find_package(<PackageName> [version] [EXACT] [QUIET] [MODULE]
             [REQUIRED] [[COMPONENTS] [components...]]
             [OPTIONAL_COMPONENTS components...]
             [NO_POLICY_SCOPE])
```

- 官方预定义了许多用于寻找依赖包的Module(并不是要查找的包本身), 通常在`/usr/share/cmake/Modules/Find<LibraryN>.cmake`下

有两种可能的package，module和config

- `FindsomeModule.cmake`
- `SomeConfig.cmake`

***

- `COMPONENTS`后为必须要找到的组件
- `REQUIRED`: 找不到必须的package, 停止处理并显示错误信息
- `OPTIONAL_COMPONENTS` 后为可选组件  
- `<PackageName>_Found`变量被设置，用来指示是否找到package
- `QUIET`: 禁用信息性消息

## 创建package
