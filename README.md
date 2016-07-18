# dot2val

[![Build Status](https://travis-ci.org/yangg/dot2val.svg?branch=master)](https://travis-ci.org/yangg/dot2val) [![Code Climate](https://codeclimate.com/github/yangg/dot2val/badges/gpa.svg)](https://codeclimate.com/github/yangg/dot2val)

Set or get a value within a deeply nested object using `dot' notation

## Installation
```bash
npm install dot2val
```

## Usage
```
var props = require('dot2val');
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

<!-- js
  var props = require('./');
-->

#### get

```js
props.get(obj, 'prop1.str'); // => "Hello"
props.get(obj, 'prop1.arr.2'); // => "c"
props.get(obj, 'prop2.arr.0.nested'); // => "Universe"

props.get(arr, '0.foo'); // => "bar"

props.get(undefined, 'doesnt.matter'); // => undefined
props.get({}, 'doesnt.exist'); // => undefined
props.get({}, 'doesnt.exist', 'default value'); // => "default value"
```

#### set

```js
props.set(obj, 'hello.universe', 'properties');
props.set(obj, 'hello', 'universe');
```

## License
MIT
