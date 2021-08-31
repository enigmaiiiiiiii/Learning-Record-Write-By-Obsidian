# LaTex数学

- `^`数学环境下的上标
- `&`数学环境下跳列符
- `_`数学环境下的下标命令符
- `$`数学环境命令符
- 数学公式
  $f(x)=a_nx^n+a_{n-1}$
  
$$
z = \overbrace{
   \underbrace{x}_\text{real} + i
   \underbrace{y}_\text{imaginary}
  }^\text{complex number}\tag{1}
$$

- 对齐

$$
\begin{aligned}
B'&=-\partial \times E,\\         %加&指定对齐位置
E'&=\partial \times B - 4\pi j,
\end{aligned}
$$

- 大括号

$$ 
f(x)=\left\{          % 表示大括号
\begin{aligned}
x & = & \cos(t) \\
y & = & \sin(t) \\
z & = & \frac xy
\end{aligned}
\right.
$$

- 

$$
\begin{aligned}
 \left.\begin{aligned}
        B'&=-\partial \times E,\\         %加&指定对齐位置
        E'&=\partial \times B - 4\pi j,
       \end{aligned}
 \right\}
 \qquad \text{Maxwell's equations}
\end{aligned}
$$