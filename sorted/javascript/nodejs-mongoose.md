# Mongoose

## Introduction

- Object Data Modeling library for MongoDB and Node.js

## Connect to MongoDB

basic connect without set client info

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:port/database_name');
  .then(() => {
    console.log('connected to mongodb');
  })
  .then((err) => {
    console.log('failed to connect to mongodb', err);
  });
```

connect with client info

```js
mongoose.connect('mongodb://host:port/database_name', {
  appname: 'myapp',
  driverInfo: {name: 'mongoose', version: '1.0.0'}
})
```

## query data

```js
const movieSchema = new mongoose.Schema({
  title: String,
  year: Number
})

const model = mongoose.model('movies', schema);

model.find({ year: 1997 }, (err, docs) => {
  if(err) {
    console.error(err);
  } else {
    console.log(docs);
  }
})
```
