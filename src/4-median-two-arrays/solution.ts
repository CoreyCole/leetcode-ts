import { isOdd } from '../lib/shared'

/**
 * There are two sorted arrays arr1 and arr2 of size m and n respectively.
 *
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 *
 * Example 1:
 * arr1 = [1, 3]
 * arr2 = [2]
 * The median is 2.0
 *
 * Example 2:
 * arr1 = [1, 2]
 * arr2 = [3, 4]
 * The median is (2 + 3)/2 = 2.5
 */
// O(n) solution, but O(log (m+n)) is possible where m and n are the lengths of the two arrays
const medianTwoArrays = (arr1: number[], arr2: number[]): number => {
  const totalLength = arr1.length + arr2.length
  let currentIndexPair = [0, arr1.length]                                         // we'll be popping off the smallest value from each array
                                                                                  //  so we can think of our traversal like a combined sorted array
  for (let i = 0; i < totalLength / 2 - 1; i++) {                                 // go to the middle of the "master" sorted array
    currentIndexPair = nextIndexPair(currentIndexPair, arr1, arr2)
  }

  return currentIndexPair
    .map((value, index) => index === 0 && isOdd(totalLength) ? value + 1 : value) // if total length odd, median 2nd index b/c (totalLength / 2 - 1)
    .map(index => getValue(index, arr1, arr2))                                    // map indices to values in the two arrays
    .reduce((prev, curr) => prev + curr, 0) / 2                                   // sum the two values and divide by two for average
}

const nextIndexPair = (currentIndexPair: number[], arr1: number[], arr2: number[]): number[] => {
  const index1 = currentIndexPair[0]
  const index2 = currentIndexPair[1]
  const val1 = getValue(index1, arr1, arr2)
  const val2 = getValue(index2, arr1, arr2)
  if (val1 < val2) {
    // values popping off arr1 are smaller, need to increase index1
    return [1,0].map((value, index) => currentIndexPair[index] + value)
  } else {
    // values popping off arr2 are smaller (or equal), need to increase index2
    return [0,1].map((value, index) => currentIndexPair[index] + value)
  }
}

const getValue = (i: number, arr1: number[], arr2: number[]): number => {
  if (i < arr1.length) {
    return arr1[i]
  } else {
    return arr2[i - arr1.length]
  }
}

export { medianTwoArrays }
