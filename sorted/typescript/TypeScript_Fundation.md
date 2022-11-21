# 基础

## ts中的类型检查

- 通过一个值的shape来判断这个值的类型

```ts
class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

interface Point {
    x: number;
    y: number;
}
function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}
const point = {x: 12, y: 26};
const point3 = {x: 12, y: 26, z: 89};
const rect = {x: 33, y: 3, width: 30, height: 80};
const color = {hex: '#187ABF'};
const virtualPoint = new VirtualPoint(13, 56);

logPoint(point);   // logs "12, 26"
logPoint(point3);  // logs "12, 26"
logPoint(rect);    // logs "33, 3"
logPoint(virtualPoint); // logs "13, 56",
logPoint(color);   // error
```

1. 在上面的例子中`point`并没有声明为`Point`类型，typescript类型检查时对比point的**shape**和Point的**shape**，如果相同则认为是Point类型
2. ts匹配的是对象字段的子集, `point3`, `rect`中有x, y字段, `color`中没有, 所以color不是Point类型
3. 类型检查对于`class实例`同样有效

## 定义接口

```ts
interface User = {
    name: string;
    id: number;
}

const user: User = {
    name: 'enigma',
    id: 0,
}
```

## 声明变量

var a = 10;


## 声明class
