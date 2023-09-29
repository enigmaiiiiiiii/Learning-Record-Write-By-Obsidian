# std::allocator

- 模板，头文件memory, 
- 为对象分配为构造内存
- 按需要分配空间的一种方法
- 分配的内存是原始的，未构造的
- 将分配内存和对象构造分离，避免浪费
  - 避免在创建多个对象时可能创建用不到的对象
  - 避免多次赋值，new在初始化时赋值一次，赋予新值的时候再次赋值

## 其他成员

<table>
    <tr>
        <td>allocator&lt;T&gt; a</td>
        <td>定义一个allocator对象，为类型T的对象分配内存</td>
    </tr>
    <tr>
        <td>a.allocate(n)</td>
        <td>分配一段原始的，未构造的内存，保存n个类型为T的对象<br>
            返回指向T类型的n个对象的数组首元素的指针，数组元素尚未构造</td>
    </tr>
    <tr>
        <td>a.deallocate(p, n)</td>
        <td>释放从T*指针p中地址开始的内存</td>
    </tr>
    <tr>
        <td>a.construct(p, args)</td>
        <td>p必须是一个类型为T*的指针，指向一块原始内存，args被传递给类型T的构造函数,比如size，value</td>
    </tr>
    <tr>
        <td>a.destroy(p)</td>
        <td>p为T*类型的指针，此算法对p指向的对象执行析构函数</td>
    </tr>
</table>

- 汇总 
  - `construct`: 构造对象
  - `allocate`: 分配而不构造
  - `void construct(pointer p, const_reference val)`: 构造对象
  - `destory`: 销毁对象，接受一个析构函数指针
  - `deallocate`: 释放内存
  - [[c++手册#allocator算法]]