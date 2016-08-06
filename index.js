'use strict';
/*!
 * dot2val
 * Set or get a value within a deeply nested object using `dot' notation
 * @author Brook Yang https://github.com/yangg/dot2val
 */

var dot2val = {
  /**
   *  sets a value within a deeply nested object using "dot" notation
   */
  set: function(obj, parts, val) {
    if(!Array.isArray(parts)) {
      parts = parts.split('.');
    }
    let k = parts[0];
    if(parts.length > 1) {
      k = parts.pop();

      parts.forEach(function(k) {
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
  get: function(obj, parts, def) {
    if(!Array.isArray(parts)) {
      parts = parts.split('.');
    }
    let k = parts[0];
    if(parts.length > -1) {
      k = parts.pop();

      parts.forEach(function(k) {
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
}

