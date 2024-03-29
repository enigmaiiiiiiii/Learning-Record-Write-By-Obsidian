# 算法函数实例

## equal

> 只读元素，不改变，不重排

```c++
equal(roster1.cbegin(), roster1.cend(), roster2.cbegin())
```

- 比较两个**序列**是否保存相同的值
- 接受三个**迭代器**作为参数
  - 前两个表示第一个序列范围
  - 第三个表示第二个序列的首元素
- 第二个序列不能短于第一个序列(只接受一个迭代器表示第二个序列的算法函数都有相同要求)

## fill

> 只写不读元素，不重新排序

- 向序列中写入数据
- 接受三个参数
  - 两个迭代器参数表示范围
  - 一个值参数给序列元素赋值

## copy

- 接受参数同equal
- 多个算法都有copy版本，用来保留原序列

## replace

- 将指定值替换为特定值
- `replace(b, e, search_val, replace_val)`
- `replace_copy(b, e, new_lst_b, search_val, replace_val)`
  - arg new_lst_b: 保存替换后的序列
  - arg search_val：被替换的值
  - arg replace_val： 替换值

## unique

- 消除重复元素
  - 先排序，后消除相邻重复元素
- 接受两个迭代器参数作为序列范围
- 返回一个指向最后一个不重复元素的下一个迭代器？
- 通过覆盖重复元素实现去重，不改变序列大小
- 为了真正删除重复元素，必须使用容器操作，如erase

## sort

- sort默认使用`<`运算符
- sort的重载版本接受第三个参数，可以自定义排序方法
