const palindromes = require('./palindromes')

describe('palindromes()', () => {
    it('correctly identifies one-word palindromes', () => {
        expect(palindromes('madam')).toEqual(['madam']) //1
    })
})

// 1. Previously, we’ve made equality assertions with toBe(). 
// However, toBe() does a strict equality check, which would fail here. 
// The toEqual() assertion method, by contrast, checks for deep object equality. 
// So the assertion expect(x).toEqual(['madam']) passes as long as x is an array with the string "madam" as its only entry.