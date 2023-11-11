# Pydantic - BaseModel

## Base Model

```py
from pydantic import BaseModel 

class User(Base):
    id: int
    name: str

user = User(id=123, name="jone")
```

## Method 

### model_json_schema

- generate a json schema for model class

### model_validate

- validate a pydantic model instance

return

- type of [Model](pydantic-concepts.md)

## Rebuild Model Schema

when type [forward reference](python-type-hint.md#forward-reference) used in a model

- the model class is not fully defined
- so you can not use `model_json_schema` method

```py
from pydantic import BaseModel, PydanticUserError

class Foo(BaseModel):
    x: 'Bar'

try:
    Foo.model_json_schema()
except PydanticUserError as e:
    print(e)  # 'Foo' is not fully defined; you should define 'Bar'

class Bar(BaseModel):
    pass

Foo.model_rebuild()  # rebuild works
print(Foo.model_json_schema())
```

