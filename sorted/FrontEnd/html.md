# HTML

[HTML标签](HTML_Tag.md)

[form](HTML_Element_Form.md)

## HTML元素

- 从开始标签到结束标签的所有代码

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
  - `name="keywords/description/author/copyright`
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

## class属性

- 用来将元素归类
- 一个元素可以归入多个类别

```html
<a class="class1 class2" href="http://apress.com">apress web site</a>
```

## Content categories

- 每個 HTML 元素都要遵从該元素可擁有何種內容規則
- 几種常用的內容模型（content model）。
  - 主要内容类型(Main content categories)
    - Metadata type: 元数据类型
    - Flow content: 流内容
    - Sectioning content: 章节型内容
    - Heading content: 标题型内容
    - Phrasing content: 段落型内容
    - Embedded content: 嵌入内容
    - Interactive content: 互动内容
    - Palpable content: 可见内容
    - Form-associated content: 表单关联内容
    - Secondary content: 次级内容
    - Transparent content: 透明内容
  - 表单相关内容类型(Form related content categories)
  - 特别内容类型(Specific content categories)
- 每個 HTML 元素都属于零個、一個、或數個內容的模型，所有元素內容的設置規則都要遵從 HTML 一致性文件。


