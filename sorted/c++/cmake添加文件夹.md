# 添加文件夹 

- `ADD_SUBDIRECTORY`
  - `ADD_SUBDIRECTORY(src_dir [binary_dir] [EXCLUDE_FROM_ALL])`
  - 当前工程需要添加的子目录
  - 向当前工程添加存放源文件的子目录,并可以指定中间二进制和目标二进制的存放位置
  - EXCLUDE_FROM_ALL含义：将这个目录从编译过程中排除
- `INCLUDE_DIRECTORIES`
  - `INCLUDE_DIRECTORIES([AFTER | BEFORE] [SYSTEM] dir1 dir2 … )`
  - 向工程添加多个特定的头文件**搜索路径**,路径之间用空格分隔,如果路径包含空格,可以使用双引号将它括起来,  
  默认的行为为追加到当前头文件搜索路径的后面。有如下两种方式可以控制搜索路径添加的位置：
    - CMAKE_INCLUDE_DIRECTORIES_BEFORE,通过SET这个cmake变量为on,可以将添加的头文件搜索路径放在已有路径的前面
    - 通过AFTER或BEFORE参数,也可以控制是追加还是置前