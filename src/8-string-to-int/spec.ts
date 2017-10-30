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
    it('should handle "000" => 0', () => {
      expect(q8.atoi('000')).toBe(0)
    })
    it('should ignore trailing characters "1abc" => 1', () => {
      expect(q8.atoi('1abc')).toBe(1)
    })
    it('should ignore characters in the middle "-1a3" => -1', () => {
      expect(q8.atoi('-1a3')).toBe(-1)
    })
    it('should handle 0', () => {
      expect(q8.atoi('0')).toBe(0)
    })
    it('should handle "-00" => -0', () => {
      expect(q8.atoi('-0')).toBe(-0)
    })
    it('should handle "-01" => -1', () => {
      expect(q8.atoi('-01')).toBe(-1)
    })
    it('should handle decimals "12.3" => 12.3', () => {
      expect(q8.atoi('12.3')).toBeCloseTo(12.3)
    })
    it('should handle multiple decimals "12.3.3" => 12.3', () => {
      expect(q8.atoi('12.3.3')).toBeCloseTo(12.3)
    })
    it('should return NaN for invalid strings "a123" => NaN', () => {
      expect(isNaN(q8.atoi('a123'))).toBe(true)
    })
  })
})
