# 元素列表

- [pre](#pre)
- [tb](#tb)
- [a](#a)
- [form](#form)
- [section](#section)
- [分区标签](#分区标签)
- [img标签](#img标签)
- [head标签](#head标签)
- [link](#link)
- [meta标签](#meta标签)

## textarea

- can use like a comment on a review or feedback form

## pre

- for persented **exactly** what is written in the html

Attribute

## tb

- 表示表格的一个单元格

## a

attribute

- href: 跳转链接
  - 取值"javascript:void(0)"表示不跳转
- target
  - _blank: 在新窗口打开
  - _self: 在当前窗口打开
  - _parent: 在父窗口打开
  - _top: 在顶层窗口打开
- rel:
  - noopenner: the resource naviagtes to is will not setting [`window.opener`]() property on **browsing context**
  - noreferrer: to omit [`refferrer`](http-request-header.md#referer) header when navigating to the URL

## form

[form](html-element-form.md)

## section

- 代表一节

## 分区标签

- div: 独占一行
- span: **行内**元素共占一行
  - 不能修改宽(width)高(height)

HTML5新增

- header
- main
- footer
- section
- nav

## img标签

- **行内块**元素, 共占一行
- 可以修改宽高

## head标签

- 包含6个标签
  - title: 浏览器中显示的标签名称
  - meta: 定义页面特殊信息
  - style: CSS样式定义于此
  - link: 也是定义CSS样式，表示引入外部CSS样式
  - script: javaScript代码定义于此
  - base: 没有意义

## link


integrity

`<link href="style.css" integrity="hashvalue">`

- 用于验证资源的完整性, 防止资源被篡改

## meta标签

name属性

- `name="keywords/description/author/copyright"`
- keywords 网页关键字
- description 网页描述
- author 作者
- copyright 版权

```html
<!DOCTYPE html>
<html>
    <!--网页关键字-->
    <meta name="keyword" content="笔记, 知识结构, 前端"/>
    <!--网页描述-->
    <meta name="descriiption" content="这是一篇关于前端的笔记,name属性关键字description是用来做网页的描述"/>
</html>
```

http-equiv attribute: 定义网页所使用编码，定义网页自动刷新跳转

- `<meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>`，声明页面所使用的编码是utf-8
- `<meta charset="utf-8"/>`, HTML5中可以将上面代码简写成这种形式
- 如果打开时乱码首先考虑是这个属性
- `<meta http-equiv="refresh" content="6:url=http://www.baidu.com"/>`, 表示页面6秒后自动跳转baidy.com

property attribute 取值

- og:title:`<meta property="og:title" content="title"/>`
  - og is Open Graph Protocol, provide a rich preview when a link is shared social media platforms
