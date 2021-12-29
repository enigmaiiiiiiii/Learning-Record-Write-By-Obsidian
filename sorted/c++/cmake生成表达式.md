# generator-expression

## bool值生成表达式

- 逻辑运算
  - `$<BOOL:string>`
  - `$<AND:conditions>`: conditions为用`，`隔开的list
  - `$<OR:conditions>`:conditions为用`，`隔开的list
  - `$<NOT:conditions>`:conditions为用`，`隔开的list
- 字符串对比  
  - `$<STREQUAL:string1, string2>`
  - `$<EQUAL:value1, value2>`
  - `$<IN_LIST:string, list>`
  - `$<VERSION_LESS: v1, v2>`
  
  ## 字符串生成表达式
  
  - `$<CXX_COMPILER_ID>` : 得到编译器标识符字符串
  