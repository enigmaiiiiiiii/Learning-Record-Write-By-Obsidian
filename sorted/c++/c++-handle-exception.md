#  处理异常语句

- throw表达式
  - 用来引发异常
- try语句块: 如果`program-statements`发生了`exception-declaration`,则执行对应catch块中的语句

  ```c++
  try {
      program-statesments
  } catch (exception-declaration) {
      handler-statements
  } catch (exception-declaration) {
      handler-statements
  }
  ```

  > exception declaration: 指定了该catch子句的能处理的异常类型
- 编写异常安全的代码非常困难
  - 对于需要处理异常并继续执行的程序，要注意异常发生后，程序如何确保对象有效，资源无泄漏等等

## 异常类

- exception头文件: exception异常类，只报告异常发生，不提供任何额外信息
- stdexcept头文件: 几种常见的异常类
<table>
    <tr>
        <td>runtime_error</td>
        <td>只有在运行时才能检测出的问题</td>
    </tr>
    <tr>
        <td>range_error</td>
        <td></td>
    </tr>
    <tr>
        <td>overflow_error</td>
        <td></td>
    </tr>
    <tr>
        <td>underflow_error</td>
        <td></td>
    </tr>
    <tr>
        <td>logic_error</td>
        <td></td>
    </tr>
    <tr>
        <td>domain_error</td>
        <td></td>
    </tr>
    <tr>
        <td>invalid_argument</td>
        <td></td>
    </tr>
    <tr>
        <td>length_error</td>
        <td></td>
    </tr>
    <tr>
        <td>out_of_range</td>
        <td></td>
    </tr>
</table>
- new头文件: bad_alloc异常
- type_info头文件: bad_cast异常类型
- exception, bad_alloc, bad_cast只能以默认方式初始化这些对象
- 其他几种类型要使用**string对象**或者**c风格的字符串**初始化这些对象,不允许默认初始化，必须提供初始值
