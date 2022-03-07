# 正则表达式

- c++采用[ECMAScript正则表达式](ECMAScript_正则表达式.md)
- c++中`\`反斜线是特殊字符, 用反斜线`\`的地方需要额外一个`\`来说明`\`反斜线不是特殊字符, 如`\\{d}{3}`

- 使用步骤
  1.  `regex r(pattern);`  构造一个用于查找模式的regex对象
    > pattern为是[std::string](c++_std_string.md)
  2.  `smatch results;`, 声明一个smatch对象保存搜索结果
  3. `regex_search(test_str, results, r);` 

 正则表达式对象

[std::regex](c++_regex_std_regex.md)

匹配字符串

[smatch](c++_regex_smatch.md)

[std::regex_match函数](c++_regex_std_regex_match().md)

匹配结果


