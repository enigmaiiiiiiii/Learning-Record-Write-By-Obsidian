# vim of linux

## Linux Vim Plugin

Install plugin manager tool Vim-plug first

```bash
curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

vim-commentary

- 注释插件
- gcc: 注释当前行
- gc2j: 注释2行

### Usage

open vim config file

- vim ~/.vimrc

my vim config at time 2021.6.24

```bash
call plug#begin('~/.vim/plugged')

Plug 'preservim/nerdtree'  // nerdtree(file tree)
Plug 'neoclide/coc.nvim', {'branch': 'release'}  // code intelligence
Plug 'prabirshrestha/vim-lsp'  // also code intelligence
Plug 'mattn/vim-lsp-settings'  //
Plug 'vim-airline/vim-airline'  // beautify

call plug#end()

map <F2> :NERDTreeToggle<CR>

set number
set relativenumber
```

open any vim editor

> $ vim

**:Command** run command

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

## Exit And Save


`:q!` quit without save
`:wq` quit and save
`:w*` save current file without quit
`:w file` save current file to file
`:r file` read file content and add to current cursor
`:! command` shell command
`:saveas file` save as file

`ZZ`: save and quit
`ZQ`: quit without save