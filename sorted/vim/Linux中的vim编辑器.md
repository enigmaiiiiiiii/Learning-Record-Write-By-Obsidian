# vim of linux

## Linux下vim插件  

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

<table>
    <tr>
        <td>:Command</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>:PlugInstall</td>
        <td>Install plugins</td>
    </tr>
    <tr>
        <td>:PlugUpdate</td>
        <td>Install or update plugins</td>
    </tr>
    <tr>
        <td>:Plugclean</td>
        <td>Remove unlisted plugins (bang version will clean without prompt)</td>
    </tr>
    <tr>
        <td>:PlugUpgrade</td>
        <td>Upgrade vim-Plug itself</td>
    </tr>
    <tr>
        <td>:PlugStatus</td>
        <td>check the status of plugins</td>
    </tr>
</table>  