# 用户信息

```c++
#include <sys/types.h>
#include <unistd.h>
uid_t getuid();                // 获取真实用户ID 
uid_t geteuid();               // 获取有效用户ID
gid_t getgid();                // 获取有效组ID
gid_t getegid();               // 获取有效组ID         
int setuid(uid_t uid);         // 设置真实用户ID     
int seteuid(uid_t uid);        // 设置有效用户ID      
int setgid(gid_t gid);         // 设置真实组ID     
int setegid(gid_t gid);        // 设置有效组ID      
```



