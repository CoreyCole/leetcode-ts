import {
  isNegative,
  isPositive,
  isEven,
  isOdd,
  arrayEquals,
  isPalindrome
} from './shared'
describe('shared library functions', () => {
  describe('isNegative', () => {
    it('should confirm -1 is negative', () => {
      expect(isNegative(-1)).toBe(true)
    })
    it('should confirm 1 is NOT negative', () => {
      expect(isNegative(1)).toBe(false)
    })
    it('should confirm 0 is NOT negative', () => {
      expect(isNegative(0)).toBe(false)
    })
  })
  describe('isPositive', () => {
    it('should confirm 1 is positive', () => {
      expect(isPositive(1)).toBe(true)
    })
    it('should confirm -1 is NOT positive', () => {
      expect(isPositive(-1)).toBe(false)
    })
    it('should confirm 0 is NOT positive', () => {
      expect(isPositive(0)).toBe(false)
    })
  })
  describe('isEven', () => {
    it('should confirm 2 is even', () => {
      expect(isEven(2)).toBe(true)
    })
    it('should confirm 1 is NOT even', () => {
      expect(isEven(1)).toBe(false)
    })
    it('should confirm 0 is even', () => {
      expect(isEven(0)).toBe(true)
    })
  })
  describe('isOdd', () => {
    it('should confirm 2 is NOT odd', () => {
      expect(isOdd(2)).toBe(false)
    })
    it('should confirm 1 is odd', () => {
      expect(isOdd(1)).toBe(true)
    })
    it('should confirm 0 is NOT odd', () => {
      expect(isOdd(0)).toBe(false)
    })
  })
  describe('arrayEquals', () => {
    it('should confirm [1,2,3] === [1,2,3]', () => {
      expect(arrayEquals([1,2,3], [1,2,3])).toBe(true)
    })
    it('should confirm [1,2,3] !== [1,2]', () => {
      expect(arrayEquals([1,2,3], [1,2])).toBe(false)
    })
  })
  describe('isPalindrome', () => {
    it('should confirm "racecar" is a palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true)
    })
    it('should confirm "racecars" is NOT a palindrome', () => {
      expect(isPalindrome('racecars')).toBe(false)
    })
  })
})
