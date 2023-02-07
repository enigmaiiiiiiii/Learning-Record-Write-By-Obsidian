# JavaScript Intl

## Introduction

a name space for the ECMAScript Internationalization API, which provides:

- language sensitive string comparison
- number formatting
- date and time formatting

## Constructor Properties

constructior properties means you can create a new object with the constructor

```js
const date = new Intl.DateTimeFormat('en-US').format(new Date());
```

- IntlDateTimeFormat is a constructor property

Intl.DateTimeFormat()

```js
new Intl.DateTimeFormat([locales[, options]])
```

```js
const date = Date.UTC(2017, 11, 20, 3, 0, 0);
console.log(new Intl.DateTimeFormat('en-US').format(date));
// 12/19/2017
console.log(new Intl.DateTimeFormat().format(date));
// 2017/12/19
```

## locales argument

- javascript examine the `locales` arguments, compute a locale closest express

locale argument can be:

1. undefined: The implementation's default locale will be used
2. A locale: A locale identifier
3. Intl.Locale object
4. a list of locales

locale identifier is a **string**

1. a language subtag
2. (optional) a script subtag
3. (optionnally) a regin (or country) subtag
4. (optionally) a variant subtag
5. (optionally) a private use subtag
6. (optionally) a grandfathered tag
