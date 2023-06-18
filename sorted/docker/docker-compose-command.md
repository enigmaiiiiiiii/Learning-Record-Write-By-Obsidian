# Docker - docker compose

## docker compose up

- builds, create, starts, and attaches to containers for a service
- when this command exits, all containers are stopped

starts the containers in the background

```sh
docker compose up --detach
```

on error, the exit code is 1
if interrupted using `Ctrl+C`, the exit code is 0
