# Docker - docker build command

## Build Context

directory where `Dockerfile` execute its instruction

for file system

```
.
├── Dockerfile
├── README.md
├── package.json
└── src
```

- when you run `docker build .`, the build context is the current directory

