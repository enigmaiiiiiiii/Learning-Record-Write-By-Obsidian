# 函数kbhit

- 用于非阻塞的响应键盘输入事件


```c++
int main() {
  while (!kbhit()) {
    std::cout << "无键按下" << std::endl;
  }
  std::cout << "有键按下" << std::endl;
}
```