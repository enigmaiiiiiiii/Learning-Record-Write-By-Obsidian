# tar

## 示例

将文件file1和目录dir2压缩为package.tar, 列出详细信息

```shell
tar -cvf package.tar file1 dir2
```

提取package.tar中的文件, 并输出到/tmp目录

```shell 
tar -xvf package.tar -C /tmp
```

解压并提取package.tar.gz中的文件, 并输出到/tmp目录

```shell
tar -zxvf package.tar.gz -C /tmp
```

列出package.tar.gz或package.tar中的文件

```shell
tar -tf package.tar.gz
tar -tf package.tar
```


## 选项

`tar -A [OPTIONS] ARCHIVE ARCHIVE`
`tar -c [-f ARCHIVE] [OPTIONS] [FILE...]`

- 用文件`[file...]`创建为档案ARCHIVE

`tar -d [-f ARCHIVE] [OPTIONS] [FILE...]`
`tar -t [-f ARCHIVE] [OPTIONS] [MEMBER...]`

- 列出档案ARCHIVE中的内容

`tar -r [-f ARCHIVE] [OPTIONS] [FILE...]`
`tar -u [-f ARCHIVE] [OPTIONS] [FILE...]`
`tar -x [-f ARCHIVE] [OPTIONS] [MEMBER...]`

`-v` or `--verbose`

- 列出详细信息

`-z` or `--compress`

- gzip指令处理备份文件

`-C` or `--directory=DIR`

- 之后的任何操作更改为DIR
- 这个option是顺序敏感的，即影响接下来的所有option

