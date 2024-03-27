# Unity - Build

## What Is Build

- Unity will build by [scenes](unity-scene.md)

## Unity produces two build types

A release build, 

- includes only what’s necessary to run the application. This is the default build type.

A development build, which 

- includes scripting debug symbols and the Profiler
- Selecting the development build option enables an [additional set of options](#generic-platform-settings)
  - For deep profiling support and script debugging

## Incremental Build

- For faster iteration during development

## Clean Build

- [incremental build](#incremental-build) may not work as expected or generate problems

how to:

1. Open **Build Settings** window
2. Click **drop-down** next to Build button
3. Select **Clean Build**

## Generic Platform Settings

