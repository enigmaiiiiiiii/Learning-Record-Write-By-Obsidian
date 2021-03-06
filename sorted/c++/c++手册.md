# 工具

## 预处理指令

<table>
    <tr>
        <td>#define</td>
        <td>定义一个预处理宏</td>
    </tr>
    <tr>
        <td>#undef</td>
        <td>取消宏定义</td>
    </tr>
    <tr>
        <td>#if</td>
        <td>编译预处理中的条件命令，相当于C语法中的if语句</td>
    </tr>
    <tr>
        <td>#ifdef</td>
        <td>判断某个宏是否被定义,若已定义执行后面的语句</td>
    </tr>
    <tr>
        <td>#ifndef</td>
        <td>判断某个宏是否未定义</td>
    </tr>
    <tr>
        <td>#elif</td>
        <td>若之前的if语句都不满足条件，则执行#elif判断语句</td>
    </tr>
    <tr>
        <td>#else</td>
        <td></td>
    </tr>
    <tr>
        <td>#endif</td>
        <td>结束一系列判断语句</td>
    </tr>
    <tr>
        <td>#include</td>
        <td>包含文件命令</td>
    </tr>
    <tr>
        <td>#warning</td>
        <td></td>
    </tr>
    <tr>
        <td>#line</td>
        <td></td>
    </tr>
    <tr>
        <td>#error</td>
        <td></td>
    </tr>
    <tr>
        <td>#pragma</td>
        <td>定义编译器行为</td>
    </tr>
</table>

## 标准迭代器运算符

<table>
    <tr>
        <td>*iter</td>
        <td>返回迭代器iter所指元素</td>
    </tr>
    <tr>
        <td>iter->mem</td>
        <td>解引用iter，并调用mem成员</td>
    </tr>
    <tr>
        <td>++iter</td>
        <td>令iter指向容器下一元素</td>
    </tr>
    <tr>
        <td>--iter</td>
        <td>令iter指向容器上一元素</td>
    </tr>
    <tr>
        <td>iter1 == iter2</td>
        <td>判断两个迭代器是否相等</td>
    </tr>
    <tr>
        <td>iter1 != iter2</td>
        <td>判断两个迭代器是否不等</td>
    </tr>
</table>

## 形参initializer_list的操作

<table>
    <tr>
        <td>initializer_list&lt;T&gt; lst;</td>
        <td>默认初始化; T类型元素空列表</td>
    </tr>
    <tr>
        <td>initializer_list&lt;T&gt; lst{a, b, c,...};</td>
        <td>列表初始化</td>
    </tr>
    <tr>
        <td>lst2(lst)</td>
        <td rowspan="2">拷贝initializer_lst对象，不会拷贝元素，与原始列表共享元素</td>
    </tr>
    <tr>
        <td>lst2 = lst</td>
    </tr>
    <tr>
        <td>lst.size()</td>
        <td>列表中的元素数量</td>
    </tr>
    <tr>
        <td>lst.begin()</td>
        <td>返回lst中首元素的指针</td>
    </tr>
    <tr>
        <td>lst.end()</td>
        <td>返回lst尾后元素的指针</td>
    </tr>
</table>

## 头文件stdexcept异常类

<table>
    <tr>
        <td>exception</td>
        <td>最常见的问题</td>
    </tr>
    <tr>
        <td>runtime_error</td>
        <td>最常见的问题</td>
    </tr>
    <tr>
        <td>range_error</td>
        <td>最常见的问题</td>
    </tr>
    <tr>
        <td>overflow_error</td>
        <td>运行时错误：计算上溢</td>
    </tr>
    <tr>
        <td>underflow_error</td>
        <td>运行时错误：计算下溢</td>
    </tr>
    <tr>
        <td>underflow_error</td>
        <td>最常见的问题</td>
    </tr>
    <tr>
        <td>logic_error</td>
        <td>最常见的问题</td>
    </tr>
    <tr>
        <td>domain_error</td>
        <td>最常见的问题</td>
    </tr>
    <tr>
        <td>invalid_argument</td>
        <td>最常见的问题</td>
    </tr>
    <tr>
        <td>length_error</td>
        <td>最常见的问题</td>
    </tr>
    <tr>
        <td>out_of_range</td>
        <td>最常见的问题</td>
    </tr>
