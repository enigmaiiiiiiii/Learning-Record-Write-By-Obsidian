# Docker - Container

## Restart A Exited Container

```sh
docker start -a <container>
```

## Access To Container's File System

```sh
docker exec -it <container> bash
```

## Access To File System of Container That Already Exit

```sh
docker run -it --rm --entrypoint /bin/sh <container>
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

