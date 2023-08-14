# form

## What is for

- interactive controls containing submitting information
- use to collect user input

## form related elements

- tag that used inside form
- form-associated elements
  - [button]
  - fieldset
  - [input](html-element-input.md)
  - object
  - output
  - select
  - textarea
  - img

## action property

- value of action is the program [uri](computer-network-uri.md) that will handle the submitted form data
- can be overridden by `formaction` attribute on `<button>, <input type="submit">, <input type="image">` elements

## method property

- specific [http method](http-request-method.md) to submit form data
- available value: 1.post 2.get 3.dialog

get method

- form data is appended to the action attribute URL with a '?' as a separator
- the corresponding name/value pairs are concatenated after the '?', for example `/url?key1=value1&key2=value2`

## enctype属性

```html
<form action="demo_post_enctype.html"
method="post" enctype="multipart/form-data">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="submit">
</form>
```

- enctype property specifies how the form-data should be encoded when submitting it to the server

Available Value

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
