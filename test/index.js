/* globals describe, it */

const alphabets = require('..')
const assert = require('assert')

describe('acrophonic-alphabets', () => {
  it('is an array', () => {
    assert(Array.isArray(alphabets))
  })

  it('always has 26 words', () => {
    assert(alphabets.every(a => a.words.length === 26))
  })
})
