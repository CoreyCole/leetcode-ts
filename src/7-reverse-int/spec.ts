import { q7 } from './solution'

describe('Question 7: Reverse Integer', () => {
  describe('reverseInteger', () => {
    it('should return 321 from 123', () => {
      expect(q7.reverseInt(123)).toBe(321)
    })
    it('should return -321 from -123', () => {
      expect(q7.reverseInt(-123)).toBe(-321)
    })
    it('should return 0 when reversed int > 2^31 (2,147,483,648)', () => {
      expect(q7.reverseInt(1234567899)).toBe(0)
    })
    it('should return 0 when reversed int < -1*2^31 (-2,147,483,648)', () => {
      expect(q7.reverseInt(-1234567899)).toBe(0)
    })
    it('should return 0 when reversed int < -1*2^31 (-2,147,483,648)', () => {
      expect(q7.reverseInt(-1234567899)).toBe(0)
    })
    it('should chop off leading zeros after reversing', () => {
      expect(q7.reverseInt(10)).toBe(1)
      expect(q7.reverseInt(100)).toBe(1)
      expect(q7.reverseInt(1000)).toBe(1)
      expect(q7.reverseInt(10000)).toBe(1)
      expect(q7.reverseInt(100000)).toBe(1)
      expect(q7.reverseInt(101000)).toBe(101)
    })
  })
})
