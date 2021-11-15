# do ... while (0)

- 用在类函数宏定义中,使macro函数符合代码习惯的同时，保证语法正确

```c++
#define f(x) sentence1;sentence2
if (condition) f(x);
// 等价于
if (condition) 
  sentence1;
sentence2;  // 不符合要表达的含义

// -----------对于右大括号的宏定义语句-----------------
#define f(x) {sentence1;sentence2}

if (condition) f(x);
// 等价于
if (condition) {
  sentence1;
  sentence2;
}; // 语法错误
```

- do{...}while(0)

```c++
#define f(x) do {sentence1;sentence2;} while (0)
if (condition) f(x)
// 
if (condition) {
  sentence1;
  sentence2;
}
```


## stackoverflow answer

It's the only construct in C that you can use to `#define` a multistatement operation, put a semicolon after, and still use within an `if` statement. An example might help:

```c
#define FOO(x) foo(x); bar(x)

if (condition)
    FOO(x);
else // syntax error here
    ...;
```

Even using braces doesn't help:

```c
#define FOO(x) { foo(x); bar(x); }
```

Using this in an `if` statement would require that you omit the semicolon, which is counterintuitive:

```c
if (condition)
    FOO(x)
else
    ...
```

If you define FOO like this:

```c
#define FOO(x) do { foo(x); bar(x); } while (0)
```

then the following is syntactically correct:

```c
if (condition)
    FOO(x);
else
    ....
```