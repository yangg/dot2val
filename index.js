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
    var k = parts[0];
    if(parts.length > 1) {
      var partsLength = parts.length
      k = parts[partsLength - 1];

      for(var i = 0; i < partsLength - 1; i++) {
        var part  = parts[i]
        if(! obj.hasOwnProperty(part)) {
          obj[part] = {};
        }
        obj = obj[part];
      }
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
    var k = parts[0];
    if(parts.length > -1) {
      var partsLength = parts.length
      k = parts[partsLength - 1];

      for(var i = 0; i < partsLength - 1; i++) {
        var part  = parts[i]
        if(! obj.hasOwnProperty(part)) {
          obj = false;
          break
        }
        obj = obj[part];
      }
    }
    return obj ? (typeof obj[k] !== 'undefined' ? obj[k] : def) : def;
  }
};

if(typeof module !== 'undefined') {
  module.exports = dot2val;
}

