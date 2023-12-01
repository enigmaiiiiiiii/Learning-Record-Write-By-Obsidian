# Java Command Line Tools - Synopsis Of Command java

## Syntax

run a `.class` file

```shell
java [options] mainclass [targets...]
```

run a [mainclass](java-mainclass.md) from a [JAR file](java-jar-file.md)

```shell
java [options] -jar jarfile [targets...]
```

run a [mainclass](java-mainclass.md) from a [module](java-module.md)

```shell
java [options] -m module[/mainclass][targets...]
```

- or

```shell
java [options] --module module[/mainclass][target...]
```

run a single [source file]()

```shell
java [options] source-file [target...]
```

## Options

[options](java-command-java-options.md)

## Possible Target 

[mainclass](java-mainclass.md)

- arguments after mainclass are passed as arguments to mainclass

[jarfile](java-jar-file.md)

[module](java-module.md)

[source-file]()

- `source-file`: only for starting a single source-file program. The specified source file is the source file containing the main class

