# CMake - Command find_package

* [this command has two modes](#this-command-has-two-modes)
* [how cmake determine which mode to use](#how-cmake-determine-which-mode-to-use)
* [Module Mode](#module-mode)
* [Config Mode](#config-mode)
* [Download Package](#download-package)
* [Basic Command Signature](#basic-command-signature)
* [Full Command Signature](#full-command-signature)
* [options](#options)

## this command has two modes

- [Module Mode](#module-mode)
- [Config Mode](#config-mode)

## how cmake determine which mode to use

- when use [basic signature](#basic-command-signature)
  - first cmake search in [Module Mode](#module-mode)
  - if not found, fall back to [Config Mode](#config-mode)
- if `cmake_find_package_prefer_config` is set to true, the order reversed
- if module keyword is specified, force to use only [Module Mode](#module-mode)
- if [full signature](full-signature) is used, the command only searches in [config mode](#config-mode)

## Module Mode

Searching Path

- `CMAKE_MODULE_PATH`

> Not `CMAKE_PREFIX_PATH`

Searching files

- in find module mod, cmake search for `Find<PackageName>.cmake`

who provide `Find<PackageName>.cmake` file

- maybe operating system
- maybe CMake itself
- maybe project who called `find_package()`

Add-on

- only support [basic command signature](cmake-command-find-package.md#basic-command-signature)

## Config Mode

- match path `lib/cmake/<PackageName>`
- search for file named `<PackageName>Config.cmake` or `<LowercasePackagename>-config.cmake`
- if version specified, version file `<PackageName>ConfigVersion.cmake` or `<LowercasePackagename>-config-version.cmake` will be searched

who provide those files

- [installed](c-library-file.md#install-a-shared-library-on-system) as a part of package

Search Path

- first look in `CMAKE_FIND_PACKAGE_REDIRECTS_DIR`
- then
  - `<prefix>/`
  - `<prefix>/(cmake|CMake)/`
  - `<prefix>/(<name>*)`
  - ...

## Download Package


## Basic Command Signature

```cmake
find_package(<PackageName> [version] [EXACT] [QUIET] [MODULE]
             [REQUIRED] [[COMPONENTS] [components...]]
             [OPTIONAL_COMPONENTS components...]
             [REGISTRY_VIEW  (64|32|64_32|32_64|HOST|TARGET|BOTH)]
             [GLOBAL]
             [NO_POLICY_SCOPE]
             [BYPASS_PROVIDER])
```

## Full Command Signature

```cmake
find_package(...)
```

## options

MODULE

EXACT

QUIET

REQUIRED

