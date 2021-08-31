# Linux 笔记

> **<font color = "red">红色</font>** 表示理解有难度

## 1. Linux基础命令

- `man`
- `ls`
- `cd`
- `find`
- `grep`
  用于查找**内容**包含指定的范本样式的文件

  > grep test *file  在当前目录中，查找后缀有 file 字样的文件中包含 test 字符串的文件，并打印出该字符串的行

  - 从文件内容查找匹配字符串的行
    > $ grep "被查找的字符串" 文件名
  - 从文件内中查找与正则表达式匹配的行
    > $ grep -e "正则表达式" 文件名
  - 查找匹配的行数
    > $ grep -c "被查找的字符串" 文件名
  - 从文件内容中查找不匹配字符串的行数
    > $ grep -v "被查找的字符串" 文件名

  利用grep和find命令查找文件内容：
  - <font color = "red">从根目录开始查找所有扩展名为.log的文本文件，并找出包含"ERROR"的行</font>
    > $ find / -typr f -name "*.log" | xargs[^xargs] grep "ERROR"

[^xargs]:xargs给命令传递参数的一个过滤器，也是组合多个命令的工具 

- **mkdir**
- **rmdir**
- **tar**
- **touch**
- **cp**
  复制文件或目录
  > cp source directory
- **mv**
  用于文件移动，重命名
  例:
  > mv [文件/文件夹] [文件夹] 文件或文件夹移动
- **rm**
- **pwd**
- **cat**
  - 显示单个或多个文件内容
  - 创建文件
  - 
- **more**
- **head**
- **chmod**
- **ln**
  硬链接像是文件的别名，软连接seems like 快捷方式
  > ln [参数] [源文件或目录] [目标文件或目录]
- **shutdown**
- **reboot**
- **<font color = "red">xargs</font>**  

## 2. Linux进阶命令

## 3. Linux 系统目录结构

> **cd /** 进入系统目录

![Linux1](Linux目录结构.png)

- **<font color = "darkgreen">/bin</font>**  
  常用命令(cd,vim,rm,find)
- **<font color = "darkgreen">/boot(没有体会，不懂)</font>**  
  这里存放的是启动 Linux 时使用的一些核心文件，包括一些连接文件以及镜像文件。
- **<font color = "darkgreen">/dev</font>**  
  设备驱动
- **<font color = "darkgreen">/etc (没有体会，不懂)</font>**  
  etc 是 Etcetera(等等) 的缩写,这个目录用来存放所有的系统管理所需要的配置文件和子目录。
- **<font color = "darkgreen">/home</font>**  
  **cd ~** 进入home  
  用户的主目录，在 Linux 中，每个用户都有一个自己的目录，一般该目录名是以用户的账号命名的，如上图中的 alice、bob 和 eve。
- **<font color = "darkgreen">/lib</font>**  
  lib 是 Library(库) 的缩写这个目录里存放着系统最基本的动态连接共享库，其作用类似于 Windows 里的 DLL 文件。几乎所有的应用程序都需要用到这些共享库。
- **<font color = "darkgreen">/media</font>**  
  U盘，光驱等。
- **<font color = "darkgreen">/mnt</font>**  
  挂载别的文件系统
- **<font color = "darkgreen">/opt</font>**  
  额外软件目录，如浏览器，数据库
- **<font color = "darkgreen">/proc</font>**  
  proc 是 Processes(进程) 的缩写，/proc 是一种伪文件系统（也即虚拟文件系统），存储的是当前内核运行状态的一系列特殊文件，这个目录是一个虚拟的目录，它是系统内存的映射，我们可以通过直接访问这个目录来获取系统信息。  
  这个目录的内容不在硬盘上而是在内存里，我们也可以直接修改里面的某些文件，比如可以通过下面的命令来屏蔽主机的ping命令，使别人无法ping你的机器：
- **<font color = "darkgreen">/root</font>**  
  该目录为系统管理员，也称作超级权限者的用户主目录。
- **<font color = "darkgreen">/sbin</font>**  
  s 就是 Super User 的意思，是 Superuser Binaries (超级用户的二进制文件) 的缩写，这里存放的是系统管理员使用的系统管理程序。
- **<font color = "darkgreen">/sys</font>**
  这是 Linux2.6 内核的一个很大的变化。该目录下安装了 2.6 内核中新出现的一个文件系统 sysfs 。  
  sysfs 文件系统集成了下面3种文件系统的信息：针对进程信息的 proc 文件系统、针对设备的 devfs 文件系统以及针对伪终端的 devpts 文件系统。  
  该文件系统是内核设备树的一个直观反映。  
  当一个内核对象被创建的时候，对应的文件和目录也在内核对象子系统中被创建。  
- **<font color = "darkgreen">/tmp</font>**  
  tmp 是 temporary(临时) 的缩写这个目录是用来存放一些临时文件的。
- **<font color = "darkgreen">/usr</font>**  
  usr 是 unix shared resources(共享资源) 的缩写，这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于 windows 下的 program files 目录。
- **<font color = "darkgreen">/usr/bin</font>**  
  系统用户使用的应用程序。
- **<font color = "darkgreen">/usr/sbin</font>**  
  超级用户使用的比较高级的管理程序和系统守护程序。
- **<font color = "darkgreen">/usr/src</font>**  
  内核源代码默认的放置目录。
- **<font color = "darkgreen">/var</font>**  
  var 是 variable(变量) 的缩写，这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。
- /run
  是一个临时文件系统，存储系统启动以来的信息。当系统重启时，这个目录下的文件应该被删掉或清除。如果你的系统上有 /var/run 目录，应该让它指向 run。

***

- **<font color = "darkgreen">/selinux</font>**  
- **<font color = "darkgreen">/lost+found</font>**  

***

![linux commands](Linux-commands.jpg)

## 静态链接库