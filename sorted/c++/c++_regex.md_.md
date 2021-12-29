# 正则表达式

1.  `regex r(pattern);`  构造一个用于查找模式的regex对象
  - pattern为是[std::string](c++_std_string.md)
2.  `smatch results;`, 声明一个smatch对象保存搜索结果
3. `regex_search(test_str, results, r);`, 

 正则表达式对象

[std::regex](c++_regex_std_regex.md)

匹配字符串

[smatch](c++_regex_smatch.md)

[std::regex_match函数](c++_regex_std_regex_match().md)

匹配结果

