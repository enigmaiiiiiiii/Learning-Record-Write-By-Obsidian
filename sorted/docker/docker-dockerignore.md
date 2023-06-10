# Docker - .dockerignore

- in the root of the directory or context

`*/temp*`

- exclude files and directories
- whose names start with `temp`
- in any **subdirectory of the root**
- For example, `/somedir/subdir/temporary.txt`

`temp?`

- exclude files and directories in the root directory
- whose names are a single character followed `temp`
- For example `/tempa`, `/tempb`

```gitignore
*.md
!README.md
```

- All markdown file are ignored except `README.md`

```gitignore
*.md
!README.md
README-secret.md
```

- no markdown files are include
- except `README.md`
- `README-secret.md` will be ignored

```gitignore
*.md
README-secret.md
!README.md
```

- `README-secret.md` has no effect

