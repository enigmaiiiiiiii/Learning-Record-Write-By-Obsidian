# class

## readonly

- 不能在constructor之外修改

```ts
class Greeter {
    readonly name: string;
}
```

## constructor

## method

## getters/setters

```ts
class C {
    _length = 0;
    get length() {
        return this._length;
    }
    set length(value) {
        this._length = value;
    }
}
let c = new C();
c.length = 10;
console.log(c.length); // 10
```

> only `get` no `set`, property is auto readonly

可以设置多种类型的getter/setter

```ts
class Thing() {
    _size = 0;
    get size() {
        return this._size;
    }
    set size(value: string | number | boolean) {
        this._size = num;
    }
}
```

## index signature

```ts
class MyClass {
    [index: number]: string;
    check(index: number) {
        return this[index] as boolean;
    }

}
```