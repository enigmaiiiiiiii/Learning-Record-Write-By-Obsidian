# Linux Command find - Practical Use

* [Find Single File In Root Directory](#find-single-file-in-root-directory)
* [Find File Content](#find-file-content)
* [Find file by type](#find-file-by-type)
* [Find file by modified time](#find-file-by-modified-time)
* [Find file And delete](#find-file-and-delete)
* [Find bad symbolic link](#find-bad-symbolic-link)

## Find Single File In Root Directory

```sh
find / -name "Foo.txt"
```

## Find File Content

Find `.txt` file in current directory with content `hello world`

```sh
find * -name "*.txt" -exec grep -H "hello world" {} \;
```

## Find file by type

Find file by type in home directory whose type is regular file

```sh
find ~ -type f
```

- `-type f`: regular file
- `-type d`: directory

## Find file by modified time

Find file haven't been modified in 30 days

```sh
find /var/log/ -iname "*.log" -mtime +30
```

- `-mtime +30`: file that modified $30 \times 24$ greater than hours
- `-mtime -30`: file that modified $30 \times 24$ less than hours

## Find file And delete

Delete all files with specific extension

```sh
find . -name "*.txt" -exec rm -rf {} \;
```

## Find bad symbolic link

find bad symbolic link in home directory

```sh
find ~ -xtype l
```
