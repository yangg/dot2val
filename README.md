# dot2val

[![Build Status](https://travis-ci.org/yangg/dot2val.svg?branch=master)](https://travis-ci.org/yangg/dot2val) [![Test Coverage](https://codeclimate.com/github/yangg/dot2val/badges/coverage.svg)](https://codeclimate.com/github/yangg/dot2val/coverage) [![Code Climate](https://codeclimate.com/github/yangg/dot2val/badges/gpa.svg)](https://codeclimate.com/github/yangg/dot2val) [![npm:](https://img.shields.io/npm/v/dot2val.svg?style=flat)](https://www.npmjs.com/packages/dot2val)

Set or get a value within a deeply nested object using `dot' notation

## Installation
```bash
npm install --save dot2val
```

## Usage
```js
var dot2val = require('dot2val');
```

Given:

```js
var obj = {
    prop1: {
        arr: ['a', 'b', 'c']
      , str: 'Hello'
    }
  , prop2: {
        arr: [ { nested: 'Universe' } ]
      , str: 'Hello again!'
    }
}

var arr = [ { foo: 'bar' } ];
```

Expect:

#### get

```js
dot2val.get(obj, 'prop1.str'); // => "Hello"
dot2val.get(obj, 'prop1.arr.2'); // => "c"
dot2val.get(obj, 'prop2.arr.0.nested'); // => "Universe"

dot2val.get(arr, '0.foo'); // => "bar"

dot2val.get(undefined, 'doesnt.matter'); // => undefined
dot2val.get({}, 'doesnt.exist'); // => undefined
dot2val.get({}, 'doesnt.exist', 'default value'); // => "default value"
```

#### set

```js
dot2val.set(obj, 'hello.universe', 'properties');
dot2val.set(obj, 'hello1', 'universe');
dot2val.set(obj, 'prop2');        // delete obj['prop2']
```

[Try dot2val in your browser](https://tonicdev.com/yangg/dot2val)

## License
MIT
