# Docker Command - run

## Syntax

```bash
docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
```

- `IMAGE`: image template to create container instance
- `[OPTIONS]`: options parameter
- `[COMMAND]`: command to run after container run

## Take A look


```bash
docker run -d -p 80:5000 training/webapp python app.py
```

- `training/webapp`: image name
- `python app.py`: use to start application in container, equal to type `$ python app.py` in command line
- `-d`: running in background
- `-p`: set port
  - `80`: host port
  - `5000`: container port

## options

- through options parameter, you can override default configuration in image

> almost all configuration in image can be override
> so `run` command has more options than other command
