# 记录错误

- 因为守护进程没有控制终端, 不能简单的写道stderr上，所以考虑出错如何输出的问题

## syslog()

- 向系统日志发送消息

```c
#include <syslog.h>
void syslog(int priority, const char *format, ...);
void close(void);

void vsyslog(int priority, const char *format, va_list ap);
```

- `vsyslog()` is [variable parameters version](linux-va-list.md) of `syslog()`

### 参数

- priority: 优先级参数， 是facility和level参数的组合, 如
- level可取值
  - LOG_EMERG : 紧急，最高优先级
  - LOG_ALERT : 必须立即修复的情况
  - LOG_CRIT: 严重
  - LOG_ERR: 出错
  - LOG_WARNING : 警告
  - LOG_NOTICE: 正常但重要
  - LOG_INFO : 信息
  - LOG_DEBUG : 调试消息，最低优先级
> siglogmask()函数用于设置进程优先级屏蔽字, 返回调用之前的屏蔽字
- format: 输出格式, 
  - %m字符会被错误字符串strerror(errno)替换
  - 不需要包含终止换行符

## openlog()

```c
#include <syslog.h>
void openlog(const char *ident, int option, int facility);
```

- ident指向的字符串被添加到每条消息之前, 通常设置为程序名
- option是一个位掩码，option取值 
  - LOG_CONS: 如果有错误发送到系统日志，则直接输出到系统控制台
  - LOG_NDELAY: 立即打开connection(文件路径)
  - LOG_NOWAIT: 不要等待在记录消息时创建的子进程
  - LOG_ODELAY: 与LOG_NDELAY相反，延迟打开连接直到syslog()被调用
  - LOG_PERROR: 同时向stderr记录日志消息
  - LOG_PID: 每条消息包括进程ID
- facility:  指定记录消息的程序类型，不同的facility,不同的消息方式处理
  <table>
    <tr>
        <td>LOG_AUTH</td>
        <td>security/authorization messages</td>
    </tr>
    <tr>
        <td>LOG_AUTHPRIV</td>
        <td>security/authorization messages (private)</td>
    </tr>
    <tr>
        <td>LOG_CRON </td>
        <td>clock daemon (cron and at)</td>
    </tr>
    <tr>
        <td>LOG_DAEMON </td>
        <td>system daemons without separate facility value</td>
    </tr>
    <tr>
        <td>LOG_FTP</td>
        <td>ftp daemon</td>
    </tr>
    <tr>
        <td>LOG_KERN</td>
        <td>kernel messages (these can't be generated from user processes)</td>
    </tr>
    <tr>
        <td>LOG_LOCAL0 through LOG_LOCAL7</td>
        <td>reserved for local use</td>
    </tr>
    <tr>
        <td>LOG_LPR</td>
        <td>line printer subsystem</td>
    </tr>
    <tr>
        <td>LOG_MAIL</td>
        <td>mail subsystem</td>
    </tr>
    <tr>
        <td>LOG_NEWS</td>
        <td>USENET news subsystem</td>
    </tr>
    <tr>
        <td>LOG_SYSLOG</td>
        <td>messages generated internally by syslogd(8)</td>
    </tr>
    <tr>
        <td>LOG_USER(default)</td>
        <td>generic user-level messages</td>
    </tr>
    <tr>
        <td>LOG_UUCP</td>
        <td>UUCP subsystem</td>
    </tr>
  </table>

### UDP端口

## 实例  
1. openlog()设置facility为LOG_LPR, syslog()设置level为LOG_ERR

```c
openlog("lpd", LOG_PID, LOG_LPR);
syslog(LOG_ERR, "open error for %s: %m", filename);
```

2. syslog()将priorty参数设置为LOG_ERR | LOG_LPR

```c
syslog(LOG_ERR | LOG_LPR, "open error for %s: %m", filename);
```
