# JavaScript Design Pattern - Dependency Injection

## What Is Definition of Dependency Injection

- Is a design pattern that mostly used in [**inversion of control**]() framework 

## Feature

There are 3 commonly used ways to implement dependency injection

- Constructor injection
- Property injection(Setter injection)
- Method injection

Advantages

- Decouple
- Testability
- Extensibility

2 major ways to implement dependency injecttion

1. Constructor injection
2. Setter injection

which ways to use depends on the situation

1. when the dependency is required, use constructor injection
2. when the dependency is optional, use setter injection

## What Problem to Solve

[Illustrate With Code](design-pattern-dependency-injection-code.md)

## Structure of Dependency Injection

- [Service Interface(Abstract Service)](#service-interface)
- [Concrete Service](#concrete-service)
- [Consumer](#consumer)
- [Injector](#Injector)

## Service Interface

- declare a method that 
  - implemented by [concrete service](#concrete-service) for actual task
  - Used by [consumer](#consumer)

## Concrete Service

- Implement Method Performing the actual task

## Consumer

- consist of Consumer class
  - declare a variable of type [service interface](#service-interface)
  - constructor or method for [injector](#injector) to inject the service
  - method to call 
- does not know which concrete service it will use

## Injector

> may be a class or a method

- create concrete service instance
- resolve and configure dependencies
- inject concrete service instance into [consumer](#consumer)

## Code

- ...

