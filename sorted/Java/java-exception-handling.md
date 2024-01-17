# Java - Exception handler

## Exception Handling Process

1. Error program exit: When an error occurs in the program, no value will be returned and the method will exit through another path.
2. Throw exception: Throw an object encapsulating error information
3. Search: Starting from the wrong method, start from the top of the stack of the calling method, traverse the call stack, and search for an exception handler that can handle the program.
4. Matching type: An exception handler is considered appropriate if the type of the exception object thrown matches the type that the handler can handle.
5. Handling: When an appropriate handler is found, the runtime system passes the exception to the handler
6. Catch: The selected handler becomes the caught exception


## Try Block

- 包含一个或多个可能引发异常的代码
- 如果try语句中抛出了异常，程序将跳过try语句块的其余代码
  - 因此通常不在try语句块执行资源的close()方法

## Catch Block

[Catch Block](java-exception-catch-block.md)

## Finally Block

- will be executed after try block exits
- Executed even an exception is raised

> finally block is more suitable for executing `close()` method of resource

- try block is allowed to only have finally block without catch block
- return value in finally block will override return value in try block

## Use try...with block handle resource

[try...with block](java-try-with-resources.md)
