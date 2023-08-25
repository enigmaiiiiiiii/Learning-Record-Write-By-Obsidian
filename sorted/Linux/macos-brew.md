# Mac OS - Brew

* [Install Brew](#install-brew)
* [Terminology](#terminology)
* [Install package](#install-package)
* [clean](#clean)
* [Query Package Info](#query-package-info)
* [Generate Brewfile](#generate-brewfile)

## Install Brew

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Terminology

formula

- Homebrew package definition build from upstream

cask

- Homebrew package definition that installs macOS native application

Tab

- a single version of a formula

## Query Installed Package

```sh
brew list
```

## Search Package

```sh
brew search <package>
```

## Install package

```sh
brew install <package>
```

## clean

```sh
brew cleanup <package>
```

## Query Package Info

```sh
brew info <package>
```

## Generate Brewfile

```sh
brew bundle dump
brew bundle dump --file=~/.dotfiles/Brewfile
```

