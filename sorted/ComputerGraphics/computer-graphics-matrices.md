# Matrices

* [Transformation Matrices](#transformation-matrices)
* [Only Translate On Position](#only-translate-on-position)
* [Scaling Matrix](#scaling-matrix)

## Transformation Matrices

$$
\begin{bmatrix}
a & b & c & d\\[1mm]
e & f & g & h\\[1mm]
i & j & k & l\\[1mm]
m & n & o & p
\end{bmatrix}
\times
\begin{bmatrix}
x \\[1mm]
y \\[1mm]
z \\[1mm]
w
\end{bmatrix}
=
\begin{bmatrix}
ax + by + cz + dw\\[1mm]
ex + fy + gz + hw\\[1mm]
ix + jy + kz + lw\\[1mm]
mx + ny + oz + pw
\end{bmatrix}
$$

## Only Translate On Position

the translation matrix looks like:

$$
\begin{bmatrix}
1 & 0 & 0 & x\\[1mm]
0 & 1 & 0 & y\\[1mm]
0 & 0 & 1 & z\\[1mm]
0 & 0 & 0 & 1
\end{bmatrix}
$$

translate vector $[1, 1, 1, 1]$ to $[4, 1, 1, 1]$

$$
\begin{bmatrix}
1 & 0 & 0 & 3\\[1mm]
0 & 1 & 0 & 0\\[1mm]
0 & 0 & 1 & 0\\[1mm]
0 & 0 & 0 & 1
\end{bmatrix}
\times
\begin{bmatrix}
1 \\[1mm]
1 \\[1mm]
1 \\[1mm]
1
\end{bmatrix}
=
\begin{bmatrix}
4 \\[1mm]
1 \\[1mm]
1 \\[1mm]
1
\end{bmatrix}
$$

## Scaling Matrix

$$
\begin{bmatrix}
x & 0 & 0 & 0\\[1mm]
0 & y & 0 & 0\\[1mm]
0 & 0 & z & 0\\[1mm]
0 & 0 & 0 & 1
\end{bmatrix}
$$