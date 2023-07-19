# Docker - Container

## Access To Container's File System

```sh
docker exec -it <container> bash
```

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

