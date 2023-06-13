# Linux - Process Command
## Query Process

[ps](linux-ps.md)

## Stop Process

[kill](linux-kill.md)

## pstree

options

- `-A`: use ACSCII character to connect each program tree
- `-p`: show PID
- `-u`: show PID's owner

> bash can be a parent program

- `pstree` can show parent-child relationship

## Process Priority

- 进程的最终优先级 = NI 优先级 + 当前优先级决定
- 进程在启动时如果没有设定优先级，则默认使用 0
- 进程的优先级字段，数值越小优先级越高

## Adjust process priority

- nice
  - `nice [-n] num command`
  - 启动时调整进程优先级
  - 以优先级 num 启动，若 num 为空，默认是 10
  - 优先级字段编号越小，优先级越高
  - 设定范围 0~19
- `renice`调整已经存在的进程

## monitor system information

top

- continously monitor system information

- 第一行：信息刷新时间 ，已启动时间，当前登录用户个数, 系统负载: 最近 1 分钟平均负载；最近五分钟内的平均负载；最近 15 分钟内的平均系统负载
- 第二行： 进程总数，运行数量，休眠数量，停止的进程，僵尸进程
  [[休眠进程]] [[停止的进程]] [[僵尸进程]]
- 第三行： 用户空间占用 CPU 百分比, 优先级的进程占用的 CPU 百分比，空闲 CPU 百分比. I/O 等待百分比，硬中断占用的 CPU 百分比，软中断占用 CPU 百分比，
- 第四行： 物理内存总量，已使用内存，空闲内存，缓存使用内存
- 第五行： 虚拟内存使用情况，显示内容前三项同第四行, 最后一项是缓冲的交换区总量

| fields  | description                                                  |
| ------- | ------------------------------------------------------------ |
| PID     | Process ID                                                   |
| USER    | user                                                         |
| PR      | process priority                                             |
| NI      | nice value, negative value means high priority, positive value means low priority |
| VIRT    | process use virtual memory size                              |
| RES     | process use physical memory size, unit is Kb, RES = CODE + DATA |
| SHR     | shared memory size, unit is Kb                               |
| %CPU    | CPU time usage percentage from last update to now            |
| %MEM    | process use physical memory percentage                       |
| TIME+   | process use CPU time total, unit is 1/100 second             |
| COMMAND | process name                                                 |


- shortcut for `top` UI
  - 1: 显示多核 CPU 使用情况
  - p: Cpu 按使用率排序
  - m: 按 Memory 使用率排序
  - n: 按 PID 排序
  - k: [[Linux - kill]]进程
  - r: renice 进程

## related command

- `crtl + z`
- `jobs`
- `fg`
- `bg`
