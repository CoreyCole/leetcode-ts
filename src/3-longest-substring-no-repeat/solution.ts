/**
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Examples:
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 * Given "bbbbb", the answer is "b", with the length of 1.
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring
 */
export namespace q3 {
  export function longestSubstringNoRepeat (s: string): number {
    let longestSubstringLen = 0
    let currentSet = new Set<string>()
    for (const char of s) {
      if (!currentSet.has(char)) {
        currentSet.add(char)
      } else {
        longestSubstringLen = longestSubstringLen < currentSet.size ? currentSet.size : longestSubstringLen
        currentSet = new Set<string>(char)
      }
    }

    return longestSubstringLen
  }
}