</table>

## IO类型

<table border="1">
    <caption>IO类型</caption>
    <tr>
        <th>头文件</th>
        <th>数据类型</th>
        <th>对象说明</th>
    </tr>
    <tr>
        <td rowspan="3">iostream</td>
        <td>istream, wistream</td>
        <td>从<b>流</b>读取数据</td>
    </tr>
    <tr>
        <td>ostream, wostream</td>
        <td>向<b>流</b>写入数据</td>
    </tr>
    <tr>
        <td>iostream, wiostream</td>
        <td>读写<b>流</b></td>
    </tr>
    <tr>
        <td rowspan="3">fstream</td>
        <td>ifstream, wifstream</td>
        <td>从<b>文件</b>读取数据</td>
    </tr>
    <tr>
        <td>ofstream, wofstream</td>
        <td>像<b>文件</b>写入数据</td>
    </tr>
    <tr>
        <td>fstream, wfstream</td>
        <td>读写<b>文件</b></td>
    </tr>
    <tr>
        <td rowspan="3">sstream</td>
        <td>istringstream, wistringstream</td>
        <td>从string读写数据</td>
    </tr>
    <tr>
        <td>ostringstream, wostringstream</td>
        <td>向string写入数据</td>
    </tr>
    <tr>
        <td>stringstream, wstringstream</td>
        <td>读写string</td>
    </tr>
</table>

## IO类型的条件状态

<table border="1">
    <caption>条件状态(<b>strm</b>表示IO类型)</caption>
    <tr>
        <td><b>strm</b>::iostate</td>
        <td><b>strm</b>是一种IO类型,提供了表达条件状态的完整功能</td>
    </tr>
    <tr>
        <td><b>strm</b>::badbit</td>
        <td>用来指出流已<b>崩溃</b></td>
    </tr>
    <tr>
        <td><b>strm</b>::failbit</td>
        <td>用来指出一个IO操作失败了</td>
    </tr>
    <tr>
        <td><b>strm</b>::eofbit</td>
        <td>用来指出流达到了文件结束</td>
    </tr>
    <tr>
        <td><b>strm</b>::goodbit</td>
        <td>用来指出流位处于错误状态。此值保证为0</td>
    </tr>
    <tr>
        <td>s.eof()</td>
        <td>若流s的eofbit置位，则返回true</td>
    </tr>
    <tr>
        <td>s.fail()</td>
        <td>若流s的failbith或badbit置位，则返回true</td>
    </tr>
    <tr>
        <td>s.bad()</td>
        <td>若流s处于有效状态，则返回true</td>
    </tr>
    <tr>
        <td>s.clear()</td>
        <td>将流s中所有状态位复位，将流的状态设置为有效。返回void</td>
    </tr>
    <tr>
        <td>s.clear(flags)</td>
        <td>根据给定的flags标志位，将流s中对应条件状态复位。flags的类型为strm::iostate。返回void</td>
    </tr>
    <tr>
        <td>s.clear()</td>
        <td>将流s中所有状态位复位，将流的状态设置为有效。返回void</td>
    </tr>
</table>

