# Practical Command

* [Check Port](#check-port)
* [winget](#winget)
* [Get-Help Document](#get-help-document)
* [make directory](#make-directory)
* [show file list](#show-file-list)
* [Directory Tree](#directory-tree)
* [Print Environment Variable](#print-environment-variable)
* [Command Location](#command-location)

## Check Port

check all port

```bash
netstat -ano
```

check specific port

```bash
netstat -ano | findstr "8080"
```

## winget

## Get-Help Document

- `Get-Help cmdlet`: get help document of `cmdlet`

## make directory

```sh
md
```

## show file list

- ls
- dir

## Directory Tree

display directory tree

```sh
tree
```

display directory tree with file name

```sh
tree /f
```

## Print Environment Variable

```shell
$env:VARIABLE_NAME
```
## Command Location

```sh
where.exe <command>
```

##