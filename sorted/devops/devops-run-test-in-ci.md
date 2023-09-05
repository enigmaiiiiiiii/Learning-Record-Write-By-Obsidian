# DevOps - run test in CI

## Ways of run test in CI

1. Dockerfile
2. GithubAction

## Dockerfile

RUN test in build process

```dockerfile
FROM python:3.10

WORKDIR /app
COPY requirements.txt /app
RUN --mount=type=cache,target=/root/.cache/pip \
    pip3 install -r requirements.txt
COPY . .
RUN python3 manage.py test

CMD ["python3", "manage.py", "debug"]
```

## Github Action