<table>
    <tr>
        <td>fstream fstrm;</td>
        <td>创建一个未绑定的文件流;fstream是头文件fstream中定义的一个类型</td>
    </tr>
    <tr>
        <td>fstream fstrm(s);</td>
        <td>创建一个fstream, 并打开名为s的文件。<br>
            s可以是string或指向C风格的字符串<br>
            这些构造函数都是explicit的<br>
            默认的文件模式mode依赖于fstream的类型</td>
    </tr>
    <tr>
        <td>fstream fstrm(s, mode);</td>
        <td>按指定mode打开文件</td>
    </tr>
    <tr>
        <td>fstm.open(s);</td>
        <td>打开名为s的文件， 并将文件于fstrm绑定<br>
            s可以是一个string或一个指向c风格的字符串<br>
            默认的文件mode依赖于fstream的类型，返回void</td>
    </tr>
    <tr>
        <td>fstrm.close();</td>
        <td>关闭fstrm绑定的文件，返回void</td>
    </tr>
    <tr>
        <td>fstrm.is_open;</td>
        <td>判断于fstrm关联的文件是否成功打开，且尚未关闭，返回bool类型</td>
    </tr>
</table>

## istream_iterator操作

<table>
    <tr>
        <td>istream_iterator&lt;T&gt; in(is);</td>
        <td>in从输入流is读取类型为T的值</td>
    </tr>
</table>

## 位运算符

<table>
    <caption>位运算符（左结合律)</caption>
    <tr>
        <th>运算符</th>
        <th>功能</th>
        <th>用法</th>
    </tr>
    <tr>
        <td> ~ </td>
        <td> 位求反 </td>
        <td> expr1 &lt;&lt; expr2 </td>
    </tr>
    <tr>
        <td> &lt;&lt; </td>
        <td> 左移 </td>
        <td> expr1 &lt;&lt; expr2 </td>
    </tr>
    <tr>
        <td> &gt;&gt; </td>
        <td> 右移 </td>
        <td> expr1 &gt;&gt; expr2 </td>
    </tr>
    <tr>
        <td> & </td>
        <td> 位与 </td>
        <td> expr1 & expr2 </td>
    </tr>
    <tr>
        <td> ^ </td>
        <td> 位异或 </td>
        <td> expr1 ^ expr2 </td>
    </tr>
    <tr>
        <td> | </td>
        <td> 位或 </td>
        <td> expr1 | expr2 </td>
    </tr>
</table>

## 容器操作

<table>
    <tr>
        <td colspan="2"><font size="3">类型别名(配套类型), 通过作用域符表明属于哪种类型</font></td>
    </tr>
    <tr>
        <td>iterator</td>
        <td>此容器类型的迭代器类型</td>
    </tr>
    <tr>
        <td>const_iterator</td>
        <td>可以读取元素，但不能修改元素的迭代器类型(底层const)</td>
    </tr>
    <tr>
        <td>size_type</td>
        <td>无符号整数类型，足够保存容器元素数量最大可能</td>
    </tr>
    <tr>
        <td>difference_type</td>
        <td>带符号整数类型，足够保存两个迭代器之间的距离</td>
    </tr>
    <tr>
        <td>value_type</td>
        <td>元素类型</td>
    </tr>
    <tr>
        <td>reference</td>
        <td>元素的左值类型</td>
    </tr>
    <tr>
        <td>const_reference</td>
        <td>元素的const左值类型</td>
    </tr>
    <tr>
        <td colspan="2"><font size="3">构造函数</font></td>
    </tr>
    <tr>
        <td>container c;</td>
        <td>默认构造函数，构造空容器</td>
    </tr>
    <tr>
        <td>container c1(c2);</td>
        <td>构造c2的拷贝c1</td>
    </tr>
    <tr>
        <td>container c1(b,e);</td>
        <td>b(begin),e(end)指定范围内的元素拷贝到c1</td>
    </tr>
    <tr>
        <td>container c1{a, b, c,...};</td>
        <td>列表初始化</td>
    </tr>
    <tr>
        <td colspan="2"><font size="3">赋值与swap</font></td>
    </tr>
    <tr>
        <td>c1 = c2;</td>
        <td>将c1中的元素替换为c2中的元素</td>
    </tr>
    <tr>
        <td>c1 = {a, b, c...};</td>
        <td>c1中元素替换为列表中元素(不适用于array)</td>
    </tr>
    <tr>
        <td>a.swap(b)</td>
        <td>交换a和b的元素</td>
    </tr>
    <tr>
        <td>swap(a,b)</td>
        <td>等价于a.swap(b)</td>
    </tr>
    <tr>
        <td colspan="2"><font size="3">大小</font></td>
    </tr>
    <tr>
        <td>c.size()</td>
        <td>c中元素数目</td>
    </tr>
    <tr>
        <td>c.max_size()</td>
        <td>c可保存的最大元素数目</td>
    </tr>
    <tr>
        <td>c.empty()</td>
        <td>判断c中元素是否为空, 返回bool值</td>
    </tr>
    <tr>
        <td colspan="2">
            <p><font size="5">添加/删除元素</font></p>
            <p>不同容器，操作接口不同</p>
        </td>
    </tr>
    <tr>
        <td>c.insert(args)</td>
        <td>将args中的元素拷贝进c</td>
    </tr>
    <tr>
        <td>c.emplace(inits)</td>
        <td>使用inits构造c中的一个元素</td>
    </tr>
    <tr>
        <td>c.erase(args)</td>
        <td>删除args指定的元素</td>
    </tr>
    <tr>
        <td>c.clear()</td>
        <td>删除c中所有元素，返回void</td>
    </tr>
    <tr>
        <td>==, !=, &lt;, &lt;=, &gt;=, &gt;</td>
        <td>关系运算符(无序关联容器不支持)</td>
    </tr>
    <tr>
        <td colspan="2"><font size="5">获取迭代器</font></td>
    </tr>
    <tr>
        <td>c.begin(), container.end()</td>
        <td>指向首元素和尾后元素的迭代器</td>
    </tr>
    <tr>
        <td>c.cbegin(), container.cend()</td>
        <td>返回const_iterator</td>
    </tr>
