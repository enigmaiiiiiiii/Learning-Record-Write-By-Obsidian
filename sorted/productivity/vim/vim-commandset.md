# Command List

* [copy to system clipboard](#copy-to-system-clipboard)
* [window](#window)
* [Basic Command](#basic-command)
* [Replace Command](#replace-command)
* [Multiple File Operate](#multiple-file-operate)

## Config

- `:options`: options instruction

## copy to system clipboard

- `"+y`: copy to system clipboard
- `"+p`: paste system clipboard
- `"2p`: paste previous of last copy

## window

- `:sp file`: horizontal split window
- `:vp file`: vertical split window

`C-w`

- `<C-w> s`: Horizontal split window
- `<C-w> v`: Vertical split window
- `<C-w> q`: quit a window
- `<C-w> - / +`: Decrease/Increase height
- `<C-w> < / >`: Decrease/Increase width
- `<C-w> j/k/h/l`: Move to window below/above/left/right

## Basic Command

- `:w`: save
- `:q`: quit vim
- `:q!`: quit without save
- `:wq`: save and quit
- `:wq!`: force save and quit, even if file is readonly

## Replace Command

> `:g/{pattern}/{cmd}` apply the command `{cmd}` to all lines matching the `pattern`

-   :g/\<fred\>/ 
-   :g/<pattern>/z#.5
-   :g/<pattern>/z#.5|echo '=========='

## Multiple File Operate

File Explorer

- `:Ex` : open a explorer
- `:Sex` :
- `:ls`:
- `:cd ..` :
- `:pwd`
- `:args` :
- `:lcd %:p:h`:
