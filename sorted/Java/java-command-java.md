# Java Command Line Tools - Command java

## What It Is

- use to launch a Java application
- this command will starting a Java virtual machine (JVM), loading specified class and invoking its main() method

**entry point** of a Java application looks like

```java
public static void main(String[] args) {
    // ...
}
```

- by default, the first non-[option argument](java-command-java-options.md) is the fully qualified name of the class to be called

## Syntax

[Syntax](java-command-java-synopsis.md)

## Arguments File

[Argument File](java-command-java-argument-file.md)

## More Options

[advance options]()

## Practical Usage

[Practical Example](java-command-java-practical-example.md)

## Environment Variable: JDK_JAVA_OPTIONS 

- value of `JDK_JAVA_OPTIONS` is arguments list separated by space characters
- arguments in `JDK_JAVA_OPTIONS` are expanded **before** arguments in command line

```shell
export jdk_java_options='-g @file1 -Dprop=value @file2 -Dws.prop="white sapces"'
java -Xint @file3
```

equivalent to

```shell
java -g @file1 -Dprop=value @file2 -Dws.prop="white spaces" -Xint @file3
```
