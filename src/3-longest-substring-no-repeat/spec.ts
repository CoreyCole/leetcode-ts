import { longestSubstringNoRepeat } from './solution'

describe('Question 3: Longest Substring Without Repeating Characters', () => {
  describe('longestSubstringNoRepeat', () => {
    it('should return 3 ("abc") from "abcabcbb"', () => {
      expect(longestSubstringNoRepeat('abcabcbb')).toBe(3)
    })
    it('should return 1 ("b") from "bbbbb"', () => {
      expect(longestSubstringNoRepeat('bbbbb')).toBe(1)
    })
    it('should return 4 ("wkez") from "pwwkezw"', () => {
      expect(longestSubstringNoRepeat('pwwkezw')).toBe(4)
    })
  })
})
