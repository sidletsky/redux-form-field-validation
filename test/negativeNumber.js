/* eslint-env mocha */

var assert = require('assert')
var validation = require('../src/index')

describe.only('negativeNumber', function () {
  describe('Wrong type', function () {
    it('string instead of a number', function () {
      assert.strictEqual('InvalidNegativeNumber', validation.negativeNumber('1'))
      assert.strictEqual('InvalidNegativeNumber', validation.negativeNumber('0'))
    })

    it('object instead of a number', function () {
      assert.strictEqual('InvalidNegativeNumber', validation.negativeNumber({ key: 'value' }))
    })
  })

  describe('Numbers', function () {
    it('Positive number', function () {
      assert.strictEqual('InvalidNegativeNumber', validation.negativeNumber(1))
      assert.strictEqual('InvalidNegativeNumber', validation.negativeNumber(24512124))
      assert.strictEqual('InvalidNegativeNumber', validation.negativeNumber(324))
      assert.strictEqual('InvalidNegativeNumber', validation.negativeNumber(Infinity))
    })
    it('Negative number', function () {
      assert.strictEqual(undefined, validation.negativeNumber(-1))
      assert.strictEqual(undefined, validation.negativeNumber(-24512124))
      assert.strictEqual(undefined, validation.negativeNumber(-324))
      assert.strictEqual(undefined, validation.negativeNumber(-Infinity))
    })
    it('Zero', function () {
      assert.strictEqual('InvalidNegativeNumber', validation.negativeNumber(0))
    })
  })
})