</table>

## 顺序容器添加元素

<table>
    <thead>
        <tr>
            <td colspan = "2"><b>forward_list</b>有自己专有版本的<b>insert</b>和<b>empalce</b><br>
            <b>forward_list</b>不支持<b>push_back</b>和<b>emplace_back</b><br>
            <b>vector和string</b>不支持<b>push_front</b>和<b>emplacem_front</b></td>
        </tr>
    </thead>
    <tr>
        <td>c.push_back(obj);</td>
        <td rowspan="2">在c尾部创建一个值为t的元素，返回void，两者参数不同 </td>
    </tr>
    <tr>
        <td>c.emplace_back(args);</td>
    </tr>
    <tr>
        <td>c.push_front(obj);</td>
        <td rowspan="2">在c头部创建一个值为t的元素，返回void, 两者参数不同<br>
            push参数为对象，emplace为初始化参数
        </td>
    </tr>
    <tr>
        <td>c.emplace_front(args);</td>
    </tr>
    <tr>
        <td>c.insert(p, n, t);</td>
        <td>在迭代器p指向的元素<b>之前</b>插入n个t，返回指向第一个新添加元素的迭代器</td>
    </tr>
    <tr>
        <td>c.insert(p, b, e);</td>
        <td>将迭代器b和e范围内的元素插入迭代器p指向元素<b>之前</b>, b和e不能指向c中的元素,返回指向第一个新添加元素的迭代器</td>
    </tr>
    <tr>
        <td>c.insert(p, il);</td>
        <td>il是一个列表，返回指向第一个新添加元素的迭代器</td>
    </tr>
</table>

## 顺序容器中访问元素

