# 从错误中学习

1. can not determine link language for target "HelloTarget"

解决方法: 

```cmake
SET_TARGET_PROPERTIES(HelloTarget properties LINKER_LANGUAGE CXX )
```

