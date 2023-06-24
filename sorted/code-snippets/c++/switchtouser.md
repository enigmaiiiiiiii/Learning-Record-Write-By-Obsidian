# SwitchtoUser

> 将以root身份启动的进程切换为一个普通用户身份运行

```c++
#include <unistd.h>

static bool switch_to_user(uid_t user_id, gid_t gp_id) {
  // 确保目标用户不是root
  if ((user_id == 0) && (gp_id == 0)) {
   return false;
  }
  gid_t gid = getgid();  // 当前用户id
  uid_t uid = getuid();  // 当前用户组id
  if (((gid != 0) || (uid != 0)) && ((gid != gp_id) || (uid != user_id))) {
   return false;
  }
  if (uid != 0) {
   return true;
  }
  if ((setgid(gp_id) < 0) || (setuid(user_id) < 0)) {
    return false;
  }
  return false;
}
```