# gcc编译动态链接库

[原文](https://www.cprogramming.com/tutorial/shared-libraries-linux-gcc.html#fn:pic)

foo.h

```c++
#ifndef foo_h__
#define foo_h__
 
extern void foo(void);
 
#endif  // foo_h__
```

foo.c

```c++
#include <stdio.h>

void foo(void)
{
    puts("Hello, I am a shared library");

}
```

main.c

```c++
#include <stdio.h>
#include "foo.h"

int main(void)
{
    puts("this is a shared library test ...");
    foo();
    return 0;
}
```

## step 1: Compiling with Positon Independent Code

```shell
$ gcc -c -Wall -Werror -fpic foo.c
```

## step 2: Creating a shared library from an object file

```shell
$ gcc -shared -o libfoo.so foo.o
```

## Step 3: Linking with a shared library

- 我们有一个共享的库。编译我们的main。并将其与libfoo链接。
- lfoo选项并不是在寻找foo.o, 而是libfoo。
- GCC假定所有库都以lib开头，以.so或.a结尾.a

> .so表示共享对象或共享库，.a表示存档或静态链接库

```shell
$ gcc -Wall -o -test main.c -lfoo
/usr/bin/ld: connot find -lfoo
collect2 ld returned 1 exit status
```

链接器不知道在哪里可以找到libfoo
GCC默认有一个位置列表，但我们的目录不在该列表中。
我们需要告诉GCC在哪里可以找到libfoo
所以我们将使用-L选项来实现这一点。在本例中，我们将使用当前目录/home/username/foo

```shell
$ gcc -L/home/username/foo -Wall -o test main.c -lfoo
```

## Step 4: Making the library available at runtime

```shell
$ ./test
./test: error while loading shared libraries: libfoo.so: cannot open shared object file : No such file or directory
```

加载程序找不到共享库。
我们没有在标准位置安装它，所以我们需要给加载器一些帮助
我们有几个选项：
- 我们可以使用环境变量`LD_LIBRARY_PATH`来实现这一点
- 或者使用rpath。

让我们先看看`LD_LIBRARY_PATH`

### using LD_LIBRARY_PATH

```shell
$ echo $LD_LIBRARY_PATH
```

## using rpath

现在，让我们尝试rpath
- 首先，我们将清除LD_LIBRARY_PATH以确保找到我们的库的是rpath
- rpath或run path是一种将共享库的位置嵌入可执行文件本身的方法，而不依赖于默认位置或环境变量。
- 我们在链接阶段这样做。请注意冗长的–Wl，-rpath=/home/username/foo.o选项。
  - Wl部分将逗号分隔的选项发送到链接器，
  - 因此我们告诉它将-rpath选项发送到带有工作目录的链接器。 
  
```shell
$ unset LD_LIBRARY_PATH
$ gcc -L/home/username/foo -Wl, -rpath=/home/user/foo -Wall -o test main.c -lfoo
$ ./test
```

rpath和LD_LIBRARY_PATH

- rpath有一些缺点。首先，它要求在固定位置安装共享库，以便程序的所有用户都可以访问这些位置的库。这意味着系统配置的灵活性降低。
- 其次，如果该库引用NFS装载或其他网络驱动器，则在程序启动时可能会遇到不希望的延迟，甚至更糟。

## Using ldconfig to modify ld.so

如果我们想安装我们的库，以便系统中的每个人都可以使用它，该怎么办？
为此，您需要管理员权限。您需要这样做有两个原因
- 第一，将库放在标准位置，可能是/usr/lib或/usr/local/lib，普通用户没有写入权限。
- 其次，您需要修改ld.so配置文件和缓存。作为root用户，请执行以下操作

