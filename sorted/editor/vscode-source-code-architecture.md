# VSCode - Source Code Architecture

## Dependency Injection System

In This Class, As I think

- Non-disposable service was instantiated by [Decoration](typescript-decorators.md) Injection, Like `@ILogService logService: ILogService`
- [Disposable]() Service was instantiated by constructor injection, like `this._register(instantiationService.createInstance(ExtensionsDownloader))`

```ts
export class ExtensionManagementService {

	private readonly extensionsDownloader: ExtensionsDownloader;

	constructor(
		@ILogService logService: ILogService,
		@IFileService private readonly fileService: IFileService,
        // ...
	) {
		this.extensionsDownloader = this._register(instantiationService.createInstance(ExtensionsDownloader));
	}
}
```

## Event Driven System

## Disposable

## Layer

the core is partitioned into following layers

- base: general utilities
- platform 
  - service injection support
  - base service shared across layers
- editor: Monaco
- workbench
  - host "monaco" editor code 
  - entry point to the app
  - stitches everything
- server

## Environment

- common
- browser
- node
- electron-sandbox
- electron-main

## Editor Source Organisation

## Workbench Source Organisation

`vs/workbench/{common|browser|electron-sandbox}`

- core

`vs/workbench/api`

- api provider

`vs/workbench/services`

- services

`vs/workbench/contrib`

- contribution
- should not be dependencies from outside into here

## IPC

- inter process communication

## nls

- string localization


