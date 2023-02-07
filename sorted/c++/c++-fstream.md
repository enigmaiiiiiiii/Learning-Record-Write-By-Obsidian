## 文件输入输出

```c++
ifstream in(file); // 构造一个ifstream并打开file
ofstream out;  // 创建一个输出文件流，为关联任何文件
```

- 成员函数
  - open
  - close
  
```c++  
ifstream in(ifile);
ofstream out;
out.open(ifile + ".copy");
```