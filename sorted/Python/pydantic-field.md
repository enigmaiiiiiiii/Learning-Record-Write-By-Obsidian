# Pydantic - Field

## What It Is

- a function used to customize and add metadata to fields of models


```py
class User(BaseModel):
    name: str = Field(default="John Doe")
```

in this example, `name` is a field of User model

## Usage

```py
from pydantic import BaseModel, Field

class User(BaseModel):
    name: str = Field(default="John Doe")

user = User()
print(user)
```

## Paramaters

`default`

- define a default value for a field

```py
name: Field(default="John Doe")
```

`default_factory`

- define a default value with a callable object

```py
id: str = Field(default_factory=lambda: uuid4().hex)
```

`alias`, `validation_alias`, `serialization_alias`

- `alias` for both validation and serialization

```py
class User(BaseModel):
    name: str = Field(alias="username")

user = User(username="John Doe") # ✅
user = User(name="John Doe")      # ❌
print(user)
# {'username': 'John Doe'}
```

- `validation_alias` only for validation

```py
class User(BaseModel):
    name: str = Field(alias="username", validation_alias="username")
user = User(username="John Doe")  # ✅
user = User(name="John Doe")      # ❌
print(user)
# {'name': 'John Doe'}
```

- `serialization_alias` only for serialization

```py
class User(BaseModel):
    name: str = Field(alias="username", serialization="username")

user = User(username = "John Doe")  # ❌
user = User(name = "John Doe")      # ✅
print(user)
# {'username': 'John Doe'}
```


