# Linux - tar

## What's For

- storing multiple files in one file, but not compressing
- unbinding .tar file

## Practical Use

compress `file1` and `dir2` to `package.tar`, list details

```bash
tar -cvf package.tar file1 dir2
```

extract file in `package.tar` to /tmp

```bash
tar -xvf package.tar -C /tmp
```

**depress** and **extract** file in `package.tar.gz` to /tmp

```sh
tar -zxvf package.tar.gz -C /tmp
```

list files in `package.tar.gz` and `package.tar`

```sh
tar -tf package.tar.gz
tar -tf package.tar
```

## Options

- `tar -A [OPTIONS] ARCHIVE ARCHIVE`
- `tar -c [-f ARCHIVE] [OPTIONS] [FILE...]`: create `[file...]` as a new archive named `ARCHIVE`
- `tar -d [-f ARCHIVE] [OPTIONS] [FILE...]`
- `tar -t [-f ARCHIVE] [OPTIONS] [MEMBER...]`: list files in `ARCHIVE`
- `tar -r [-f ARCHIVE] [OPTIONS] [FILE...]`
- `tar -u [-f ARCHIVE] [OPTIONS] [FILE...]`
- `tar -x [-f ARCHIVE] [OPTIONS] [MEMBER...]`
- `-v` or `--verbose`: output verbose information
- `-z` or `--compress`: use gzip to compress
- `-C` or `--directory=DIR`
  - the following options affect the directory `DIR`
  - order sensitive, affect all following options
