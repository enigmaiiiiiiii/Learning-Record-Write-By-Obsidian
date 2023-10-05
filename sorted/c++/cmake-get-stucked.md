# CMake - Get Stucked

1. can not determine link language for target "HelloTarget"

solving approach:

```cmake
SET_TARGET_PROPERTIES(HelloTarget properties LINKER_LANGUAGE CXX )
```

