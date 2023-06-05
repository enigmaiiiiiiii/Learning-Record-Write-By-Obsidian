# ASP.NET - aspnet-codegenerator

## Install

```sh
dotnet tool install -g dotnet-aspnet-codegenerator
```

update

```sh
dotnet tool update -g dotnet-aspnet-codegenerator
```

## Syntax

```sh
dotnet aspnet-codegenerator [arguments] \
    [-p|--project] \
    [-n|--nuget-package-dir] \
    [-c|--configuration] \
    [-tfm|--target-framework] \
    [-b|--build-base-path] \
    [--no-build]
```

argument

- [area]()
- [controller]()
- [identity]()
- [razorpage]
- [view]()

options

- `-p`: project file path, default is current directory
- `-n`: specifies [NuGet package]() directory
- `-c`: specifies the build configuration
- `-tfm`: specifies the target framework
- `-b`: specifies the build base path
- `--no-build`: don't build the project before generating code

## options for controller, view, razorpage

options for `aspnet-codegenerator controller, view, razorpage`

- `-m`: [Model]() to Use
- `-dc`: [DbContext]() to Use
- `-b`: bootstrap version, default is `4`
- `-f`: force overwrite existing files

## options for controller

options for `aspnet-codegenerator controller`

- `-name`: name of controller
- `--noViews`: Generate no Views
- `--useAsyncActions`: generate async controller actions

## Practical Use

