#  Trigger Condition

## Two Trigger Modes

- Edge Triggered, default trigger mode
- Level Triggered

## Edge Triggered

- epoll_wait()检测到有事件发生时，应用程序必须立即处理该事件
- 仅在文件描述符发生更改时才传递事件
- 使用建议：
  - 使用非阻塞文件描述符, 并且
  - 只有在read()和write()返回 [EAGAIN](errno.md) 后继续等待
- 降低epoll事件的触发次数

## Level Triggered

- epoll_wait()检测到发生变化时，通知应用程序，应用程序可以不立即处理，下次epoll_wait()时，再次通知应用程序，直到文件描述符被处理
- equivalent to efficient [poll()](linux-io-api-poll().md), can be used anywhere poll() is used

## Illustration

assume the following scenario

1. 表示管道读取端的文件描述符（rfd）注册在 epoll 实例上。
2. 管道写入器在管道的写入端写入 2 kB 的数据。
3. 调用 epoll_wait() 将返回 rfd 作为准备好的文件描述符。
4. 管道阅读器从 rfd 读取 1 kB 的数据。
5. 完成对 epoll_wait() 的调用。


For ET 

- In step 2, a event is generated when write done, and used in step 3. Because step 4 does not consume all the data in the buffer, [epoll_wait()](linux-io-api-epoll-wait().md) may block indefinitely in step 5

For LT

- 下次调用epoll_wait()时，仍返回同一文件描述符，仍可完成数据传输
