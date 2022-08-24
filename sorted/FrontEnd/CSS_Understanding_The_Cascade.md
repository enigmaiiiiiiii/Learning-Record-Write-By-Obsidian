# Understanding the Cascade

## 顺序

- 层叠性: 两条**同级别**的规则应用到同一个元素的时候，后一条规则会生效

## 优先级

> 优先级: 选择器范围小覆盖大, 本质上不同的选择器有不同的分数

- 可以把ID, CLASS, ELEMENT看作数字的百位，十位，个位
- *, +, >, ~不会影响选择器的优先级

|Selector|Identifiers|Classes|Elements|Total specificity|
|--|--|--|--|:--:|
|h1|0|0|1|001|
|h1 + p::first-letter|0|0|3|003|
|li > a\[href*="en-US"]>.inline-warning|0|2|2|022|
|\#identifier|1|0|0|100|
|button:not(\#mainBtn, .cta)|1|0|1|101|
 
## 重要性 

