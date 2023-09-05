# NextJS - Envrionment Variable

* [What Is This](#what-is-this)
* [NODE\_ENV In Next.js](#node_env-in-nextjs)
* [Loading Environment Variables](#loading-environment-variables)
* [dotenv files](#dotenv-files)
* [Exposing Environment Variables to the Browser](#exposing-environment-variables-to-the-browser)
* [Environment Variable Load Order](#environment-variable-load-order)

## What Is This

- Next.js comes with built-in support for environment variables

## NODE_ENV In Next.js

- allowed values for `NODE_ENV`: `development`, `test`, and `production`
- `next dev` set `NODE_ENV` to `development`
- `next build` set `NODE_ENV` to `production`
- `next start` set `NODE_ENV` to `production`
- `next test` set `NODE_ENV` to `test`

## Loading Environment Variables

for `.env.local` content like this

```sh
DB_HOST=localhost
DB_PORT=5432
DB_USER=myuser
DB_PASS=mypassword

HOST=http://$DB_HOST:$DB_PORT
```

- `process.env.DB_HOST`, `process.env.DB_PORT`, etc. will be loaded into [nodejs environment variables]()
- use `$` to reference other environment variables in `.env*` files

> `process.env.HOST` will be `http://localhost:5432`

can't use `process.env.HOST` in component

```js
function Demo() {
  return (
    <>
      <div>{process.env.HOST}</div> {/* hydration error happens */}
    </>
  )
}
```

## dotenv files

`.env.local`:

- required
- set local machine environment variables
- should be added to `.gitignore`

`.env.development`

- for `next dev`

`.env.production`: loaded in all environments

- for `next start`

`.env.test`

- for `next test`, jest or cypress
- in testing environment, `.env.development`, `.env.production` and `.env.local` will not load

## Exposing Environment Variables to the Browser

- with prefix `NEXT_PUBLIC_`

```sh
NEXT_PUBLIC_ANALYTICS_ID=abcdefghij
```

i can access to `NEXT_PUBLIC_ANALYTICS_ID` in component

```js
function Demo() {
  return (
    <>
      <div>{process.env.NEXT_PUBLIC_ANALYTICS_ID}</div>
    </>
  )
}
```

## Environment Variable Load Order

1. `process.env`
2. `.env.$(NODE_ENV).local`
3. `.env.local`
4. `.env.$(NODE_ENV)`
5. `.env`