<table>
    <tr>
        <td colspan="2">at和下标操作只适用于<b>string</b>, <b>vector</b>, <b>deque</b>, <b>array</b><br>
            back不适用于<b>forward_list</b>
        </td>
    </tr>
    <tr>
        <td>c.back()</td>
        <td>返回c中尾元素的<b>引用</b>。若container为空，函数行为未定义, 等价于*c.end()</td>
    </tr>
    <tr>
        <td>c.front()</td>
        <td>返回c中首元素的<b>引用</b>。若container为空，函数行为未定义,等价于*c.begin()</td>
    </tr>
    <tr>
        <td>c[n]</td>
        <td>返回下标n元素的<b>引用</b>, n是一个无符号整数。若n>=c.size(), 则函数行为未定义 </td>
    </tr>
    <tr>
        <td>contain.at(n)</td>
        <td>返回下标n元素的<b>引用</b>，如果越界, 抛出异常</td>
    </tr>
</table>

## 顺序容器删除元素

<table>
    <tr>
        <td colspan="2">
            forward_list由特殊的erase<br>
            forward_list不支持pop_back<br>
            vector和string不支持pop_front
        </td>
    </tr>
    <tr>
        <td>c.pop_back()</td>
        <td>删除c中尾元素, 返回void</td>
    </tr>
    <tr>
        <td>c.pop_front()</td>
        <td>删除c中首元素, 返回void</td>
    </tr>
    <tr>
        <td>c.erase(p)</td>
        <td>删除迭代器p指定的元素，返回一个指向被删除元素<b>之后</b>的迭代器，<br>
            若p指向尾元素，则返回尾后迭代器，<br>
            若p是尾后迭代器，则函数行为未定义
        </td>
    </tr>
    <tr>
        <td>c.erase(b, e)</td>
        <td>删除迭代器b和e所指定范围内的元素。返回指向最后一个被删除元素<b>之后</b>元素的迭代器，<br>
            若e本身就是尾后迭代器，则函数也返回尾后迭代器
        </td>
    </tr>
    <tr>
        <td>c.clear()</td>
        <td>删除c中所有元素, 返回void</td>
    </tr>
</table>

## forward_list元素操作

<table>
    <tr>
        <td>lst.before_begin()<br>
            lst.cbefore_begin()
        </td>
        <td> </td>
    </tr>
    <tr>
        <td>lst.insert_after(p,t)<br>
            lst.insert_after(p,n,t)<br>
            lst.insert_after(p,b,e)<br>
            lst.insert_after(p,il)
        </td>
        <td>p之后插入t<br>
            p之后插入n个t<br>
            p之后插入[b,e)范围的元素<br>
            p之后插入il列表
        </td>
    </tr>
    <tr>
        <td>emplace_after(p,args)</td>
        <td> </td>
    </tr>
    <tr>
        <td>lst.erase_after(p)<br>
            lst.erase_after(b,e)
        </td>
        <td> </td>
</table>

## 容器适配器支持的操作和类型

<table>
    <tr>
        <td>size_type</td>
        <td>类型，足以保存当前类型的最大对象的大小</td>
    </tr>
    <tr>
        <td>value_type</td>
        <td>元素类型</td>
    </tr>
    <tr>
        <td>container_type</td>
        <td>实现适配器的底层容器类型</td>
    </tr>
    <tr>
        <td>A a</td>
        <td>创建一个名为a的适配器</td>
    </tr>
    <tr>
        <td>A a(c)</td>
        <td>创建一个名为a的适配器，带有容器c的一个拷贝</td>
    </tr>
    <tr>
        <td>关系运算符</td>
        <td>支持关系运算符==, !=, <, <=, >, >=</td>
    </tr>
    <tr>
        <td>a.empty()</td>
        <td>若a包含任何元素，返回false，否则返回true</td>
    </tr>
    <tr>
        <td>a.size()</td>
        <td>返回a中的元素数目</td>
    </tr>
    <tr>
        <td>swap(a,b)</td>
        <td rowspan="2">交换a和b的内容，a和b必须有相同类型,包括底层容器类型</td>
    </tr>
    <tr>
        <td>a.swap(b)</td>
    </tr>
</table>

## 关联容器

