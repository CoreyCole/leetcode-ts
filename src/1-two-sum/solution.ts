import { arrayEquals } from '../lib/shared'

/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * @param target the desired sum to be found within the array
 * @param numbers the array of integers to be searched through for a pair that sums to target
 * @return an array of size two with the array indices of the pair of number
 */

// O(n^2)
const twoSumBruteForce = (target: number, numbers: number[]) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j]
      }
    }
  }
}

// O(n log n)
const twoSum = (target: number, numbers: number[]): number[] => {
  const sortedNumbers = numbers.sort()

  let currentIndexPair = [0, sortedNumbers.length - 1]
  while (!isSolution(target, currentIndexPair, numbers)) {
    currentIndexPair = nextIndexPair(target, currentIndexPair, numbers)
  }
  return currentIndexPair
}

const nextIndexPair = (target: number, prevIndexPair: number[], numbers: number[]): number[] => {
  const currentSum = getSum(prevIndexPair, numbers)
  const pairChange = currentSum > target ? [0,-1] : [1,0]
  return prevIndexPair.map((value, index, arr) => pairChange[index] + arr[index])
}

const isSolution = (target: number, currentIndexPair: number[], numbers: number[]): boolean =>
  getSum(currentIndexPair, numbers) === target

const getSum = (currentIndexPair: number[], numbers: number[]): number => {
  const bottomIndex = currentIndexPair[0]
  const topIndex = currentIndexPair[1]
  return numbers[bottomIndex] + numbers[topIndex]
}

const tooBig = (num: number, target: number): boolean => num > target

export { twoSumBruteForce, twoSum, getSum }

/**
 * notes:
 * brute force solution is n^2 where you check each index against every other index
 * and check each combination for the target sum until it is found
 *
 * doing better:
 * sort array and go from each end to try adding the biggest numbers to the smallest numbers
 * if there are no negative numbers, we can start at the target (or less than target if there are no zeros)
 * if the target is odd, need 1 odd and 1 even to add to it
 * if the target is even, need 2 even numbers or 2 odd numbers to add to it
 *
 * OR we could start from half of the target and go in opposite direction in the sorted array
 *
 * For both of these solutions, we need a function to control when we increment index in some direction
 * Using first solution, take sorted array [1, 2, 4, 7, 9]
 * Starting at 1 and 9, which index do we increment?
 *   since 1 + 9 > target, decrement top index
 * Then we are at 1 and 7
 *   since 1 + 7 < target, increment bottom index
 */
