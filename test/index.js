/* eslint-env mocha */

var assert = require('assert')
var validation = require('../src/index')

describe('Email', function () {
  describe.only('String without @', function () {
    it('Must return InvalidEmail for JustAString', function () {
      assert.strictEqual('InvalidEmail', validation.email('JustAString'))
    })
  })

  describe.only('No value (for empty field', function () {
    it('Must return undefined for null', function () {
      assert.strictEqual(undefined, validation.email(null))
      assert.strictEqual(undefined, validation.email(undefined))
    })
  })

  describe.only('Number instead of string', function () {
    it('Must return InvalidEmail for 1', function () {
      assert.strictEqual('InvalidEmail', validation.email(1))
    })
  })

  describe.only('String with spaces', function () {
    it('Must return InvalidEmail for spaces in name', function () {
      assert.strictEqual('InvalidEmail', validation.email('space s@gmail.com'))
      assert.strictEqual('InvalidEmail', validation.email('spaces @gmail.com'))
    })

    it('Must return InvalidEmail for spaces after @', function () {
      assert.strictEqual('InvalidEmail', validation.email('spaces@gmail. com'))
      assert.strictEqual('InvalidEmail', validation.email('spaces@gmail .com'))
      assert.strictEqual('InvalidEmail', validation.email('spaces@ gmail.com'))
    })
  })

  describe.only('Wrong email domain', function () {
    it('Must return InvalidEmail for space@gm', function () {
      assert.strictEqual('InvalidEmail', validation.email('space@gm'))
    })
    it('Must return InvalidEmail for space@gmail.', function () {
      assert.strictEqual('InvalidEmail', validation.email('space123@gmail.'))
    })
    it('Must return InvalidEmail for space@gmail.c', function () {
      assert.strictEqual('InvalidEmail', validation.email('space@gmail.c'))
    })
  })

  describe.only('Wrong email name', function () {
    it('Must return InvalidEmail for @gmail.com', function () {
      assert.strictEqual('InvalidEmail', validation.email('@gmail.com'))
    })
    it('Must return undefined for space.space@gmail.com', function () {
      assert.strictEqual(undefined, validation.email('space.space@gmail.com'))
    })
    it('Must return undefined for someemail123@gmail.com', function () {
      assert.strictEqual(undefined, validation.email('someemail123@gmail.com'))
    })
    it('Must return undefined for 123@gmail.com', function () {
      assert.strictEqual(undefined, validation.email('123@gmail.com'))
    })
  })
})
