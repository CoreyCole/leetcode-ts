import { medianTwoArrays } from './solution'

describe('Question 4: Median of Two Sorted Arrays', () => {
  describe('medianTwoArrays', () => {
    it('should return median of [1,3] and [2] => 2.0', () => {
      expect(medianTwoArrays([1,3], [2])).toBe(2.0)
    })
    it('should return median of [1,2] and [3,4] => 2.5', () => {
      expect(medianTwoArrays([1,2], [3,4])).toBe(2.5)
    })
    it('should return median of [3,4,5] and [1,4,6] => 4.0', () => {
      expect(medianTwoArrays([3,4,5], [1,4,6])).toBe(4.0)
    })
    it('should return median of [1,2,3] and [3,4] => 3.0', () => {
      expect(medianTwoArrays([1,2,3],[3,4])).toBe(3.0)
    })
  })
})
