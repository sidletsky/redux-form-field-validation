/* eslint-env mocha */

var assert = require('assert')
var validation = require('../src/index')

describe.only('intlPhoneNumber', function () {
  describe('Wrong type', function () {
    it('number instead of a string', function () {
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber(1))
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber(0))
    })

    it('object instead of a string', function () {
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber({ key: 'value' }))
    })
  })

  describe('Wrong phone numbers formats', function () {
    it('phone numbers without + at the beginning', function () {
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber('1'))
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber(0))
    })
    it('phone numbers with - as a separator', function () {
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber('+1-202-555-0188'))
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber('+1-202-555-0115'))
    })
    it('phone numbers with a space as a separator', function () {
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber('+1 202 555 0188'))
      assert.strictEqual('InvalidIntlPhoneNumber', validation.intlPhoneNumber('+1 202 555 0115'))
    })
  })

  describe('Right phone numbers format', function () {
    it('phone numbers without separators and with + at the beginning', function () {
      assert.strictEqual(undefined, validation.intlPhoneNumber('+12025550188'))
      assert.strictEqual(undefined, validation.intlPhoneNumber('+12025550115'))
    })
  })
})
