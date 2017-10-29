import { isPalindrome } from '../lib/shared'

/**
 * Given a string s, find the longest palindromic substring in s.
 * You may assume that the maximum length of s is 1000.
 *
 * Examples:
 * Input: "babad" => "bab" ("aba" is also a valid answer)
 * Input: "cbbd"  => "bb"
 *
 * @param s the input string
 * @return the longest substring that is a palindrome
 */
// O(n^2)
function longestPalindromeSubstring (s: string): string {
  if (!s || s.length === 0) return ''
  let maxPalindrome = s[0]
  for (let i = 0; i < s.length; i++) {
    if (s.length - i < maxPalindrome.length) {
      break // will never find larger palindrome in i loop
    }
    for (let j = s.length; j > i; j--) {
      const nextSubstring = s.substring(i, j)
      if (isPalindrome(nextSubstring)) {
        maxPalindrome = maxPalindrome.length > nextSubstring.length ? maxPalindrome : nextSubstring
        break // will never find larger palindrome in the j loop once we find one
      } else if (j - i < maxPalindrome.length) {
        // will never find a larger palindrome in the j loop once j gets sufficiently small
        break
      }
    }
  }
  return maxPalindrome
}

export { longestPalindromeSubstring }
