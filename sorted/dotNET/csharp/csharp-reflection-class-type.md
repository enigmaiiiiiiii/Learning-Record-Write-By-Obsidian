# CSharp - Reflection Class Type

## What's For

Using members in "Type" class, you can get:

- A Type's declaration
- Type's members (constructors, properties, events, etc.)
- Deploying the module and assembly information of the class
  

ReflectionPermission

- Code Do not need any permission to use reflection to get information about types and their members. To allow code to use reflection to access normally inaccessible (private or internal) members, the code must have ReflectionPermission. 

## Method

GetProperties

- Returns all the **public** properties of the current type.

