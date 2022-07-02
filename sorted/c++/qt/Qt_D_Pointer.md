# D-Pointer

## 背景

[二进制兼容](Qt_Binary_Compatibility.md)

## 解决办法

[Trick](Qt_D_Pointer_Trick.md)

## 为什么需要Q_D和Q_Q

[Q_D and Q_Q](Qt_D_Pointer_Q_D_And_Q_Q.md)

## 总结

- q_ptr:  私有基类类成员, 指向公有对象的指针
- d_ptr:  公有基类类中成员，指向私有对象的指针
- 对于Q_D，将基类中的d_ptr转换为可以在Label中使用的LabelPrivate指针成员
- 通过Q_Q，将基类中的q_ptr转换为可以在LabelPrivate中使用的Label指针成员