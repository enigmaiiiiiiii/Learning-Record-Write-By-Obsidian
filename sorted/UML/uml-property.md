## property

- complete format

```
visibility name: type mutiplicity = default {property-string}
```

for example

```
- name: String [1] = "Untitled" {readOnly}
```

- visibility: ，用`+`和`-`表示公有还是私有
  - (+): public
  - (-): private
  - (\*): protected
- name: 属性的名称
- type: 属性的类型
- mutuplicity: 属性的多重性
  - 1: 有且只有一个值
  - 0..1: 有或没有
  - \*: 零或更多(集合或数组)
多重性术语: 
  - Optional: 可选的，下限是0
  - Mandatory: 强制的，下限为1，也可能更多
  - Single-valued: 单值的， 上限为1
  - Multivalued: 多值的，大于1，通常是*
- default: 属性默认值
- property-string: 附加信息