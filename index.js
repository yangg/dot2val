'use strict';

var dot2val = {
  /**
   *  sets a value within a deeply nested object using "dot" notation
   */
  set: function(obj, key, val) {
    let k = key;
    if(k.indexOf('.') > -1) {
      let segments = key.split('.');
      k = segments.pop();

      segments.forEach(function(k) {
        if(! obj.hasOwnProperty(k)) {
          obj[k] = {};
        }
        obj = obj[k];
      });
    }
    if(typeof val !== 'undefined') {
      obj[k] = val;
    } else {
      delete obj[k];
    }
  },
  /**
   * retrieves a value from a deeply nested object using "dot" notation
   */
  get: function(obj, key, def) {
    let k = key;
    if(obj && k.indexOf('.') > -1) {
      let segments = key.split('.');
      k = segments.pop();

      segments.forEach(function(k) {
        if(! obj.hasOwnProperty(k)) {
          obj = false;
          return false;
        }
        obj = obj[k];
      });
    }
    return obj ? (typeof obj[k] !== 'undefined' ? obj[k] : def) : def;
  }
};

if(typeof module !== 'undefined') {
  module.exports = dot2val;
} else {
  window.dotsval = dot2val;
}

