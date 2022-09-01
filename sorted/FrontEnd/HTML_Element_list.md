# 元素列表

## 基础标签

## form

[form](HTML_Element_Form.md)

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

## meta标签

- name属性
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

- http-equiv属性: 定义网页所使用编码，定义网页自动刷新跳转
  - ```<meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>```，声明页面所使用的编码是utf-8
  - ```<meta charset="utf-8"/>```, HTML5中可以将上面代码简写成这种形式
  - 如果打开时乱码首先考虑是这个属性
  - ```<meta http-equiv="refresh" content="6:url=http://www.baidu.com"/>```, 表示页面6秒后自动跳转baidy.com

***
