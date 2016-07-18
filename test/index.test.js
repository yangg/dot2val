'use strict';

const assert = require('chai').assert;
const dot2val = require('../');
describe('dot2val', function() {
  describe('set', function() {
    var obj = { a : { }, exist: 1 };

    it('should set value using dot notation', function() {
      dot2val.set(obj, 'parent.not.exist', 1);
      assert.equal(1, obj.parent.not.exist);

      dot2val.set(obj, 'a.b', 1);
      assert.equal(1, obj.a.b);
    });

    it('should set value without dot', function() {
      dot2val.set(obj, 'simple', 2);
      assert.equal(2, obj.simple);
    });

    it('should delete key if value is undefined', function() {
      dot2val.set(obj, 'exist');
      assert.isUndefined(obj.exist);
    });
  });

  describe('get', function() {
    var obj = { very: { deep: { key: 1 }}, simple: 2 };

    it('should get value using dot notation', function() {
      assert.equal(dot2val.get(obj, 'very.deep.key'), 1);
    });

    it('should get value without dot', function() {
      assert.equal(dot2val.get(obj, 'simple'), 2);
    });

    it('should accept a default value', function() {
      assert.isUndefined(dot2val.get(obj, 'not exist'));
      assert.equal(dot2val.get(obj, 'not exist', ''), '');
    });
  });
});
