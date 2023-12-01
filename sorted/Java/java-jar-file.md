# Java - Jar File

## What's For

- Pack a large number of files into a single file.

## Features

- JAR files are compressed and use the ZIP compression format.
- In most cases, a JAR file is not just a simple archive of Java class files and/or resources.
- The [META-INF directory](#meta-inf-directory) (if exist) is used to store 
  - package 
  - extension configuration data
  - including security
  - version control
  - extensions and services
  - ...

## META-INF Directory

[META-INF Directory](java-jar-file-meta-inf-directory.md)

## Create JAR File

Basic Syntax

```shell
jar cvf JARFileName File1 File2
```

- `-c`:  jar command mode， create new archive
- `-v`:  print verbose output on standard output
- `-f`:  specify the JAR file name as `JARFileName.jar`

Create Jar File with Specified Manifest File

```sh
jar cfm MyArchive.jar manifest.mf com/mycompany/mypkg/*.class
```

## Run JAR File

1. Run jar file with default main class specified in [manifest file](java-jar-manifest-file.md)

- execute `.jar` file directly

```sh
java -jar MyProgram.jar
```

2. Use option `e` to specify the application's entry point

```sh
jar cvfe MyProgram.jar com.mycompany.mypkg.MainAppClass files_to_add
```

## Sealed JAR File

- ensure that no other classes can be added to it
- Add `Sealed: true` to the [main section](java-jar-manifest-file.md#sections-of-manifest-file) of the manifest file, representing the JAR file is globally sealed
- And `Sealed: true/false` to the individual sections to override the global setting

```
Name: com/mycompany/util/
Sealed: true

Name: com/mycompany/misc/
Sealed: false
```

- package `manifest.mf` include `Sealed` line to `MyArchive.jar`

```shell
jar cvfm MyArchive.jar manifest.mf files_to_add
```

