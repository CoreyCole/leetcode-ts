import { q9 } from './solution'

describe('Question 9: Palindrome Number', () => {
  describe('isPalindrome', () => {
    it('should confirm 0 is a palindrome', () => {
      expect(q9.isPalindrome(0)).toBe(true)
    })
    it('should confirm 1 is a palindrome', () => {
      expect(q9.isPalindrome(1)).toBe(true)
    })
    it('should confirm -1 is a palindrome', () => {
      expect(q9.isPalindrome(-1)).toBe(true)
    })
    it('should confirm 11 is a palindrome', () => {
      expect(q9.isPalindrome(11)).toBe(true)
    })
    it('should confirm 121 is a palindrome', () => {
      expect(q9.isPalindrome(121)).toBe(true)
    })
    it('should confirm 123 is NOT a palindrome', () => {
      expect(q9.isPalindrome(123)).toBe(false)
    })
    it('should confirm 11211 is a palindrome', () => {
      expect(q9.isPalindrome(11211)).toBe(true)
    })
    it('should confirm 112334 is NOT a palindrome', () => {
      expect(q9.isPalindrome(112334)).toBe(false)
    })
  })
})
