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
  })

  describe.only('Must return undefined for the right email name', function () {
    it('email with a dot', function () {
      assert.strictEqual(undefined, validation.email('space.space@gmail.com'))
    })
    it('upper case', function () {
      assert.strictEqual(undefined, validation.email('Space.sPace@gmail.com'))
    })
    it('regular email', function () {
      assert.strictEqual(undefined, validation.email('space@gmail.com'))
    })
    it('email with numbers', function () {
      assert.strictEqual(undefined, validation.email('someemail123@gmail.com'))
    })
    it('email with a dot and numbers', function () {
      assert.strictEqual(undefined, validation.email('some.email123@gmail.com'))
    })
    it('atext is numbers', function () {
      assert.strictEqual(undefined, validation.email('123@gmail.com'))
    })
    it('atext with allowed special characters', function () {
      assert.strictEqual(undefined, validation.email('sf#@gmail.com'))
      assert.strictEqual(undefined, validation.email('s!f@gmail.com'))
      assert.strictEqual(undefined, validation.email('s$f@gmail.com'))
      assert.strictEqual(undefined, validation.email('sf%@gmail.com'))
      assert.strictEqual(undefined, validation.email('some_one@gmail.com'))
      assert.strictEqual(undefined, validation.email('some&one@gmail.com'))
      assert.strictEqual(undefined, validation.email('someone+alias@gmail.com'))
      assert.strictEqual(undefined, validation.email('john-doe@gmail.com'))
      assert.strictEqual(undefined, validation.email('john-doe@gmail.com'))
    })
  })

  describe.only('Must return InvalidEmail for the wrong email label', function () {
    it('without email atext', function () {
      assert.strictEqual('InvalidEmail', validation.email('@gmail.com'))
    })
    it('without @ and the domain', function () {
      assert.strictEqual('InvalidEmail', validation.email('JustAString'))
    })
    it('wrong type: number', function () {
      assert.strictEqual('InvalidEmail', validation.email(1))
    })
    it('number: 0', function () {
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
    it('domain with special character', function () {
      assert.strictEqual('InvalidEmail', validation.email('sf@gma%il.com'))
    })
    it('sf@gm$ail.com', function () {
      assert.strictEqual('InvalidEmail', validation.email('sf@gm$ail.com'))
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
    it('space@gmail.c$', function () {
      assert.strictEqual('InvalidEmail', validation.email('space@gmail.c$'))
    })
    it('e-mail addresses with Internationalised Domain Names using punycode', function () {
      assert.strictEqual('InvalidEmail', validation.email('поч та@яндек с.рф'))
    })
  })
})
