## weak_ptr

- 指向一个由shared_ptr控制的对象, 不会改变shared_ptr的计数，shared_ptr对象被销毁，weak_ptr一同被销毁
- weak_ptr要用shared_ptr来初始化
