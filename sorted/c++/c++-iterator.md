# 迭代器(iterator)

- 类似指针, 可用解引用操作获得所指对象
- 迭代器的类型是**标准库类型**,是iterator和const_iterator类型
  - `std==vector<T>==iterator it`, it能读写`vector<T>`中T类型元素
  - `string::iterator it2;`, it能读写string对象中的字符
- 所有的标准库容器都可以使用**迭代器**，只有少数同时支持**下标运算符**
- 获取迭代器**不是**使用取地址符&
  - 有迭代器的类型同时拥有返回迭代器的成员
  - begin成员返回指向第一个元素的迭代器
  - end成员返回尾迭代器
	
## 运算
	
- 可以理解为迭代器所指位置的运算    
- `iter + n` 指示新位置，与原来相比向前移动了n个元素，或指向为元素的下一位置
- `>=, <, >, <=` 迭代器指向的容器位置，前者为小，后者为大
- `++iter, --iter` ,指向下一个/上一个元素
- `iter1 == iter2` , 判断迭代器是否**指向同一元素**
- `iter->mem` 解引用，等价于`(*iter).mem`

## 5类迭代器

 <table>
  <tr>
    <td>输入迭代器</td>
    <td>只读，单遍扫描, 只能递增<br>支持==，!=, 解引用运算符*</td>
  </tr>
  <tr>
    <td>输出迭代器</td>
    <td>只写，单遍扫描, 只能递增<br>支持解引用运算符</td>
  </tr>
  <tr>
    <td>前向迭代器</td>
    <td>可读写，多遍扫描，只能递增<br>支持所有输入输出迭代器操作</td>
  </tr>
  <tr>
    <td>双向迭代器</td>
    <td>可读写，多遍扫描, 可递增递减<br>支持所有前向迭代器操作</td>
  </tr>
  <tr>
    <td>随机访问迭代器</td>
    <td>可读写，多遍扫描<br>支持全部迭代器运算</td>
  </tr>
</table>