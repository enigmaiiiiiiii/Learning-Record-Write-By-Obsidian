# form

- interactive controls containing submitting information
- 用于收集用户输入

## 表单相关标签

- form标签包含的标签
- form-associated elements
  - [ ] [button]
  - fieldset
  - [x] [input](html-element-input.md)
  - object
  - output
  - select
  - textarea
  - img

## action属性

- action的值表示: form data处理程序的[URI]()
- 可被`<button>, <input type="submit">, <input type="image">`元素上的formaction属性覆盖

## method属性

- 提交表单的[HTTP method](http-request-message.md)
- 有限取值: 1.post 2.get 3.dialog

get方法

- 表单数据会附加在action属性的URL后, 用?隔开, 如`/url?key1=value1&key2=value2`

## enctype属性

```html
<form action="demo_post_enctype.html"
method="post" enctype="multipart/form-data">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="提交">
</form>
```

- enctype属性规定将表单数据发送到服务器之前如何对其进行编码

取值

<table>
  <tr>
    <td>application/x-www-form-urlencoded</td>
    <td>默认，空格转换成'+', 特殊字符转换成ASCII HEX值</td>
  </tr>
  <tr>
    <td>multipart/form-data</td>
    <td>有文件上传的控件表单时，该值是必须的<td>
  </tr>
  <tr>
    <td>text/plain</td>
    <td>将空格转换为‘+’ , 不编码特殊字符<td>
  </tr>
</table>
