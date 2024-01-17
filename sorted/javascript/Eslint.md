# ESLint

* [Introduction](#introduction)
* [Glossary](#glossary)
* [Install ESLint](#install-eslint)
* [config file](#config-file)
* [Practical Usage](#practical-usage)
* [Eslint command](#eslint-command)
* [Disable Rules](#disable-rules)
* [ESlint Plugin](#eslint-plugin)
* [ESlint In Vscode](#eslint-in-vscode)
* [ESlint vue-cli](#eslint-vue-cli)

## Introduction

- find and fix problems in your JavaScript code
- use to help script problem in ECMAScript/JavaScript code
- Problems maybe
  - potential runtime errors
  - do not following best practices
  - styling issues

VS [Prettier]

- eslint is more configurable, prettier is more opinionated
- eslint can report issues, pertier is more about formatting
- eslint is specific to Javascript, prettier support more languages

## Glossary

`rules`

- core of ESLint

`plugins`

- provide you with a set of rules that you can **individually apply depending on your needs**

```json
{
  "plugins": [
    "react"
  ]
}
```

`extends`

- extends apply series **already config rules** as a base for the current configuration file

```json
{
    "extends": "eslint:recommended",
}
```

`parser`

`formatters`

- controls apprearance of the results

## Install ESLint

```bash
npm install --save-dev eslint
```

- cause eslint is a code check tool, so install it in dev environment by `--save-dev`

## config file

.eslintrc.{js, yml, json}

```bash
npm init @eslint/config
```

[Configuration File](eslint-configuration-file.md)

## Practical Usage

[Practical Usage](eslint-practical-usage.md)

## Eslint command

```bash
npx eslint [options] file1.js [file2.js] [dir]
```

- `--init`: run init config program
- `-c, --config`: `eslint -c ~/my-eslint.json`

fix problems in files or directories

```bash
npx eslint --fix file1.js [file2.js] [dir]
```

## Disable Rules

disable part of file

```js
/* eslint-disable */
alert('foo');
/* eslint-enable */
```

disable specific rules

```js
/* eslint-disable no-alert, no-console */
alert('foo');
/* eslint-enable no-alert, no-console */
```

disable entire file, put `/* eslint-disable */` at the top of the file

```js
/* eslint-disable */
alert('foo')
```

ensure a rule is never applied, regardless any future enable/disable

```js
/* eslint no-alert: "off" */
alert('foo')
```

disable rules on specific line

```js
alert('foo'); // eslint-disable-line

// eslint-disable-next-line
alert('foo');

/* eslint-disable-next-line */
alert('foo')
```

## ESlint Plugin

## ESlint In Vscode

## ESlint vue-cli

- use to check `.vue` file code in `<template>` and `<script>`
  - syntax error
  - Vue directive error
  - code style error