<table>
    <tr>
        <td>集合</td>
        <td>底层实现</td>
        <td>是否有序</td>
        <td>数值是否可以重复</td>
        <td>能否更改数值</td>
        <td>查询效率</td>
        <td>增删效率</td>
    </tr>
    <tr>
        <td>std::set</td>
        <td>红黑树</td>
        <td>有序</td>
        <td>否</td>
        <td>否</td>
        <td>O(logn)</td>
        <td>O(logn)</td>
    </tr>
    <tr>
        <td>std::multiset</td>
        <td>红黑树</td>
        <td>有序</td>
        <td>是</td>
        <td>否</td>
        <td>O(logn)</td>
        <td>O(logn)</td>
    </tr>
    <tr>
        <td>std::unordered_set</td>
        <td>哈希表</td>
        <td>无序</td>
        <td>否</td>
        <td>否</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
</table>

<table>
    <tr>
        <td>映射</td>
        <td>底层实现</td>
        <td>是否有序</td>
        <td>数值是否可以重复</td>
        <td>能否更改数值</td>
        <td>查询效率</td>
        <td>增删效率</td>
    </tr>
    <tr>
        <td>std::map</td>
        <td>红黑树</td>
        <td>key有序</td>
        <td>key不可重复</td>
        <td>key不可修改</td>
        <td>O(logn)</td>
        <td>O(logn)</td>
    </tr>
    <tr>
        <td>std::multimap</td>
        <td>红黑树</td>
        <td>key有序</td>
        <td>key可重复</td>
        <td>key不可修改</td>
        <td>O(logn)</td>
        <td>O(logn)</td>
    </tr>
    <tr>
        <td>std::unordered_map</td>
        <td>哈希表</td>
        <td>key无序</td>
        <td>key不可重复</td>
        <td>key不可修改</td>
        <td>O(1)</td>
        <td>O(1)</td>
    </tr>
</table>

## 关联容器额外类型别名

<table>
    <tr>
        <td>key_type</td>
        <td>对应容器的键类型</td>
    </tr>
    <tr>
        <td>mapped_type</td>
        <td>{key,value}中的value类型, 只限于map容器</td>
    </tr>
    <tr>
        <td>value_type</td>
        <td>set容器同key_type<br>
            map容器对应的类型是pair类型
        </td>
    </tr>
</table>

## 关联容器insert操作

<table>
    <tr>
        <td>c.insert(v)</td>
        <td>插入value_type类型的对象</td>
    </tr>
    <tr>
        <td>c.emplace(args)</td>
        <td>用args来构造一个value_type的元素</td>
    </tr>
    <tr>
        <td>c.insert(b, e)</td>
        <td>b和e是迭代器</td>
    </tr>
    <tr>
        <td>c.insert(il)</td>
        <td>il是列表</td>
    </tr>
    <tr>
        <td>c.insert(p, v)</td>
        <td>p是搜索位置</td>
    </tr>
    <tr>
        <td>c.emplace(p, args)</td>
        <td>p是搜索位置提示</td>
    </tr>
</table>

## 关联容器中查找元素

<table>
    <tr>
        <td colspan ="2">lower_bound和upper_bound不适用于无序容器<br>
                         下标和at操作只适用于非const的map和unordered_map
        </td>
    </tr>
    <tr>
        <td>c.find(k)</td>
        <td>返回一个指向第一个键k的迭代器，若容器中没有k则返回尾后迭代器</td>
    </tr>
    <tr>
        <td>c.count(k)</td>
        <td>返回键等于k的元素数量，对于键不重复的容器，返回值用永远是0或1</td>
    </tr>
    <tr>
        <td>c.lower_bound(k)</td>
        <td>返回一个迭代器，指向第一个键不小于k的元素</td>
    </tr>
    <tr>
        <td>c.upper_bound(k)</td>
        <td>返回一个迭代器，指向第一个键大于k的元素</td>
    </tr>
    <tr>
        <td>c.equal_range(k)</td>
        <td>返回与一个pair包含两个迭代器，表示键等于k的元素的范围<br>
            若k不存在，pair的两个成员均等于c.end()</td>
    </tr>
