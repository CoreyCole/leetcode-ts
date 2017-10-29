import { LinkedList } from 'typescript-collections'

import {
  isNegative,
  isPositive,
  isEven,
  isOdd,
  arrayEquals,
  isPalindrome,
  reverseString,
  makeLinkedListFromArray,
  create2DArray
} from './shared'

describe('shared library functions', () => {
  describe('isNegative', () => {
    it('should confirm -1 is negative', () => {
      expect(isNegative(-1)).toBe(true)
    })
    it('should confirm 1 is NOT negative', () => {
      expect(isNegative(1)).toBe(false)
    })
    it('should confirm 0 is NOT negative', () => {
      expect(isNegative(0)).toBe(false)
    })
  })
  describe('isPositive', () => {
    it('should confirm 1 is positive', () => {
      expect(isPositive(1)).toBe(true)
    })
    it('should confirm -1 is NOT positive', () => {
      expect(isPositive(-1)).toBe(false)
    })
    it('should confirm 0 is NOT positive', () => {
      expect(isPositive(0)).toBe(false)
    })
  })
  describe('isEven', () => {
    it('should confirm 2 is even', () => {
      expect(isEven(2)).toBe(true)
    })
    it('should confirm 1 is NOT even', () => {
      expect(isEven(1)).toBe(false)
    })
    it('should confirm 0 is even', () => {
      expect(isEven(0)).toBe(true)
    })
  })
  describe('isOdd', () => {
    it('should confirm 2 is NOT odd', () => {
      expect(isOdd(2)).toBe(false)
    })
    it('should confirm 1 is odd', () => {
      expect(isOdd(1)).toBe(true)
    })
    it('should confirm 0 is NOT odd', () => {
      expect(isOdd(0)).toBe(false)
    })
  })
  describe('arrayEquals', () => {
    it('should confirm [1,2,3] === [1,2,3]', () => {
      expect(arrayEquals([1,2,3], [1,2,3])).toBe(true)
    })
    it('should confirm [1,2,3] !== [1,2]', () => {
      expect(arrayEquals([1,2,3], [1,2])).toBe(false)
    })
  })
  describe('isPalindrome', () => {
    it('should confirm "a" is a palindrome', () => {
      expect(isPalindrome('a')).toBe(true)
    })
    it('should confirm "aa" is a palindrome', () => {
      expect(isPalindrome('aa')).toBe(true)
    })
    it('should confirm "az" is NOT a palindrome', () => {
      expect(isPalindrome('az')).toBe(false)
    })
    it('should confirm "racecar" is a palindrome', () => {
      expect(isPalindrome('racecar')).toBe(true)
    })
    it('should confirm "racecars" is NOT a palindrome', () => {
      expect(isPalindrome('racecars')).toBe(false)
    })
  })
  describe('reverseString', () => {
    it('should reverse a => a', () => {
      expect(reverseString('a')).toBe('a')
    })
    it('should reverse aa => aa', () => {
      expect(reverseString('aa')).toBe('aa')
    })
    it('should reverse aba => aba', () => {
      expect(reverseString('aba')).toBe('aba')
    })
    it('should reverse abz => zba', () => {
      expect(reverseString('abz')).toBe('zba')
    })
  })
  describe('makeLinkedListFromArray', () => {
    it('should make an empty LinkedList', () => {
      expect(makeLinkedListFromArray([])).toBeInstanceOf(LinkedList)
    })
    it('should make a linked list of numbers', () => {
      const ll = makeLinkedListFromArray([1,2,3])
      expect(ll).toBeInstanceOf(LinkedList)
      expect(ll.size()).toBe(3)
    })
    it('should make a linked list of string', () => {
      const ll = makeLinkedListFromArray(['a','b','c','d'])
      expect(ll).toBeInstanceOf(LinkedList)
      expect(ll.size()).toBe(4)
    })
  })
  describe('create2DArray', () => {
    it('should make a 2D array', () => {
      const height = 3
      const arr = create2DArray<number>(height)
      expect(arr).toBeDefined()
      expect(arr.length).toBe(height)
      for (const subArr of arr) {
        expect(subArr).toBeDefined()
        expect(subArr.length).toBe(0)
        subArr.push(1)
        expect(subArr[0]).toBe(1)
      }
    })
  })
})
