# Data Structure - Linked List

## What Is Line List

- 链表在内存中不是连续分布的, 地址取决于操作系统
- 链表的表头是唯一确定的
- 单向链表定义
  - 元素
  - 指针指向下一节点
  - 构造函数
- 首元素节点：存储第一个元素的节点
- 头指针：指向第一个节点的指针
- 为了方便处理会设一个头节点
  - 头节点：指向首节点的节点
  - 便于处理首元素节点

```c++
struct ListNode {
    int val;  // 节点上存储的元素
    ListNode *next;  // 指向下一个节点的指针
    ListNode(int x) : val(x), next(NULL) {}  // 节点的构造函数
};
```

- 链表删除
- 添加节点
