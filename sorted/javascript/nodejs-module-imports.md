# Import Module

## Import Module From `node_modules` Folder

- Argument passed to `require("module_name")` is not begin with `./`, `../`, `/`, then NodeJs will start to load from `./node_modules`
  - specify a particular file by `module_name/path/to/file`
- Searching order when file `/home/ry/projects/foo.js` call `require("bar.js")`
  - `/home/ry/projects/node_modules/bar.js`
  - `/home/ry/node_modules/bar.js`
  - `/home/node_modules/bar.js`
  - `/node_modules/bar.js`

## Import Module From Global Variable Path

- when NodeJS can't find the module in any of the other locations, it will search from path in `NODE_PATH` environment variable

