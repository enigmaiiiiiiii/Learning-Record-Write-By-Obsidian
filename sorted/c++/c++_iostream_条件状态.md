# 条件状态

## 状态

- strm::iostate
  - 对应流的当前状态
  
### true 

- strm::goobit
  - good标志位在所有错误(bad, eof, fail)均未置位的情况下返回true
  
### false 

- strm::badbit
  - 流已崩溃，系统级错误
- strm::failbit
- strm::eofbit
  - 文件结束符标志
  - windows中的ctrl + z
  - unix, mac os 中的 crtl + d
  
  
## 查看状态  

- s.eof(): 流s的eofbit被置位返回true
- s.fail(): 流s的failbit或badbit被置位返回true
- s.bad()
- s.good(): 
- s.rdstate(): 返回流s的当前状态, 返回类型strm::iostate
  
## 管理状态

- s.clear(): 清除流的所有错误标志位
- s.clear(flags): 
- s.setstate(flags)