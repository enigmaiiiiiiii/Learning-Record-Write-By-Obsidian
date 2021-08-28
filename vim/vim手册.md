# vim handbook

![vim map](vim.en.png)

## 1. Normal mode 正常模式

> shift加字符一般为反向操作
> 有的单个字母完成一项动作，有的字母组合完成一项动作，数字在指令中的作用一般为重复次数 

### 基本操作

**h**: 右  
**j**: 下  
**k**: 上  
**l**: 左  
**o**: 下方插入行并进入输入模式  
**u**: 撤销  
**i**: 向前进入输入模式  
**a**: 向后进入输入模式  
**d**: 删除  
**c**: 删除并进入输入模式  
**w**: 光标前进一个单词  
**b**: 光标后退一个单词  
**e**: 光标至词尾
**r**: 替换光标处字符  
**x**: 删除当前字符  
**y**: 复制  
**p**: 粘贴  
**f**: 查找字符  
***
**gg**: 数字+gg 跳转至指定行，单独gg表示跳至第一行  
**/A**: 搜索A

***

### 常用操作

**$(Ctrl + 4)**: 移动至行尾  
**^(Ctrl + 6)**: 移动至行首第一个不是blank的字符位置  
**A(Shift + a)**: 移至当前行最后一个字符后并进入输入模式
**Crtl + a**: 数字递增  
**m+字符**: 标记位置
**`+字符**: 跳转标记位置
**``**: 跳转标记后返回标记前的位置
**Crtl + r**:取消撤销

### 宏录制

**q**: 宏录制, q开始录制 + 绑定字符(a,b,c,...) + 录制动作 + q结束录制

## 2. Insert mode 输入模式

i,a,o,s以不同方式进入输入模式  
ESC退出输入模式，进入正常模式

## 3. Command mode 命令模式

> **:(冒号)**:  进入Command mode  

进入Command mode后，可以执行替换，功能调用，文件操作，环境设置，插件操作等  

**:{作用范围}s/A/B/{替换标志}** 将A替换成B  

- 作用范围:{1,3}表示第1行至第三行,作用范围%表示全部
- 替换标志：c——每次替换前都会询问; e——不显示error; g——不询问; i——不区分大小写

**:set hlsearch** 设置搜索高亮  
**:w** 保存当前修改但不退出文件  
**:w file** 保存当前文件到file（另存为）
**:q!** 退出文件但不保存
**:wq** 退出并保存
**:saveas file** 另存为file

## 4. Visual mode 选择模式

## 5. Linux下vim插件  

首先安装插件管理工具Vim-plug
> curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

### Usage

打开vim配置文件
> vim ~/.vimrc

我此时(2021.6.24)的vim配置

```c++
call plug#begin('~/.vim/plugged')

Plug 'preservim/nerdtree'  // nerdtree插件(方便查看文件列表)
Plug 'neoclide/coc.nvim', {'branch': 'release'}  // 补全功能
Plug 'prabirshrestha/vim-lsp'  // 也是代码补全
Plug 'mattn/vim-lsp-settings'  // 
Plug 'vim-airline/vim-airline'  // 美化

call plug#end()

map <F2> :NERDTreeToggle<CR>

set number                 
set relativenumber
```

打开任意vim编辑器

> $ vim

**:Command** 执行插件相关操作
| :Command | Description |
| -- | -- |
| :PlugInstall | Install plugins |
| :PlugUpdate | Install or update plugins |
| :PlugClean | Remove unlisted plugins (bang version will clean without prompt) |
| :PlugUpgrade |  Upgrade vim-Plug itself |
| :PlugStatus | check the status of plugins |
