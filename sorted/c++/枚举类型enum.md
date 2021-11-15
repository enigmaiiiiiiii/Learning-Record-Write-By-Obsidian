# enum

- 枚举属于字面值常量类型
- 限定作用域枚举类型`enum class open_modes {input, ouput, append};`
  - `open_modes op = input`错误， 成员被屏蔽, 作用域外不可访问
- 不限定作用域枚举类型`enum color {red, yellow, green};`
  - `color eyes = green;`正确， 可直接访问

