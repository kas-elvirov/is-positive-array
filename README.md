![npm bundle size](https://img.shields.io/bundlephobia/min/is-positive-array) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/kas-elvirov/is-positive-array) <!-- ![npm-donwloads-per-week](https://img.shields.io/npm/dw/is-positive-array) --> ![npm-donwloads-per-year](https://img.shields.io/npm/dy/is-positive-array)

---

# is-positive-array

Checks whether a value is an array with more than zero items

## Install

```
$ npm install --save is-positive-array
```
or
```
$ yarn add is-positive-array
```

## API

### isPositiveArray(incomingValue: unknown): boolean

#### incomingValue

Type: `unknown`

## Usage

#### import

```js
    import isPositiveArray from 'is-positive-array';
    // or
    var isPositiveArray = require('is-positive-array');
```

#### positive array

```js
    import isPositiveArray from 'is-positive-array';

    const result = isPositiveArray([1, 2, 3]);

    console.log(result);
    // true
```

#### empty array

```js
    import isPositiveArray from 'is-positive-array';

    const result = isPositiveArray([]);

    console.log(result);
    // false
```

#### incorrect value

```js
    import isPositiveArray from 'is-positive-array';

    const result = isPositiveArray(undefined);

    console.log(result);
    // false
```

## License

MIT © [Kas Elvirov](http://www.kas-elvirov.com/)
