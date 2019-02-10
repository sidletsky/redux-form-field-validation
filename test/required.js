/* eslint-env mocha */

var assert = require('assert')
var validation = require('../src/index')

describe('Required', function () {
  describe.only('Must return undefined for any non-blank field', function () {
    it('JustAString', function () {
      assert.strictEqual(undefined, validation.required('JustAString'))
    })
    it('123', function () {
      assert.strictEqual(undefined, validation.required(123))
    })
    it('-123', function () {
      assert.strictEqual(undefined, validation.required(-123))
    })
    it('0', function () {
      assert.strictEqual(undefined, validation.required(0))
    })
    it('null', function () {
      assert.strictEqual(undefined, validation.required(null))
    })
    it('true', function () {
      assert.strictEqual(undefined, validation.required(true))
    })
    it('false', function () {
      assert.strictEqual(undefined, validation.required(false))
    })
    it("{ key: 'value' } [object]", function () {
      assert.strictEqual(undefined, validation.required({ key: 'value' }))
    })
    it('{} [object]', function () {
      assert.strictEqual(undefined, validation.required({}))
    })
  })

  describe.only('Must return Required for any blank field', function () {
    it('undefined', function () {
      assert.strictEqual('Required', validation.required(undefined))
    })
    it('[blank string]', function () {
      assert.strictEqual('Required', validation.required(' '))
    })
  })
})
