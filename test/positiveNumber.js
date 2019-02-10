/* eslint-env mocha */

var assert = require('assert')
var validation = require('../src/index')

describe.only('positiveNumber', function () {
  describe('Wrong type', function () {
    it('string instead of a number', function () {
      assert.strictEqual('InvalidPositiveNumber', validation.positiveNumber('1'))
      assert.strictEqual('InvalidPositiveNumber', validation.positiveNumber('0'))
    })

    it('object instead of a number', function () {
      assert.strictEqual('InvalidPositiveNumber', validation.positiveNumber({ key: 'value' }))
    })
  })

  describe('Numbers', function () {
    it('Positive number', function () {
      assert.strictEqual(undefined, validation.positiveNumber(1))
      assert.strictEqual(undefined, validation.positiveNumber(24512124))
      assert.strictEqual(undefined, validation.positiveNumber(324))
      assert.strictEqual(undefined, validation.positiveNumber(Infinity))
    })
    it('Negative number', function () {
      assert.strictEqual('InvalidPositiveNumber', validation.positiveNumber(-1))
      assert.strictEqual('InvalidPositiveNumber', validation.positiveNumber(-24512124))
      assert.strictEqual('InvalidPositiveNumber', validation.positiveNumber(-324))
      assert.strictEqual('InvalidPositiveNumber', validation.positiveNumber(-Infinity))
    })
    it('Zero', function () {
      assert.strictEqual('InvalidPositiveNumber', validation.positiveNumber(0))
    })
  })
})
