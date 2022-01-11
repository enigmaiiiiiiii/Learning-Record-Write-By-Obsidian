# form enctype属性

```html
<form action="demo_post_enctype.html"
method="post" enctype="multipart/form-data">
  First name: <input type="text" name="fname"><br>
  Last name: <input type="text" name="lname"><br>
  <input type="submit" value="提交">
</form>
```

- enctype属性规定将表单数据发送到服务器之前如何对其进行编码
- 取值


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
