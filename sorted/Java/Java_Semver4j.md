# Semver4j

## Introduction

- light weight java library handling [semantic versioning](semantic-versioning.md)

## Installation

maven

```xml
<dependency>
    <groupId>com.vdurmont</groupId>
    <artifactId>semver4j</artifactId>
    <version>3.1.0</version>
</dependency>
```

## Semver Object

`Semver(String version, SemverType type)`

```java
Semver sem1 = new Semver("1.2.3-beta.4+sha899d8g79f87"); // Defaults to STRICT mode
Semver sem2 = new Semver("1.2.3-beta.4+sha899d8g79f87", SemverType.NPM); // Specify the mode
```

- if the version is not valid, a `SemverException` will be thrown
- Enum `SemverType`:
  - STRICT
  - LOOSE
  - NPM
  - COCOAPODS

## Check Version Stable

```java
// TRUE
new Semver("1.2.3").isStable();
new Semver("1.2.3+sHa.0nSFGKjkjsdf").isStable();

// FALSE
new Semver("0.1.2").isStable();
new Semver("0.1.2+sHa.0nSFGKjkjsdf").isStable();
new Semver("1.2.3-BETA.11+sHa.0nSFGKjkjsdf").isStable();
```

## Comparing The Version

## Versions Diffs

## Check Requirements

```java

```

