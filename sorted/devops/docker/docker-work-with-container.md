# Docker - Container

* [Restart A Exited Container](#restart-a-exited-container)
* [Access To Container's File System](#access-to-container's-file-system)
* [Access To File System Of Images That Exited immediately](#access-to-file-system-of-images-that-exited-immediately)
* [Copy File Between Container And Local File System](#copy-file-between-container-and-local-file-system)

## Restart A Exited Container

```sh
docker start -a <container>
```

## Access To Container's File System

- [docker exec](docker-command-line-interface.md#exec)

```sh
docker exec -it <container> bash
```

## Access To File System Of Images That Exited immediately

```sh
docker run -it --rm --entrypoint /bin/sh <image>
```

> may be try `/bin/bash`

## Copy File Between Container And Local File System

basic syntax

```sh
docker cp <container>:<path> <local path>
docker cp <local path> <container>:<path>
```

detail syntax

```sh
docker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-
```

