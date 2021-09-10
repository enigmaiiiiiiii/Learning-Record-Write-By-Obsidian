# top

- 持续监控系统信息
- 第一行：信息刷新时间 ，已启动时间，当前登录用户个数, 系统负载: 最近1分钟平均负载；最近五分钟内的平均负载；最近15分钟内的平均系统负载
- 第二行： 进程总数，运行数量，休眠数量，停止的进程，僵尸进程
  [[休眠进程]] [[停止的进程]] [[僵尸进程]]
- 第三行： 用户空间占用CPU百分比, 优先级的进程占用的CPU百分比，空闲CPU百分比. I/O等待百分比，硬中断占用的CPU百分比，软中断占用CPU百分比，
- 第四行： 物理内存总量，已使用内存，空闲内存，缓存使用内存
- 第五行： 虚拟内存使用情况，显示内容前三项同第四行, 最后一项是缓冲的交换区总量

<table>
    <tr>
        <td>字段</td>
        <td>描述</td>
    </tr>
    <tr>
        <td>PID</td>
        <td>进程ID</td>
    </tr>
    <tr>
        <td>USER</td>
        <td>进程拥有者</td>
    </tr>
    <tr>
        <td>PR</td>
        <td>进程优先级</td>
    </tr>
    <tr>
        <td>NI</td>
        <td>nice值，负值表示高优先级，正值表示低优先级</td>
    </tr>
    <tr>
        <td>VIRT</td>
        <td>进程使用的虚拟内存总量</td>
    </tr>
    <tr>
        <td>RES</td>
        <td>进程使用的未被换出的物理内存大小，单位Kb，RES = CODE + DATA</td>
    </tr>
    <tr>
        <td>SHR</td>
        <td>共享内存大小, 单位为Kb</td>
    </tr>
    <tr>
        <td>%CPU</td>
        <td>上次更新到现在的CPU时间占用百分比</td>
    </tr>
    <tr>
        <td>%MEM</td>
        <td>进程使用的物理内存百分比</td>
    </tr>
    <tr>
        <td>TIME+</td>
        <td>进程使用的CPU时间总计,单位1/100秒</td>
    </tr>
    <tr>
        <td>COMMAND</td>
        <td>进程名称</td>
    </tr>
</table>

- 快捷键
  - 1: 显示多核CPU使用情况
  - p: Cpu按使用率排序
  - m: 按Memory使用率排序
  - n: 按PID排序
  - k: [[kill]]进程
  - r: renice进程