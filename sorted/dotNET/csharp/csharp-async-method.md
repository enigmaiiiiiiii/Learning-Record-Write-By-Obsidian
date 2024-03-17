# CSharp - Async Method

* [Features](#features)
* [await expression](#await-expression)
* [Task And Task<T>](#task-and-task<t>)

## Features

- `async` modifier
- Contains await expression
- return `void`, `Task`,  `Task<T>`
- parameter can not be `out`, `ref`
- Name convention: `Async` suffix

## await expression

- await expression doesn't block the thread
- `await` operator suspends the enclosing async method
- **return the control to the caller** of the method
- `await` operator can only be used in an `async` method, function, or [lambda expression]()

> the enclosing method is `GetAnswerAsync()`

```c
public async Task<int> GetAnswerAsync()
{
    await Task.Delay(1000);
    return 42;
}
```

Take A Look

```c
public class AwaitOperator
{
    public static async Task Main()
    {
        Task<int> downloading = DownloadDocsMainPageAsync();
        Console.WriteLine($"{nameof(Main)}: Launched downloading.");  // ② 

        int bytesLoaded = await downloading;
        Console.WriteLine($"{nameof(Main)}: Downloaded {bytesLoaded} bytes.");  // ④ 
    }

    private static async Task<int> DownloadDocsMainPageAsync()
    {
        Console.WriteLine($"{nameof(DownloadDocsMainPageAsync)}: About to start downloading.");  // ① 

        var client = new HttpClient();
        byte[] content = await client.GetByteArrayAsync("https://learn.microsoft.com/en-us/");  // return to main

        Console.WriteLine($"{nameof(DownloadDocsMainPageAsync)}: Finished downloading.");  // ③ 
        return content.Length;
    }
}
// Output similar to:
// DownloadDocsMainPageAsync: About to start downloading.
// Main: Launched downloading.
// DownloadDocsMainPageAsync: Finished downloading.
// Main: Downloaded 27700 bytes.
```

> the caller of `Main()` is CLR

## Return Type

1. `Task<T>`
2. Any type has a `GetAwaiter` method
3. `IAsyncEnumerable<T>`

## `Task<T>`

> like [`Promise`](javascript-promise.md) in JavaScript

`Task` for Asynchronous operation return nothing

- Doesn't have a `Result` property
- No value is produced when an `async` method is called

`Task<T>` for Asynchronous operation return T

- Contains a `Result` property of type `T`
- `Result` is a blocking property, try to access `Result` before the `Task` is completed will block the thread

Both `Task` and `Task<T>` has a `Status` property

## Any type has a `GetAwaiter` method

- `GetAwaiter` method must return a type that implements `System.Runtime.CompilerServices.INotifyCompletion` interface

`ValueTask<T>` is a lightweight implementation of `Task<T>` provide by .NET

- In following code, replace `ValueTask<int>` with `Task<int>` is also correct
- But `Task<int>` is a [Reference type](csharp-value-reference.md), allocation in performance type

```c
class Program
{
    static readonly Random s_rnd = new Random();

    static async Task Main()
    {
        Console.WriteLine($"You rolled {await GetDiceRollAsync()}");
    }

    static async ValueTask<int> GetDiceRollAsync()
    {
        Console.WriteLine("Shaking dice...");

        int roll1 = await RollAsync();
        int roll2 = await RollAsync();

        return roll1 + roll2;
    }

    static async ValueTask<int> RollAsync()
    {
        await Task.Delay(500);

        int diceRoll = s_rnd.Next(1, 7);
        return diceRoll;
    }
}
// Example output:
//    Shaking dice...
//    You rolled 8
```

## `IAsyncEnumerable<T>`

combine the features of [`IEnumerable<T>`](csharp-ienumerable.md) and `async` method



