/**
 * Implement atoi to convert a string to an integer. (parseInt)
 * '123'  => 123
 * '12.3' => 12.3
 * '0123' => 123
 * ' 123' => 123
 * '-123' => -123
 * '12a3' => 12
 * 'a123' => NaN
 * '-1a3' => -1
 * '12.3.3' => 12.3
 */
export namespace q8 {
  export function atoi (s: string): number {
    const safeStr = getSafeStr(s)
    if (safeStr.length === 0) {
      return NaN
    }
    const isNegative = safeStr[0] === '-'

    let result = 0
    let power = 0
    let floor = isNegative ? 1 : 0
    for (let i = safeStr.length - 1; i >= floor; i--) {
      const digit = parseInt(safeStr[i], 10)
      if (safeStr[i] === '.') {
        result = convertToDecimal(result)
        power = 0
      } else if (isNaN(digit)) {
        result = 0
        power = 0
      } else {
        result += digit * Math.pow(10, power)
        power++
      }
    }
    return isNegative ? -1 * result : result
  }

  function convertToDecimal (n: number): number {
    let digit = n % 10
    let restOfNumber = Math.floor(n / 10)
    let power = -1
    let result = 0
    do {
      result += digit * Math.pow(10, power)
      power--
      digit = restOfNumber % 10
      restOfNumber = Math.floor(restOfNumber / 10)
    } while (restOfNumber > 0)
    return result
  }

  // returns safe string i.e.
  //  - only 1 decimal
  //  - no characters
  //  - leftmost number
  // returns empty string if no valid string found
  function getSafeStr (s: string): string {
    const trimmedStr = s.trim()
    const isNegative = trimmedStr[0] === '-'
    let i = isNegative ? 1 : 0
    while (trimmedStr[i] === '0') {
      i++
    }
    const noLeadingZerosStr = trimmedStr.substring(i)
    let decimalCount = 0
    function validChar (char): boolean {
      const num = parseInt(char, 10)
      if (!isNaN(num)) { // it is a number
        return true
      } else if (char === '.' && decimalCount === 0) {
        decimalCount++
        return true
      } else {
        return false
      }
    }
    let j = 0
    while (validChar(noLeadingZerosStr[j])) {
      j++
    }
    const safeSubStr = noLeadingZerosStr.substring(0, j)
    return isNegative ? '-' + safeSubStr : safeSubStr
  }
}
