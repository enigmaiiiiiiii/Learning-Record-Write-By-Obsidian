# 泛型算法结构

## 5类迭代器

 <table>
  <tr>
    <td>输入迭代器</td>
    <td>只读，单遍扫描, 只能递增</td>
  </tr>
  <tr>
    <td>输出迭代器</td>
    <td>只写，单遍扫描, 只能递增</td>
  </tr>
  <tr>
    <td>前向迭代器</td>
    <td>可读写，多遍扫描，只能递增</td>
  </tr>
  <tr>
    <td>双向迭代器</td>
    <td>可读写，多遍扫描, 可递增递减</td>
  </tr>
  <tr>
    <td>随机访问迭代器</td>
    <td>可读写，多遍扫描, 支持全部迭代器运算</td>
  </tr>
</table>

## 形参模式

```c++
alg(beg, end, other args);
alg(beg, end, dest, other args);
alg(beg, end, beg2, other args);
alg(beg, end, beg2, end2, other args);
```

- beg 和 end 表示算法操作范围
- beg2 和 end2 表示第二个范围
- dest迭代器参数