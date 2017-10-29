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
    const reversedInt = parseInt(reversedStr, 10)
    return isNegative(n) ? -1 * reversedInt : reversedInt
  }
}
