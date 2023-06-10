## docker volume

## What Is This

- Way to **persistent data**
- Is a directory or filesystem that outside the container
- generated and used by a [container](#container)
- **managed by docker** completely

## feature

- shared by [containers](docker-glossary.md#container) and [composes](docker-compose.md)
- compare to [mount](docker-bind-mounts.md), it is easier to backup or migrate
- can be managed by docker CLI
- can be shared between multiple containers
- Volume's driver allow to be managed on remote host
- Volume can be pre-populated
