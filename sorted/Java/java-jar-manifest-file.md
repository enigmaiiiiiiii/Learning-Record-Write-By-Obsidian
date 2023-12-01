# JAR File - Manifest File 

## What It Is


- in addition to class files, images, and other resources, each JAR file contains a manifest file that describes its features.
- The file is named `MANIFEST.MF`.

## Sections of Manifest File

- The manifest is divided into multiple sections, with blank lines separating the sections.
  - The first section is called the main section, and it applies to the entire JAR file.
  - The `Name` entry can be a file, package, or URL.

```
Manifest-Version: 1.0

Name: Woozle.class

Name: com/mycompany/mypkg/
```

## edit manifest file

Syntax

```shell
jar cfm JARFileName ManifestFileName
```

- Create a `MyArchive.jar` with a `manifest.mf`:

```shell
jar cfm MyArchive.jar manifest.mf com/mycompany/mypkg/*.class
```

- update manifest file, put the content to file manifest-additions.mf

```shell
jar ufm MyArchive.jar manifest-additions.mf
```

manifest file must end with a [new line](ascii-code.md)

```
Manifest-Version: 1.0
Main-Class: com.mycompany.mypkg.MainAppClass
```

