# Flask - Quick Start

## hello world

1. create project and activate a [virtual environment](python-virtual-environment.md)
2. install flask

```sh
python -m pip install flask
```

3. create `app.py` file

```py
from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello_world():
    return "Hello, World!"
```

4. run the app

```sh
flask --app app run
```

- `app`: the name of the module
- `run`: [`run`](flask-command-line-interface.md#run) start a **development** server 

## Externally Visible Server

If want access debugging from remote machine

```sh
flask run --host=0.0.0.0
```

