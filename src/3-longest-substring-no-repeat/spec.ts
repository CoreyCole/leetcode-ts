import { longestSubstringNoRepeat } from './solution'

describe('3) longestSubstringNoRepeat', () => {
  it('should return length of the longest substring without repeating characters', () => {
    const test1 = 'abcabcbb'  // abc : 3
    const test2 = 'bbbbb'     // b   : 1
    const test3 = 'pwwkezw'   // wkez : 4
    expect(longestSubstringNoRepeat(test1)).toBe(3)
    expect(longestSubstringNoRepeat(test2)).toBe(1)
    expect(longestSubstringNoRepeat(test3)).toBe(4)
  })
})
