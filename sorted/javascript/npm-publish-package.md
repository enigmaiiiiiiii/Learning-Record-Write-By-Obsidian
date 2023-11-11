# NPM - Publish Package

## General Steps

login

```sh
npm login
```

package.json

```json
{
    "name": "package-name",
}
```

publish

```sh
npm publish --access public
```

## Pubish A Scope Package

publishing to your user scope

```json
{
    "name": "@username/mypackage",
    "version": "1.0.0"
}
```

publishing to organizatoin scope

```json
{
    "name": "@org/mypackage",
    "version": "1.0.0"
}
```
