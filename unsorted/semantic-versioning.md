# Semantic Versioning

## Introduction

- SemVer: Semantic Versioning Specification
- 一种版本表示规范

## Version Format

Version number format: `MAJOR.MINOR.PATCH`

1. `MAJOR`: incompatible API changes
2. `MINOR`: add functionality in a backwards-compatible manner
3. `PATCH`: backwards-compatible bug fixes

## Semantic Versioning Rules

1. MUST declare a **public API for Semantic Versioning**
2. take the form `X.Y.Z`, where `X`, `Y`, `Z` are non-negative integers; MUST NOT **contain leanding zeroes**
3. once a versioned package has been released, the contents of that version **MUST NOT be modified**
4. in `0.y.z` version, the public API **SHOULD NOT** be considered stable
5. 1.0.0 defines the public API
6. 如果引入了向后兼容的bug修复, patch version `Z` (x.y.Z | x > 0) **MUST** be incremented
7. 如果引入了新的向后兼容的API, minor version `Y` (x.Y.z | x > 0) **MUST** be incremented, patch version `Z` **MUST** be reset to 0
8. 如果引入了不向后兼容的API, major version `X` (X.y.z | X > 0) **MUST** be incremented, minor version `Y` and patch version `Z` **MUST** be reset to 0
9. pre-release version **MAY** be denoted by appending a hyphen and a series of dot separated identifiers immediately following the patch version

> 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92

10. metadata appending following the patch version

> 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85

11. precedence

> 1. 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1
> 2. 1.0.0-alpha < 1.0.0



