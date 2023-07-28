# yaml

- mostly used as configuration files
- suffix with`.yml` or `.yaml`

## Mapping

```yml
key:
  subkey1: value1
  subkey2: value2
```

## Array

```yml
Store:
  Bakery:
    - 'Bakery'
    - 'Bagels'
  Cheesemonger:
    - 'blue cheese'
    - 'feta'
```

convert to json

```json
{
    "Store": {
        "Bakery": [
            "Bakery",
            "Bagels"
        ],
        "Cheesemonger": [
            "blue cheese",
            "feta"
        ]
    }
}
```

**Object** Array

```yml
store:
  book:
    - name: "Harry Potter"
      price: 10
    - name: "Lord of the Rings"
      price: 15
  food:
    - name: "Apple"
      price: 1
    - name: "Orange"
      price: 2
```

Convert To Json

```json
{
  "store": {
    "book": [
      {
        "name": "Harry Potter",
        "price": 10
      },
      {
        "name": "Lord of the Rings",
        "price": 15
      }
    ],
    "food": [
      {
        "name": "Apple",
        "price": 1
      },
      {
        "name": "Orange",
        "price": 2
      }
    ]
  }
}
```

## Syntax Instance

```yml
name: Martin D'vloper
job: Developer
skill: Elite
employed: True
foods:
  - Apple
  - Orange
  - Strawberry
  - Mango
languages:
  perl: Elite
  python: Elite
  pascal: Lame
education:
  4 GCSEs
  3 A-Levels
  BSc in the Internet of Things
```

convert to json

```json
{
    "name": "Martin D'vloper",
    "job": "Developer",
    "skill": "Elite",
    "employed": true,
    "foods": [
        "Apple",
        "Orange",
        "Strawberry",
        "Mango"
    ],
    "languages": {
        "perl": "Elite",
        "python": "Elite",
        "pascal": "Lame"
    },
    "education": "4 GCSEs\n3 A-Levels\nBSc in the Internet of Things"
}
```
