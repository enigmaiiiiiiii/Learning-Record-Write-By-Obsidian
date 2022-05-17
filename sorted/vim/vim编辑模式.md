# vim handbook

![vim map](vim.en.png)

## 1. Normal mode 正常模式

> shift加字符一般为反向操作
> 有的单个字母完成一项动作，有的字母组合完成一项动作，数字在指令中的作用一般为重复次数 


## 2. Insert mode 输入模式

- i,a,o,s以不同方式进入输入模式  
- ESC退出输入模式，进入正常模式

## 3. Command mode 命令模式

> **:(冒号)**:  进入Command mode  

进入Command mode后，可以执行替换，功能调用，文件操作，环境设置，插件操作等  

**:{作用范围}s/A/B/{替换标志}** 将A替换成B  

- 作用范围:{1,3}表示第1行至第三行,作用范围%表示全部
- 替换标志：c——每次替换前都会询问; e——不显示error; g——不询问; i——不区分大小写

**:set hlsearch** 设置搜索高亮  
**:w** 保存当前修改但不退出文件  
**:w file** 保存当前文件到file（另存为）
**:r file**  读取file内容并加到当前光标bb后
**:! command** shell command
**:q!** 退出文件但不保存
**:wq** 退出并保存
**:saveas file** 另存为file

## 4. Visual mode 选择模式

- `v`: 常规选择模式
- `V`： 行选择模式 
- `crtl + v`: 列选择模式

## 5. 宏录制

**q**: 宏录制, q开始录制 + 绑定字符(a,b,c,...) + 录制动作 + q结束录制
