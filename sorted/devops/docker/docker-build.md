# Docker - docker build command

## What's This Command Do

- build an image from a Dockerfile

## Build Context

**Build Content**: directory where `Dockerfile` execute its instruction

for file structure

```
.
├── Dockerfile
├── README.md
├── package.json
└── src
```

- when you run `docker build .`, the build context is the current directory

## Options

`--target`

- specifying target build stage by [name](dockerfile-instructions.md#from)

