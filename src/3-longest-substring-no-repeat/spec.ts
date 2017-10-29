import { q3 } from './solution'

describe('Question 3: Longest Substring Without Repeating Characters', () => {
  describe('longestSubstringNoRepeat', () => {
    it('should return 3 ("abc") from "abcabcbb"', () => {
      expect(q3.longestSubstringNoRepeat('abcabcbb')).toBe(3)
    })
    it('should return 1 ("b") from "bbbbb"', () => {
      expect(q3.longestSubstringNoRepeat('bbbbb')).toBe(1)
    })
    it('should return 4 ("wkez") from "pwwkezw"', () => {
      expect(q3.longestSubstringNoRepeat('pwwkezw')).toBe(4)
    })
  })
})
