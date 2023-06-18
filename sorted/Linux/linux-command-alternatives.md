# alternatives

* [what for](#what-for)
* [conclusion](#conclusion)
* [Usage](#usage)

## what for

assume that there are two versions of java, java8(java-1.8.0-openjdk) and java17(java-17-openjdk), through alternatives can set the default java version

when execute java command, actually execute `/usr/bin/java`, which is a link, point to a version of alternatives

check java command point to which file

```bash
which java
```

check `/usr/bin/java` file type

```bash
file /usr/bin/java
```

the output is like:

```
/usr/bin/java:  symbolic link to /etc/alternatives/java
```

- it represent /usr/bin/java is a link, point to /etc/alternatives/java

```bash
file /etc/alternatives/java
```

the output is like:

```
/etc/alternatives/java: symbolic link to **/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.352.b08-2.el9_1.x86_64/jre/bin/java**
```

- it represent /etc/alternatives/java is still a link, point to /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.352.b08-2.el9_1.x86_64/jre/bin/java

```bash
file /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.352.b08-2.el9_1.x86_64/jre/bin/java
```

output is like

```
/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.352.b08-2.el9_1.x86_64/jre/bin/java: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, ...
```

- which represent `/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.352.b08-2.el9_1.x86_64/jre/bin/java` is a executable file
- so java command actually execute `/usr/lib/jvm/java-1.8.0-openjdk-1.8.0.352.b08-2.el9_1.x86_64/jre/bin/java`

when `/usr/lib/jvm` have multiple versions of java, can set default java version through alternatives

```bash
alternatives --config java
```

## conclusion

- `java` command $\rightarrow$ `/usr/bin/java` $\rightarrow$ `/etc/alternatives/java $\rightarrow$ /usr/lib/jvm/java-1.8.0-openjdk-1.8.0.352.b08-2.el9_1.x86_64/jre/bin/java`
- `alternatives/java` is in the middle of `java command` and `java execute file`
- `alternatives` command can set default java version

## Usage

```bash
man alternatives
```