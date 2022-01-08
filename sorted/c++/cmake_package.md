# cmake-package

## find_package命令

- 对于库文件ZLIB, cmake中包含了该文件的对应模块,通常在`/usr/share/cmake/Modules/FindZLIB.cmake`
- 有两种可能的package，module和config
  - `FindsomeModule.cmake`
  - `SomeConfig.cmake`

```cmake
find_package(<PackageName> [version] [EXACT] [QUIET] [MODULE]
             [REQUIRED] [[COMPONENTS] [components...]]
             [OPTIONAL_COMPONENTS components...]
             [NO_POLICY_SCOPE])
```

- `<PackageName>_Found`变量被设置，用来指示是否找到package
- `REQUIRED`: 找不到package, 停止处理并显示错误信息
- `QUIET`: 禁用信息性消息

## 创建package
