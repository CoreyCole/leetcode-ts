import { twoSumBruteForce, twoSum, getSum } from './solution'

describe('Question 1: Two Sum', () => {
  describe('getSum', () => {
    it('should return the sum of the array elements at the passed index pair', () => {
      expect(getSum([1,2], [1,2,3,4])).toEqual(5)
    })
  })
  describe('twoSum', () => {
    it('should brute force find pair [1, 3] => [2,7] in [1, 2, 4, 7, 9] when target = 9', () => {
      const target = 9
      const arr = [1,2,4,7,9]
      const solution = twoSumBruteForce(target, arr)
      expect(solution).toEqual([1,3])
      const sum = getSum(solution, arr)
      expect(sum).toEqual(target)
    })
    it('should optimally finds pair [1, 3] => [2,7] in [1, 2, 4, 7, 9] when target = 9', () => {
      const target = 9
      const arr = [1,2,4,7,9]
      const solution = twoSum(target, arr)
      expect(solution).toEqual([1,3])
      const sum = getSum(solution, arr)
      expect(sum).toEqual(target)
    })
  })
})
