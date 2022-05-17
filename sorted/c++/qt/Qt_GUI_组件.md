# 组件

> 以Label为例: 继承关系: QObject $\rightarrow$ QWidget$\rightarrow$ QFrame $\rightarrow$ QLabel 
 
## 属性

- 重要属性
  - ObjectName: 唯一名称， 用来被其它程序引用
  - text: 内容

## Signals And Slots

添加响应

||||
|--|--|--|--|
| Sender | Signal | Receiver | Slot |
| btnClose | clicked() | Widget | close() |

表示Widget收到btnClose发送的`clicked()`信号后执行`close()`
