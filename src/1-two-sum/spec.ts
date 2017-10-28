import { twoSumBruteForce, twoSum, getSum } from './solution'

it('getSum returns the sum of the array elements at the passed index pair', () => {
  const arr = [1,2,3,4]
  const pair = [1,2]
  const sum = getSum(pair, arr)
  expect(sum).toEqual(5)
})

it('brute force finds pair [1, 3] => [2,7] in [1, 2, 4, 7, 9] when target = 9', () => {
  const target = 9
  const arr = [1,2,4,7,9]
  const solution = twoSumBruteForce(target, arr)
  expect(solution).toEqual([1,3])
  const sum = getSum(solution, arr)
  expect(sum).toEqual(target)
})

// it('optimized finds pair [1, 3] => [2,7] in [1, 2, 4, 7, 9] when target = 9', () => {
//   const target = 9
//   const arr = [1,2,4,7,9]
//   const solution = twoSum(target, arr)
//   const sum = getSum(solution, arr)
//   expect(sum).toEqual(target)
// })
