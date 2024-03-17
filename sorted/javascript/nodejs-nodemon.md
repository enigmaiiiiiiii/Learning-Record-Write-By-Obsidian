# nodemon

## What's for

- **restart** node application(sometimes app.js)

## Getting Start

Global Install, Global Use

```
npm install -g nodemon
nodemon app.js
```

Local Install, Local Use

```bash
npm install --save-dev nodemon
```

package.json

```json
{
  "scripts": {
    "start": "nodemon app.js"
  }
}
```

```bash
npm run start
```

or direct run with npx

```
npx nodemon app.js
```
