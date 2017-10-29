import { q7 } from './solution'

describe('Question 7: Reverse Integer', () => {
  describe('reverseInteger', () => {
    it('should return 321 from 123', () => {
      expect(q7.reverseInt(123)).toBe(321)
    })
    it('should return -321 from -123', () => {
      expect(q7.reverseInt(-123)).toBe(-321)
    })
  })
})
