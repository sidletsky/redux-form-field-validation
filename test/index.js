/* eslint-env mocha */

var assert = require('assert')
var validation = require('../src/index')

describe('Email', function () {
  describe.only('String with spaces', function () {
    it('Must return InvalidEmail for spaces in name', function () {
      assert.strictEqual('InvalidEmail', validation.email('space s@gmail.com'))
      assert.strictEqual('InvalidEmail', validation.email('spaces @gmail.com'))
      assert.strictEqual('InvalidEmail', validation.email('spac es@gmail.com'))
    })

    it('Must return InvalidEmail for spaces after @', function () {
      assert.strictEqual('InvalidEmail', validation.email('spaces@gmail. com'))
      assert.strictEqual('InvalidEmail', validation.email('spaces@gmail .com'))
      assert.strictEqual('InvalidEmail', validation.email('spaces@ gmail.com'))
    })

    it('Must return InvalidEmail for addresses with special characters', function () {
      assert.strictEqual('InvalidEmail', validation.email('spaces@gmail. com'))
      assert.strictEqual('InvalidEmail', validation.email('spaces@gmail .com'))
      assert.strictEqual('InvalidEmail', validation.email('spaces@ gmail.com'))
    })
  })

  describe.only('Must return undefined for the right email name', function () {
    it('space.space@gmail.com', function () {
      assert.strictEqual(undefined, validation.email('space.space@gmail.com'))
    })
    it('someemail123@gmail.com', function () {
      assert.strictEqual(undefined, validation.email('someemail123@gmail.com'))
    })
    it('123@gmail.com', function () {
      assert.strictEqual(undefined, validation.email('123@gmail.com'))
    })
  })

  describe.only('Must return InvalidEmail for the wrong email name', function () {
    it('@gmail.com', function () {
      assert.strictEqual('InvalidEmail', validation.email('@gmail.com'))
    })
    it('JustAString', function () {
      assert.strictEqual('InvalidEmail', validation.email('JustAString'))
    })
    it('1', function () {
      assert.strictEqual('InvalidEmail', validation.email(1))
    })
    it('0', function () {
      assert.strictEqual('InvalidEmail', validation.email(0))
    })
    it('null', function () {
      assert.strictEqual('InvalidEmail', validation.email(null))
    })
    it('{} [object]', function () {
      assert.strictEqual('InvalidEmail', validation.email({}))
    })
    it("{ key: 'value' } [object]", function () {
      assert.strictEqual('InvalidEmail', validation.email({ key: 'value' }))
    })
  })

  describe.only('Must return InvalidEmail for addresses with special characters', function () {
    it('sf#@gmail.com', function () {
      assert.strictEqual('InvalidEmail', validation.email('sf#@gmail.com'))
    })
    it('s#f@gmail.com', function () {
      assert.strictEqual('InvalidEmail', validation.email('s#f@gmail.com'))
    })
    it('sf@gma%il.com', function () {
      assert.strictEqual('InvalidEmail', validation.email('sf@gma%il.com'))
    })
    it('s!f@gmail.com', function () {
      assert.strictEqual('InvalidEmail', validation.email('s!f@gmail.com'))
    })
    it('s$f@gmail.com', function () {
      assert.strictEqual('InvalidEmail', validation.email('s$f@gmail.com'))
    })
    it('sf@gm$ail.com', function () {
      assert.strictEqual('InvalidEmail', validation.email('sf@gm$ail.com'))
    })
    it('😀@gmail.com', function () {
      assert.strictEqual('InvalidEmail', validation.email('😀@gmail.com'))
    })
  })

  describe.only('Must return InvalidEmail for wrong email domain', function () {
    it('space@gm', function () {
      assert.strictEqual('InvalidEmail', validation.email('space@gm'))
    })
    it('space@gmail.', function () {
      assert.strictEqual('InvalidEmail', validation.email('space123@gmail.'))
    })
    it('space@gmail.c', function () {
      assert.strictEqual('InvalidEmail', validation.email('space@gmail.c'))
    })
    it('space@gmail.c', function () {
      assert.strictEqual('InvalidEmail', validation.email('space@gmail.c$'))
    })
  })
})
