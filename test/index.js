/* globals describe, it */

const alphabets = require('..')
const assert = require('assert')
const uniq = require('lodash.uniq')

describe('acrophonic-alphabets', () => {
  it('is an array', () => {
    assert(Array.isArray(alphabets))
  })

  it('always has 26 words', () => {
    assert(alphabets.every(a => a.words.length === 26))
  })

  it('always has a uniq id', () => {
    var ids = alphabets.map(a => a.id)
    assert(ids.every(id => id.length > 0))
    assert.deepEqual(ids, uniq(ids))
  })
})
