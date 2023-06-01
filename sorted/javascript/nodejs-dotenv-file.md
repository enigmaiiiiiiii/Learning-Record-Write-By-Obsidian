# .env file

* [what's for](#whats-for)
* [where to write `.env` file](#where-to-write-env-file)
* [.env file looks like](#env-file-looks-like)
* [access to environment variables](#access-to-environment-variables)

## what's for

- to store environment variables for an application
- server side object

## where to write `.env` file

- in the **root directory** of the application

## .env file looks like

- use `key=value` format

`.env`

```conf
PORT=3000
DB_URL=mongodb://localhost/mydatabase
API_KEY=abc123
DEBUG=true
```

## access to environment variables

```sh
npm install dotenv
```

```js
const dotenv = require('dotenv');
dotenv.config();

const port = process.env.PORT;
const db_url = process.env.DB_URL;
const api_key = process.env.API_KEY;
```