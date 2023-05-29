# input

## value

- value: input控件中的输入

value属性

- value属性指定初始值, 如`<input value="init">`

## type attribute

```html
<input type="text" name="username" value="init">
```

- work mode of `<input>` tag depends on `type` attribute
- default value is `text`
- avaible values:
  - button
  - checkbox
  - color
  - date
  - datetime-local
  - email
  - file
  - hidden
  - image
  - month
  - number
  - password
  - radio
  - range
  - reset
  - search
  - submit
  - tel
  - text
  - time
  - url
  - week

## attribute

> 影响input属性的表现方式, 如max, maxlength, list, 

- **name**
  - 一般是为必须属性, 没有name属性的标签其value不会被提交
  - 当一个标签被赋予一个name属性时，name属性的值将编程input标签的属性(property)
  - 避免指定name属性的值与表单内置属性的名称相同, 会覆盖预定义的属性
- placeholder: 站位内容，提示输入内容