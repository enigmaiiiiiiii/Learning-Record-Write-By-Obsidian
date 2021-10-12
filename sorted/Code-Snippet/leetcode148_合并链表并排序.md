# code

- 官方代码


```c++
class Solution {  
 public:  
  ListNode *sortList(ListNode *head) {  
    return sortList(head, nullptr);  
  }  
  ListNode *sortList(ListNode *head, ListNode *tail) { /// 通过快慢指针找到链表中点, 并分割链表  
    if (head == nullptr) {  
      return head;  
    }  
    if (head->next == tail) {  
      head->next = nullptr;  
      return head;  
    }  
    ListNode *slow = head, *fast = head;  
    while (fast != tail) {  
      slow = slow->next;  
      fast = fast->next;  
      if (fast != tail) {  
        fast = fast->next;  
       }  
    }  
    ListNode *mid = slow; //  
    return merge(sortList(head, mid), sortList(mid, tail));  
  }  
  ListNode *merge(ListNode *head1, ListNode *head2) {  /// 合并并排序  
    ListNode *dummyhead = new ListNode(0);  
    ListNode *temp = dummyhead, *temp1 = head1, *temp2 = head2; ///  
    std::cout << "******************************" << std::endl;  
    std::cout << "链表1: ";  
    printListLink(temp1);  
    std::cout << std::endl;  
    std::cout << "链表2: ";  
    printListLink(temp2);  
    std::cout << std::endl;  
    while (temp1 != nullptr && temp2 != nullptr) {  /// 两个结点都不为空时  
      if (temp1->val <= temp2->val) {  
        std::cout << "链表1的当前结点小于链表2的当前结点结点"  
                  << " temp1.val=" << temp1->val  
                  << " temp2.val=" << temp2->val  
                  << " 并将链表1的指针指向下一个结点" << std::endl;  
        temp->next = temp1;  
        temp1 = temp1->next;  
      } else {  
        std::cout << "链表2的当前结点小于链表1的当前结点结点"  
                  << " temp1.val=" << temp1->val  
                  << " temp2.val=" << temp2->val  
                  << " 并将链表2的指针指向下一个结点" << std::endl;  
        temp->next = temp2;  
        temp2 = temp2->next;  
      }  
      temp = temp->next;  
    }  
    if (temp1 != nullptr) {  
      std::cout << "此时链表2全部元素已被排序，将链表1未排序结点全部连接在新链表的尾部" << std::endl  
                << "已完成排序的链表: ";  
      printListLink(dummyhead->next);  
      std::cout << " 未完成排序的链表: ";  
      printListLink(temp1);  
      temp->next = temp1;  
    } else if (temp2 != nullptr) {  
      std::cout << "此时链表1全部元素已被排序，将链表2未排序结点全部连接在新链表的尾部" << std::endl  
                << "已完成排序的链表";  
      printListLink(dummyhead->next);  
      std::cout << " 未完成排序的链表: ";  
      printListLink(temp2);  
      std::cout << std::endl;  
      temp->next = temp2;  
    }  
    std::cout << " 合并后的链表";  
    printListLink(dummyhead->next);  
    std::cout << std::endl;  
    return dummyhead->next; /// 返回新链表的表头  
  }
};
```

- 我的答案

```c++

class Solution {
 public:
  ListNode* sortList(ListNode* head) {
    return split_and_merge(head, nullptr);
  }
  ListNode *split_and_merge(ListNode *head, ListNode *tail) {
    if (head->next == tail) { // 递归返回条件
      head->next = nullptr;
      return head;
    }
 
    ListNode *s = head, *f = head;
    while (f != tail) {
      s = s->next;
      f = f->next;
      if (f != tail) {
      f = f->next;
    }
    }
   
    ListNode *mid = s;
    ListNode *left = head;
    ListNode *right = tail;
    /* 
    以上部分未split部分
    XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    以下部分为递归merge部分 
    */ 
    ListNode *tmp1 = split_and_merge(left, mid); // 返回合并后的左链表头结点
    ListNode *tmp2 = split_and_merge(mid, right); // 返回合并后的右链表头结点
   
    auto *dummyhead = new ListNode(0);
    ListNode *tmp;
    tmp = dummyhead;
   
    while (tmp1 != nullptr && tmp2 != nullptr) {
      if (tmp1->val <= tmp2->val) {
        tmp->next = tmp1;
        tmp1 = tmp1->next;
      } else {
        tmp->next = tmp2;
        tmp2 = tmp2->next;
      }
    tmp = tmp->next;
    }
   
    if (tmp1 != nullptr)  tmp->next = tmp1;
    if (tmp2 != nullptr)  tmp->next = tmp2; 
    
    return dummyhead->next;
  }
};
```

- 功能函数

```c++
// 输出链表
void printListLink(ListNode *h) {  
  ListNode *tmp = h;  
  std::cout << "{";  
  while (tmp) {  
    std::cout << tmp->val << " ";  
    tmp = tmp->next;  
  }  
  std::cout << "}";  
}
```