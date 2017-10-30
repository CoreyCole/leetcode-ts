/**
 * Determine whether an integer is a palindrome. Do this without extra space.
 */
export namespace q9 {
  // expects int
  export function isPalindrome (n: number): boolean {
    const abs = Math.abs(n)
    const p = parse(abs)
    if (p.first !== p.last) {
      return false
    } else if (p.digitCount === 1 || p.digitCount === 2) {
      return true
    } else {
      return isPalindrome(p.middle)
    }
  }

  function parse (n) {
    let restOfNumber = n
    let digitCount = 1
    while (restOfNumber >= 10) {
      restOfNumber = Math.floor(restOfNumber /= 10)
      digitCount++
    }
    return {
      first: restOfNumber,
      middle: Math.floor(n / 10) - Math.pow(10, digitCount - 2),
      last: n % 10,
      digitCount: digitCount
    }
  }
}
