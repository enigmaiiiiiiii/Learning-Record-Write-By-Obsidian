# dotNet - Glossary

## .NET SDK

## .NET Core

## .NET Desktop

## ASP.NET Core Runtime

## .NET Runtime

## .NET Framework

- [CLR](#CLR): Common Language Runtime
- [BCL](#BCL): Base Class Library

## BCL

## CLR

- CLR: Common Language Runtime
- 托管代码: .NET框架编写的代码称为托管代码
- 非托管代码: 不在CLR控制之下运行的代码，比如Win32 C/C++,称为非托管代码
- Services provide by CLR
  - garbage collection
  - safety and security
  - 代码执行，线程管理及异常处理
  - 通过BCL得到广泛的编程功能, 包括Web服务和数据服务等

## Program Assembly

Features

- Mostly single file, But can be multi-file
- Compiled into CIL, the source code generates an output file called an assembly
- Program Assembly is [executable file](executable-file.md) or DLL
- code in program assembly is not [native code], but a kind of intermediate language called [CIL](#CIL)

Information Contained In the **Program Assembly**

- Manifest
  - Assembly name information, including simple name, version number, public key, etc.
  - List of files composing the assembly
  - List of other assemblies referenced by this assembly
  - A map indicating which types are included in which assembly
- Metadata of the types used in the program
- CIL (Common Intermediate Language) Code
- Metadata referencing other assemblies

## JIT

- Code in the program assembly only compiled by JIT when needed, and the code is only compiled once when called

## CLI

- [CLI](dotnet-cli.md): Common Language Infrastructure

## CIL

- CIL: Common Intermediate Language

## CTS

> Abbreviation for Common Type System.

- Ensures interoperability between different languages that target the .NET platform by providing a common set of rules and guidelines for data types and oprations

Features

- Type Safety
- Metadata
- Unified Type Hierarchy
- Interoperability

## CLS

> Abbreviation for Common Language Specification

- subset of CTS

Features

- Data Types
- Naming Conventions
- Member Accessibility
- Exception Handling
