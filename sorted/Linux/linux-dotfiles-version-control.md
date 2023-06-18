# Linux Dotfiles Version Control

## Steps

create dotfiles repository

```bash
cd ~
mkdir dotfiles
cd dotfiles
git init
```

add dotfile to repository, like `~/.vimrc`

```bash
cp ~/.vimrc ~/.vimrc
git add .vimrc
```

Create [Symbolic link](linux-file-management.md#file-link) of dotfile

```bash
ln -s ~/dotfiles/.vimrc ~/.vimrc
```


## Package

