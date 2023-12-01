# Java command options

## Standard Options

> Options that are supported by all implementations of the JVM

`-cp classpath`, `--class-path classpath` or  `-classpath classpath`

- specify the search file for class files

`-Dproperty=value`

- set a [system property] value

`-jar`

- execute a program encapsulated in a [JAR file](java-jar-file.md)
- when `-jar` is specified, all user classes are loaded from the specified JAR file, and other class pathes settings are ignored

`-m or --module module[/mainclass]`

- specify the module to be executed
- default [main class]() is executed of this module if `mainclass` is not specified

`-DpropertyName-propertyValue or --define propertyName=propertyValue`

- used to set system properties for **java application**
- access to system properties in application code can be done by `String value = System.getProperty("propertyName")`

> difference with environment variable which can be accessed by `System.getenv("envName")` method

## Options Arguments Format

- can be separated by space, `=` or `:`
- for arguments describing memory sizes
  - `42`: represents 42 bytes, byte is default unit
  - `42k` or `42K`: represents 42 KB
  - `42m` or `42M`: represents 42 MB
- for percentage arguments, use decimal number between 0 and 1

