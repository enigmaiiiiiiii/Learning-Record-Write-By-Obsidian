# Material UI - utility

## styled

use to create styled comonent

`styled(Component, [options])(styles) => Component`

parameter

- `component`: a react component
- `options`: an Object, properties:
  - `shouldForwardProp`: type `(prop: string) => boolean`
    - indicates whether the `prop` should be forwarded to the `Component`
    - if call function with `prop` return `true`, the `prop` will be forwarded to the `Component`
  - `label`: string, suffix of the style sheet, useful for debugging
  - `name`
  - `slot`
  - `overridesResolver`
  - `skipVariantsResolver`
  - `skipSx`