</table>

## 无序容器管理操作

<table>
    <tr>
        <td colspan="2"><b>桶接口</b></td>
    </tr>
    <tr>
        <td>c.bucket_count()</td>
        <td>正在使用的桶的数目</td>
    </tr>
    <tr>
        <td>c.max_bucket_count()</td>
        <td>容器能容纳的最多的桶的数量</td>
    </tr>
    <tr>
        <td>c.bucket_size(n)</td>
        <td>第n个桶中有多少个元素</td>
    </tr>
    <tr>
        <td>c.bucket(k)</td>
        <td>键k在哪个桶中</td>
    </tr>
    <tr>
        <td colspan="2"><b>桶迭代</b></td>
    </tr>
    <tr>
        <td>local_iterator</td>
        <td>用来访问桶中元素的迭代器类型</td>
    </tr>
    <tr>
        <td>const_local_iterator</td>
        <td>const桶迭代器</td>
    </tr>
    <tr>
        <td>c.begin(n), container.end(n)</td>
        <td>桶n的首元素迭代器和尾后迭代器</td>
    </tr>
    <tr>
        <td>c.cbegin(n), container.cend(n)</td>
        <td>返回const_local_iterator</td>
    </tr>
    <tr>
        <td colspan="2"><b>哈希策略</b></td>
    </tr>
    <tr>
        <td>c.load_factor()</td>
        <td>每个桶的平均元素数量,返回类型float</td>
    </tr>
    <tr>
        <td>c.max_load_factor()</td>
        <td>容器试图维护的平均桶的大小，返回类型float<br>
            容器会在需要时添加新桶，使load_factor<=max_load_factor
        </td>
    </tr>
    <tr>
        <td>c.rehash(n)</td>
        <td>重组存储，使bucket_count>=n<br>
            且bucket_count>= size/max_load_factor
        </td>
    </tr>
    <tr>
        <td>c.reserve(n)</td>
        <td>重组存储，使容器可以保存n个元素且不必rehash</td>
    </tr>
</table>

## shared_ptr和unique_ptr都支持的操作

<table>
    <tr>
        <td >make_shared&lt;T&gt; sp;</td>
        <td rowspan="2">空智能指针, 可以指向类型T的对象</td>
    </tr>
    <tr>
        <td>unique_ptr&lt;T&gt; up;</td>
    </tr>
    <tr>
        <td>p</td>
        <td>用作判断条件</td>
    </tr>
    <tr>
        <td>*p</td>
        <td>解引用</td>
    </tr>
    <tr>
        <td>p->mem</td>
        <td>调用成员函数</td>
    </tr>
    <tr>
        <td>p.get()</td>
        <td>返回p中保存的<b>指针</b></td>
    </tr>
    <tr>
        <td>swap(p, q)</td>
        <td rowspan="2">交换p和q中指针</td>
    </tr>
    <tr>
        <td>p.swap(q)</td>
    </tr>
</table>

## shared_ptr独有操作

