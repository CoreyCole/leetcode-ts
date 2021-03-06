import { LinkedList } from 'typescript-collections'

const isNegative = (num: number): boolean => num < 0

const isPositive = (num: number): boolean => num > 0

const isEven = (num: number): boolean => num % 2 === 0

const isOdd = (num: number): boolean => !isEven(num)

function arrayEquals (arr1: any[], arr2: any[]): boolean {
  if (arr1.length !== arr2.length) {
    return false
  }
  const l = arr1.length
  for (let i = 0; i < l; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

function isPalindrome (s: string): boolean {
  const l = Math.floor(s.length / 2)
  for (let i = 0; i <= l; i++) {
    const firstCharIndex = i
    const lastCharIndex = s.length - 1 - i
    const diff = lastCharIndex - firstCharIndex
    if (s[firstCharIndex] !== s[lastCharIndex]) {
      return false
    } else if (diff === 0 || diff === 1) {
      return true
    }
  }
  return true
}

function reverseString (s: string): string {
  return s
    .split('')
    .reverse()
    .join('')
}

function makeLinkedListFromArray<T> (arr: T[]): LinkedList<T> {
  const result = new LinkedList<T>()
  for (const n of arr) {
    result.add(n)
  }
  return result
}

function create2DArray<T> (rows): T[][] {
  const arr = new Array<T[]>(rows)
  for (let i = 0; i < rows; i++) {
    arr[i] = new Array<T>()
  }
  return arr
}

export {
  isNegative,
  isPositive,
  isEven,
  isOdd,
  arrayEquals,
  isPalindrome,
  reverseString,
  makeLinkedListFromArray,
  create2DArray
}
