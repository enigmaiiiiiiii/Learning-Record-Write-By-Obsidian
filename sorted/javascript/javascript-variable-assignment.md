# Variable Assignment

## Destructure Array

```javascript
var foo = ['one','two','three'];
var [a, b, c] = foo;
var [a = 1, b = 2, c = 3, d = 4] = foo;  // provide default value if no match
[a, b] = [b, a];
```

regex group destructure

- [ ] to do

## Destructure Object

```javascript
const user = {id: 42, isVerified: true};
const {id, isVerified} = user;  // p=42, q=true
var {p: foo, q: bar} = user; // foo=42, bar=true
```

## Destructure Function Parameter

```javascript
function userDisplayName({displayName: name}) {
    return name;
}

console.log(userDispalyName(user));
```

## destructure in for...of

[For...of]()

```javascript
const people = [
    {
        name: 'Mike Smith',
        family: {
            mother: 'Jane Smith',
            father: 'Harray Smith',
            sister: 'Samantha Smith',
        },
        age: 35,
    },
    { }
]

for (const {name: n, family: father: f} of people) {
    console.log('Name: ${n}, Father: ${f}')
}
```