<table>
    <tr>
        <td>make_shared&lt;T&gt;(args)</td>
        <td>返回一个shared_ptr, args对应类型T构造函数 </td>
    </tr>
    <tr>
        <td>shared&lt;T&gt; p(q)</td>
        <td>p是q的拷贝，会递增q中的计数器, q的类型必须能转换成T*</td>
    </tr>
    <tr>
        <td>shared&lt;T&gt; p(u),</td>
        <td>u是unique_ptr,p从u中接管所有对象，u置为空</td>
    </tr>
    <tr>
        <td>shared&lt;T&gt; p(q,d)</td>
        <td>d是可调用对象[[算法函数的可调用表达式参数]] ;p是q的拷贝，会递增q中的计数器, q的类型必须能转换成T*<br>p将使用d来代替delete</td>
    </tr>
    <tr>
        <td>shared&lt;T&gt; p(p1,d)</td>
        <td>d是可调用对象;p是p1的拷贝，p用d来代替delete</td>
    </tr>
    <tr>
        <td>p = q</td>
        <td>此操作递减p的引用计数，递增q的引用计数, 若p的引用计数变为0，则将其管理的原内存释放</td>
    </tr>
    <tr>
        <td>p.unique()</td>
        <td>若p.use_count()为1，返回true, 否则返回false</td>
    </tr>
    <tr>
        <td>p.use_count()</td>
        <td>返回与p共享对象的只能指针数量，主要用于调试</td>
    </tr>
    <tr>
        <td>p.reset()<br>
            p.reset(q)<br>
            p.reset(p,q)</td>
        <td>若p是唯一指向器对象的shared_ptr,reset()会释放此对象<br>
            若传递了内置指针参数q，会令p指向q<br>
            将会调用d来释放q</td>
    </tr>
</table>

## unique_ptr

<table>
    <tr>
        <td>unique_ptr&lt;T&gt; u1</td>
        <td>空unique_ptr,使用delete释放指针</td>
    </tr>
    <tr>
        <td>unique_ptr&lt;T, D&gt; u1</td>
        <td>空unique_ptr, 用可调用对象D来释放指针</td>
    </tr>
    <tr>
        <td>unique_ptr&lt;T&gt; u(d)</td>
        <td>空unique_ptr</td>
    </tr>
    <tr>
        <td>u = nullptr</td>
        <td>空unique_ptr</td>
    </tr>
    <tr>
        <td>u.release()</td>
        <td>放弃对指针的控制权，<b>返回指针</b>，并将u置为空</td>
    </tr>
    <tr>
        <td>u.reset()</td>
        <td>空unique_ptr</td>
    </tr>
    <tr>
        <td>u.reset(q)</td>
        <td>令u指向内置指针q指向的对象</td>
    </tr>
    <tr>
        <td>u.reset(nullptr)</td>
        <td>将u置为空</td>
    </tr>
</table>

## weak_ptlr操作

<table>
    <tr>
        <td>weak_ptr&lt;T&gt; w</td>
        <td>空weak_ptr</td>
    </tr>
    <tr>
        <td>weak_ptr&lt;T&gt; w(sp)</td>
        <td>与shared_ptr类似</td>
    </tr>
    <tr>
        <td>w = p</td>
        <td>p可以是一个shared_ptr或以个weak_ptr对象，w与p共享对象</td>
    </tr>
    <tr>
        <td>w.reset()</td>
        <td>将w置为空</td>
    </tr>
    <tr>
        <td>w.use_count()</td>
        <td>与w共享对象的shared_ptr的数量</td>
    </tr>
    <tr>
        <td>w.expired()</td>
        <td>若w.use_count()为0， 返回true，否则返回false</td>
    </tr>
    <tr>
        <td>w.lock()</td>
        <td>如果expired为true，返回一个空shared_ptr;否则返回一个指向w的对象的shared_ptr</td>
    </tr>
</table>

## allocator算法

<table>
    <tr>
        <td>uninitialized_copy(b, e, b2)</td>
        <td>拷贝迭代器b和e范围的元素到b2，b2未构造，b2指向的内存足够大<br>
            返回指向最后一个<b>构造的元素之后</b>的位置</td>
    </tr>
    <tr>
        <td>uninitialized_copy_n(b, e, b2)</td>
        <td>从迭代器b指向的元素开始，拷贝n个元素到b2</td>
    </tr>
    <tr>
        <td>uninitialized_fill(b, e, t)</td>
        <td>在迭代器b和e范围内创建均为对象t的拷贝</td>
    </tr>
    <tr>
        <td>uninitialized_fill_n(b, n, t)</td>
        <td>从迭代器b开始创建n个对象t,b指向足够大内存</td>
    </tr>
</table>