# inode

- 由一串数字组成
- 一种ID，在linux中的用来存放文件的属性信息, 比如：
  - 文件的拥有者和群组
  - 文件的存取模式
  - 文件的类型
  - 时间：ctime, atime, mtime
  - 该文件的容量
- 操作系统通过inode来识别文件, 而不是文件名
- 目录inode: 记录相关属性
- 文件inode


## 打开文件的过程

- 系统找到文件名对应的inode
- 通过inode号码，获得inode信息
- 通过inode信息找到文件所在的block
