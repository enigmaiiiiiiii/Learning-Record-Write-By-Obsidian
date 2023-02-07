# D-Pointer

## 背景

[二进制兼容](qt-binary-compatibility.md)

## 解决办法

[Trick](qt-d-pointer-trick.md)

## 为什么需要Q_D和Q_Q

[Q_D and Q_Q](qt-d-pointer-q-d-and-q-q.md)

## 总结

- q_ptr:  私有基类类成员, 指向公有对象的指针
- d_ptr:  公有基类类中成员，指向私有对象的指针
- 对于Q_D，将基类中的d_ptr转换为可以在Label中使用的LabelPrivate指针成员
- 通过Q_Q，将基类中的q_ptr转换为可以在LabelPrivate中使用的Label指针成员