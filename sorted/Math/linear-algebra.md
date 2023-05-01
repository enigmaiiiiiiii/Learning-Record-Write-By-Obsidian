# Linear algebra

* [Matrix](#matrix)
* [Identity Matrix](#identity-matrix)
* [Transpose](#transpose)
* [Inversible Matrix](#inversible-matrix)

## Matrix

$$
\begin{bmatrix}
1 & 9 & -13\\[1mm]
20 & 5 & -6\\[1mm]
\end{bmatrix}
$$

## Identity Matrix

$$
\begin{bmatrix}
1 & 0 & 0\\[1mm]
0 & 1 & 0\\[1mm]
0 & 0 & 1\\[1mm]
\end{bmatrix}
$$

concisely described

- $I_n = diag(1, 1, ..., 1)$

can also written using Kronecker delta

- $(I_n)_{ij} = \delta_{ij}$

properties

- $AI_n = I_nA = A$

rank

- $rank(I_n) = n$

## Transpose

matrix $A$

$$
\begin{bmatrix}
1 & 2 \\[1mm]
3 & 4 \\[1mm]
5 & 6 \\[1mm]
\end{bmatrix}
$$

matrix $A^T$

$$
\begin{bmatrix}
1 & 3 & 5 \\[1mm]
2 & 4 & 6 \\[1mm]
\end{bmatrix}
$$

some formula

- $A = (A^T)^T$

## Inversible Matrix

an n-by-n **square matrix** A is called invertible

if there exists an n-by-n matrix B such that

$AB = BA = I$

where $I$ is [identity matrix](#identity-matrix)

then A is called invertible, and B is called the inverse of A.

---

Properties

- A is row equivalent to $I_n$
- A is column equivalent to $I_n$

## Row Equivalent

- two matrices are **row equivalence** if one can be changed to the other by a sequence of elementary row operations
