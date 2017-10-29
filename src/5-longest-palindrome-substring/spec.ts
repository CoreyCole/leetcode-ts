import { longestPalindromeSubstring } from './solution'

describe('Question 5: Longest Palindromic Substring', () => {
  describe('longestPalindromeSubstring', () => {
    it('should return "aba" from "babad"', () => {
      expect(longestPalindromeSubstring('babad')).toBe('aba')
    })
    it('should return "bb" from "cbbd"', () => {
      expect(longestPalindromeSubstring('cbbd')).toBe('bb')
    })
    it('should return "" if passed ""', () => {
      expect(longestPalindromeSubstring('')).toBe('')
    })
    it('should return "zzaabbaazz" from "abccbazzaabbaazzccbbaa"', () => {
      expect(longestPalindromeSubstring('abccbazzaabbaazzccbbaa')).toBe('zzaabbaazz')
    })
    it('should return "aaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaa" from "aaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaa"', () => {
      expect(longestPalindromeSubstring('aaaaaaaaaaaaaaaaaabcaaaaaaaaaaaaaaaaa')).toBe('aaaaaaaaaaaaaaaaaa')
    })
  })
})
