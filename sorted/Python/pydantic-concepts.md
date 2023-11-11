# Pydantic - Concepts

## Model

- classes with inherit from [`pydantic.BaseModel`](pydantic-basemodel.md)

## alias

- alias can be used to create instance, but can not be used to access field
- access to attribute is always by attribute name

```py
from pydantic import BaseModel, Field

class Voice(BaseModel):

    language_code: str = Field(alias='lang')

voiceA = Voice(lang='tr-TR')           # success on create instance
voiceB = Voice(language_code='tr-TR')  # validation error

print(voiceA.lang)                     # Attribute Error
print(voiceA.language_code)            # successful on access attribute
```


