import { isNegative, reverseString } from '../lib/shared'
/**
 * Reverse digits of an integer.
 * Example1: x = 123, return 321
 * Example2: x = -123, return -321
 * Note: The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
 */
export namespace q7 {
  export function reverseInt (n: number): number {
    const nStr = '' + Math.abs(n)
    const reversedStr = reverseString(nStr)
    const reversedInt = parseInt(reversedStr, 10) // parse int chops off leading zeros
    const safeReversedInt = isOverflowed(reversedInt) ? 0 : reversedInt
    return isNegative(n) ? -1 * safeReversedInt : safeReversedInt
  }

  // expects a positive number
  function isOverflowed (n: number): boolean {
    return n > Math.pow(2, 31)
  }
}
