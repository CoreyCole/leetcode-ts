import { q6 } from './solution'

describe('Question 6: ZigZag Conversion', () => {
  describe('zigZagConversion', () => {
    it('should return "PAHNAPLSIIGYIR" from ("PAYPALISHIRING", 3)', () => {
      expect(q6.zigZagConversion('PAYPALISHIRING', 3)).toBe('PAHNAPLSIIGYIR')
    })
    it('should return "AGBFHCEID" from ("ABCDEFGHI", 4)', () => {
      expect(q6.zigZagConversion('ABCDEFGHI', 4)).toBe('AGBFHCEID')
    })
    it('should return "AIBHJCGDFE" from ("ABCDEFGHIJ", 5)', () => {
      expect(q6.zigZagConversion('ABCDEFGHIJ', 5)).toBe('AIBHJCGDFE')
    })
    it('should return "ABHCGDFE" from ("ABCDEFGH", 5)', () => {
      expect(q6.zigZagConversion('ABCDEFGH', 5)).toBe('ABHCGDFE')
    })
    it('should return "ACB" from ("ABC", 2)', () => {
      expect(q6.zigZagConversion('ABC', 2)).toBe('ACB')
    })
  })
})
