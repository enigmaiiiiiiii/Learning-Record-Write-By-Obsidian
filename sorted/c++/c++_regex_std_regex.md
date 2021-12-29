# std::regex

```c
basic_regex();
explicit basic_regex( const CharT* s,
                      flag_type f = std::regex_constants::ECMAScript );
basic_regex( const CharT* s, std::size_t count,
             flag_type f = std::regex_constants::ECMAScript );
basic_regex( const basic_regex& other );
basic_regex( basic_regex&& other ) noexcept;
template< class ST, class SA >
explicit basic_regex( const std::basic_string<CharT,ST,SA>& str,
                      flag_type f = std::regex_constants::ECMAScript );
template< class ForwardIt >
basic_regex( ForwardIt first, ForwardIt last,
             flag_type f = std::regex_constants::ECMAScript );
basic_regex( std::initializer_list<CharT> init,
             flag_type f = std::regex_constants::ECMAScript );
```



- `regex r(re)`: re表示一个正则表达式，可以是一个string, 一个表示迭代器范围的迭代器对k，一个空字符结尾的字符数组的指针，字符指针和计数器，或是一个花括号包围的字符列表
- `regex r(re, f);`: f表示对象处理标志，取值:
  - icase: 匹配过程忽略大小写
  - nosubs: 不保存匹配的子表达式
  - optimize: 执行速度优先于构造速度
  - ECMASCRIPT: 使用ECMA-262指定的语法, 默认选项
  - basic: 使用POSIX基本正则表达式语法
  - extended : 使用POSIX扩展的正则表达式语法
  - awk: 使用POSIX版本的awk语言的语法
  - grep
  - egrep

## 子表达式

- 用两个括号括起来表示子表达式
 如： 
```c++
 regex r("([[:alnum:]]+)\\.(cpp|cxx|cc)$", regex::icase)
```
  - 第一个子表达式: (\[\[:alnum:\]\]+)，匹配一个或多个字符的序列
  - 第二个子表达式: (cpp|cxx|cc), 匹配文件扩展名