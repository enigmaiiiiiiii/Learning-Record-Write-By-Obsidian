# XSS

- XSS: Cross Site Scripting 跨站脚本
- 一种代码注入

a xss happenned when convert markdown to html

```md
this is a regular paragraph

<table>
  <tr>
    <td>Foo</td>
  </tr>
</table>

// milicious paragraph
<script>alert('hi')</script>
```

## method to mitigate it

XSS filter
