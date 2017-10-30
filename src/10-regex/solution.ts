/**
 * Implement regular expression matching with support for '.' and '*'
 * '.' Matches any single character.
 * '*' Matches zero or more of the preceding element.
 *
 * The matching should cover the entire input string (not partial).
 *
 * Some examples:
 * isMatch("aa","a")       → false
 * isMatch("aa","aa")      → true
 * isMatch("aaa","aa")     → false
 * isMatch("aa", "a*")     → true
 * isMatch("aa", ".*")     → true
 * isMatch("ab", ".*")     → true
 * isMatch("aab", "c*a*b") → true
 */
export namespace q10 {
  // assumes valid regex
  export function isMatch (str: string, regex: string): boolean {
    const regexArr = parseRegex(regex)
    let skippedI = 0 // keeps track of offset between i and the current regex
    let i = 0
    do {
      skippedI = isValid(str, i, regexArr, skippedI)
      if (skippedI < 0) return false
      i++
    } while (i < str.length)
    return true
  }

  // returns -1 if invalid
  function isValid (s: string, i: number, regexArr: string[], skippedI: number): number {
    const c1 = s[i]
    if (i - skippedI >= regexArr.length) return -1
    const regex = regexArr[i - skippedI]
    const c2 = regex[0]
    const skipping = regex.length > 1 && regex[1] === '*'
    const match = c1 === c2 || c2 === '.'
    if (skipping && match) {
      skippedI++
      return skippedI
    } else if (match || (skipping && !match)) {
      return skippedI
    } else {
      return -1
    }
  }

  function parseRegex (regex: string): string[] {
    const result = new Array<string>()
    for (let i = 0; i < regex.length; i++) {
      if ((i + 1) < regex.length && regex[i + 1] === '*') {
        result.push(regex.substring(i, i + 2))
        i++
      } else {
        result.push(regex[i])
      }
    }
    return result
  }
}
