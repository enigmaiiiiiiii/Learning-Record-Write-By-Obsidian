# 画图语法

## mermaid

- graph 流程图
  - graph TD
  - graph TB
  - graph LR

> T:Top, B and D: Bottom, L and R: Left and Right

- stateDiagram 状态图

```mermaid
graph TB
A0[typedef char *pstring]-->A
A[pstring是char*的类型别名]-->B[const pstring cstr = 0]; 
A-->C[const char *cstr = 0];
B--类型是const指针-->D[cstr的类型char *const];
C--指向常量的指针,底层指针-->E[cstr的类型是const char*]
```

```mermaid
graph LR
id1[矩形节点]
id1 --> id2(矩形圆角节点)
id2 ==>id3([半圆节点])
id3 -.-id4((圆形))
id5>鱼尾节点]
id6{菱形节点}
id7{{六边形}}
id8[/平行四边形/]
id9[/梯形\]
```

```mermaid
flowchart TB
A --o B --x C & D
E & F --> G & H
I <--> J
```

## sequence

```sequence
left -> right : left ot right
Note right of right:right context
Note left of left:left content
```