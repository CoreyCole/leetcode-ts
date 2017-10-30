import { q8 } from './solution'

describe('Question 8: String to Integer (atoi)', () => {
  describe('stringToInt', () => {
    it('should return 123 from "123', () => {
      expect(q8.atoi('123')).toBe(123)
    })
    it('should return -123 from "-123"', () => {
      expect(q8.atoi('-123')).toBe(-123)
    })
    it('should return 1 from "01"', () => {
      expect(q8.atoi('01')).toBe(1)
    })
    it('should ignore leading white space "  01" => 1', () => {
      expect(q8.atoi('  01')).toBe(1)
    })
    it('should ignore handle "000" => 0', () => {
      expect(q8.atoi('  01')).toBe(1)
    })
    it('should ignore trailing characters "1abc" => 1', () => {
      expect(q8.atoi('1abc')).toBe(1)
    })
    it('should handle decimals "12.3" => 12.3', () => {
      expect(q8.atoi('12.3')).toBeCloseTo(12.3)
    })
  })
})
