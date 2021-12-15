 # 模板实例化
 
 - 模板只有实例化参会有代码出现
 
 ## 显示实例化
 
 ```c++
 template class template-name<argument-list>;
 extern template class template-name<argument-list>;
 // template-name模板名称，argument-list模板参数, 其余都是关键词
 ```
 
 - 出现在模板定义后, 出现在外围命名空间
 
 ## 隐式实例化
 
- `template-name<argument> struct_object;`