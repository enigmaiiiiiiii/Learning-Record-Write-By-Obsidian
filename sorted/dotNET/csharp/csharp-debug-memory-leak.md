# CSharp - Debug A Memory Leak

## Source Code

[Code](https://github.com/dotnet/samples/tree/main/core/diagnostics/DiagnosticScenarios)

## Install Tools

```sh
dotnet tool install --global dotnet-counters
```

## Examining Memory Usage

```sh
dotnet counters ps
dotnet counters monitor --refresh-interval 1 -p <pid>
```

- `pid` is the process id of target application

Focus on

```
GC Heap Size (MB)                                                      9.151
```

go to URL `https://localhost:5001/api/diagscenario/memleak/20000`

Now memory usage grown to about 30MB

```
GC Heap Size (MB)                                                     39.229
```

- ...

```sh
dotnet dump collect -p 4807
```

- ...

```sh
dotnet dump analyze core_20190430_185145
```

- dump

```sh
> dumpheap -stat
> dumpheap -mt 00007f6c1dc00f90
> gcroot 00007f6c1dc00f90
```





