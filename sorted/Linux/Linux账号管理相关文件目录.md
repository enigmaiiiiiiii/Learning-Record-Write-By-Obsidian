# 文件目录

## 账号目录

- 系统上所有的账号和一般身份使用者，以及root的相关信息都记录在`/etc/passwd`
  - 账号名称
  - 密码，只有一个x
  - UID
    - 0: 系统管理员ID，通过将账号的ID改成0，可以将该账号设置成管理员
    - 1~499: 保留给系统使用的ID，比如给一些服务使用
    - 500~65535: 给一般使用者，最多可以到$2^{32} - 1$
  - GID
  - 使用者信息说明栏
  - home目录
  - Shell
- 每个用户都有这个文件读权限，只有root有写权限  
  
## 密码目录
  
- 密码记录在`/etc/shadow`这个文件下
  - 账号名称
  - 密码
  - 最近更动密码的日期
  - 密码不可被更动的天数
  - 密码需要被重新变更的天数
  - 密码需要变更期限前的警告期限
  - 密码过期的恕限时间
  - 账号失效日期
  - 保留
- 只有root有读写权限

## 群组目录 
  
- 所有群组名称都记录在`/ect/group`
  - 群组名称
  - 群组密码
  - GID
  - 支持的账号
  
## 登入过程
  
- 使用[[telnet]]或[[ssh]]登入主机时
  1. 在`/etc/passwd`中寻找是否有这个账号，没有则跳出；有则读出UID和GID，同时读出该账号的home目录和shell设定
  2. 进入`/etc/shadow`核对UID对应的密码
  3. 如果一切OK，进入shell
- UID 的 ID 范围
