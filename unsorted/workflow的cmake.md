# workflow的cmake

## 构建

- 设置项目头文件搜索目录变量 

```cmake
add_custom_command(  
   TARGET LINK_HEADERS PRE_BUILD  
   COMMAND ${CMAKE_COMMAND} -E  file MAKE_DIRECTORY ${INC_DIR}/${PROJECT_NAME}  
)
```

- 设置链接库搜索目录变量
- 生成头文件
- 生成workflow静态链接库文件和动态链接库文件
- 在指定目录生成头文件 
