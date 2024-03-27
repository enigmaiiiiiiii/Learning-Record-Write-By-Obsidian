# CSharp - Array

- Before using an array, you must declare it and create it using the new operator

## Create Array

One-dimensional array

- `int[5] arr = {1, 2, 3, 4, 5};`
- When created, the number of elements can be omitted: `char[] s = {'a', 'e', 'i', 'o', 'u'};`
- Create an array using `new`: `int[] array2 = new int[] {1, 3, 5, 7, 9};`

Creating a multidimensional array, each dimension is separated by `,`, such as 

- `int[,] array2 = new int[,] {{1, 2},{2, 4}};`

Creating a jagged array, 

- `int[][] crossarr;`

When creating an array instance, the number of dimensions and the length of each dimension are established. These values cannot be changed during the lifetime of the instance.

## Array is a reference type

- Array is object of System.Array class, array type is derived from abstract base type [reference type](csharp-value-reference.md)
- All arrays implement [IList] and [IEnumerable]. You can use the foreach statement to iterate through an array. 
- One-dimensional arrays also implement `IList<T>` and `IEnumerable<T>`

> distinct from c/c++ where array is a continuous memory addressable area

## Default Value

- value type element: 0
- reference type element: null

