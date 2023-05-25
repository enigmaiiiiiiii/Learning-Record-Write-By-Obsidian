#  package-lock.json

## What's This

- lock the version of dependencies, make sure the dependencies installed are consistent every time
- automatically generated for any operations where npm modifies either the node_modules tree, or package.json

## Format

- `name`: like `"name": "projectname" `
- `version`: like `"version": "0.0.1"`
- `lockfileVersion`: an integer version number, starting at 1, like `"lockfileVersion": 2`
  - no version provide: it is from "legacy" [npm-shrinkwrap.json]() packaging file from npm version before npm v5.
  - 1: npm v5 and v6 use this lockfile version.
  - 2: npm v7 use this lockfile version, backward compatible with v1 lockfiles.
  - 3: npm v7 use this lock file version, no backward compatible feature. 
- `package`: equivalent [package.json](nodejs-package-json.md) in package-lock.json
  - root directory usually use `""` as key

```json
"package": {
  "": {
    "name": "examplename",
    "version": "0.0.1",
  }
}
```

## typically package-lock.json

```json
{
  "name": "maze",
  "version": "0.0.1",
  "lockfileVersion": 2,
  "requires": true,
  "packages": {
    "": {
      "name": "maze",
      "version": "0.0.1",
      "license": "ISC",
      "dependencies": {
        "underscore": "1.7.0"
      },
      "devDependencies": {
        "browserify": "4.1.9",
        "handlebars": "2.0.0",
        "hbsfy": "2.1.0"
      }
    },
    "node_modules/acorn": {
      "version": "4.0.13",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-4.0.13.tgz",
      "integrity": "sha1-EFSVrlNh1pe9GVyCUZLhrX8lN4c=",
      "dev": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
  }
}

```