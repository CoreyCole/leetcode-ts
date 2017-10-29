import { q5 } from './solution'

describe('Question 5: Longest Palindromic Substring', () => {
  describe('longestPalindromeSubstring', () => {
    it('should return "aba" from "babad"', () => {
      expect(q5.longestPalindromeSubstring('babad')).toBe('aba')
    })
    it('should return "bb" from "cbbd"', () => {
      expect(q5.longestPalindromeSubstring('cbbd')).toBe('bb')
    })
    it('should return "" if passed ""', () => {
      expect(q5.longestPalindromeSubstring('')).toBe('')
    })
    it('should return "zzaabbaazz" from "abccbazzaabbaazzccbbaa"', () => {
      expect(q5.longestPalindromeSubstring('abccbazzaabbaazzccbbaa')).toBe('zzaabbaazz')
    })
    it('should return "aaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaa" from "aaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaa"', () => {
      expect(q5.longestPalindromeSubstring('aaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaa')).toBe('aaaaaaaaaaaaaaaaaa')
    })
  })
})
