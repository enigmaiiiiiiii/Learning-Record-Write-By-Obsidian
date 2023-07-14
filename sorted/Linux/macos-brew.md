# Mac OS - Brew

## Install Brew

```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```


## Terminology

formula

- Homebrew package definition build from upstream

cask

- Homebrew package definition that installs macOS native application

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
