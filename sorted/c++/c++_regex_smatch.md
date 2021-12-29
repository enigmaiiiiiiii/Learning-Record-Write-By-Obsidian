# smatch

- 对于有n个[子表达式](c++_regex_std_regex.md)的regex对象，每个smatch对象会包含n+1个ssub_match元素, 
- `[1]...[n]`对应每个子表达
- `[0]`元素表示整个匹配

- 成员函数

<table>
  <tr>
    <td>m.ready()</td>
    <td>通过函数regex_serach或regex_match设置了m, 返回true, 否则返回false</td>
  </tr>
  <tr>
    <td>m.size()</td>
    <td>匹配失败返回0，否则返回最后一次匹配的正则表达式中子表达式的数目</td>
  </tr>
  <tr>
    <td>m.empty()</td>
    <td>m.size()等于0，返回true</td>
  </tr>
  <tr>
    <td>m.prefix()</td>
    <td>返回一个ssub_match对象</td>
  </tr>
  <tr>
    <td>m.suffix()</td>
    <td></td>
  </tr>
  <tr>
    <td>m.format()</td>
    <td></td>
  </tr>
  <tr>
    <td>m.length(n)</td>
    <td></td>
  </tr>
  <tr>
    <td>m.position(n)</td>
    <td></td>
  </tr>
  <tr>
    <td>m.str(n)</td>
    <td>第n个子表达式匹配的string</td>
  </tr>
</table>