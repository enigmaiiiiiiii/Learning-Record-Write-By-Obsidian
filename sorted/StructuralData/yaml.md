# yaml

- 最常用作配置文件
- 后缀为`.yml`

## 映射

```yml
key:
  subkey1: value1
  subkey2: value2
```

## 数组

```yml
Store:
  Bakery:
    - 'Bakery'
    - 'Bagels'
  Cheesemonger:
    - 'blue cheese'
    - 'feta'

```

对应的json

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

**对象**数组

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

对应json

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

## 语法示例


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
对应的json格式

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