import { q10 } from './solution'

describe('Question 10: Regular Expression Matching', () => {
  describe('isMatch', () => {
    it('should NOT match "aa" with "a"', () => {
      expect(q10.isMatch('aa', 'a')).toBe(false)
    })
    it('should match "aa" with "aa"', () => {
      expect(q10.isMatch('aa', 'aa')).toBe(true)
    })
    it('should NOT match "aaa" with "aa"', () => {
      expect(q10.isMatch('aaa', 'aa')).toBe(false)
    })
    it('should match "aa" with "a*"', () => {
      expect(q10.isMatch('aa', 'a*')).toBe(true)
    })
    it('should match "aa" with ".*"', () => {
      expect(q10.isMatch('aa', '.*')).toBe(true)
    })
    it('should match "ab" with ".*"', () => {
      expect(q10.isMatch('ab', '.*')).toBe(true)
    })
    it('should match "aab" with "c*a*b*"', () => {
      expect(q10.isMatch('aab', 'c*a*b*')).toBe(true)
    })
  })
})
