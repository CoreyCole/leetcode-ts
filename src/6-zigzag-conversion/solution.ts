import { create2DArray } from '../lib/shared'

/**
 *                         result              given
 * The string "PAYPALISHIRING" (len 14, cols 4) with 3 rows looks like this:
 * P   A   H   N  |  0   4   8     12  |  0     1     2   3
 * A P L S I I G  |  1 3 5 7 9  11 13  |  4  5  6  7  8 9 10
 * Y   I   R      |  2   6   10        |  11 12 13 14
 * And then read line by line: "PAHNAPLSIIGYIR"
 *
 * The string "ABCDEFGHI" (len 9, cols 2) with 4 rows looks like this:
 * A      G  |  0     6
 * B    F H  |  1   5 7
 * C  E   I  |  2 4   8
 * D         |  3
 * And then read line by line: "AGBFHCEID"
 *
 * The string "ABCDEFGHIJ" (len 10, cols 2) with 5 rows looks like this:
 * A        I  |  0       8
 * B      H J  |  1     7 9
 * C    G      |  2   6
 * D  F        |  3 5
 * E           |  4
 * And then read line by line: "AIBHJCGDFE"
 *
 * The string "ABCDEFGH" (len 8, cols 1) with 5 rows looks like this:
 * A         |  0
 * B      H  |  1     7
 * C    G    |  2   6
 * D  F      |  3 5
 * E         |  4
 * And then read line by line: "ABHCGDFE"
 *
 * The string "ABC" (len 3, cols 2) with 2 rows looks like this:
 * A C  |  0 2
 * B    |  1
 * And then read line by line: "ACB"
 *
 * @param s the string to be converted to the ZigZag pattern
 * @param numRow the number of rows to use in the ZigZag conversion
 * @return the converted string
 */
export namespace q6 {
  export function zigZagConversion (s: string, numRows: number): string {
    return getIndexArr(s.length, numRows) // array of indices jumping around the passed string in desired order
      .map(i => s[i])
      .join('')
  }

  function getIndexArr (sLen: number, numRows: number): number[] {
    const charIndexBuffers = create2DArray<number>(numRows)
    const zzLen = zigZagLen(numRows)            // length of each ZigZag
    const numColumns = Math.ceil(sLen / zzLen)  // total number of columns (also number of ZigZags)
    let i = 0
    for (let zzIdx = 0; zzIdx < numColumns; zzIdx++) {  // ZigZag by ZigZag
      for (let rowIdx = 0; rowIdx < numRows && length <= sLen; rowIdx++) {     // go directly downward
        charIndexBuffers[rowIdx].push(i)
        i++
      }
      for (let rowIdx = numRows - 2; rowIdx > 0 && length <= sLen; rowIdx--) { // go diagonally upward
        charIndexBuffers[rowIdx].push(i)
        i++
      }
    }
    return charIndexBuffers
      .reduce((prev, curr) => prev.concat(curr), [])
  }

  // function getIndex (i: number, sLen: number, numRows: number): number {
  //   const zzLen = zigZagLen(numRows)           // length of each ZigZag
  //   const numColumns = Math.ceil(sLen / zzLen) // total number of columns (also number of ZigZags)
  //   const pos = Math.floor(i / zzLen)          // 0 indexed position in the current ZigZag
  //   const inColumn = pos < numRows             // true if we are in the column portion of a ZigZag
  //   const zigIdx = Math.floor(i / numColumns)  // which ZigZag are we in
  //   const rowIdx = inColumn ? pos : numRows - 2 - (pos % numRows) // 0 indexed row
  //   console.log(i, numColumns, zigIdx, zzLen, pos, inColumn, rowIdx, ' => ', zigIdx * zzLen + pos)
  //   return inColumn ?
  //     zigIdx * zzLen + rowIdx pos : zigIdx * zzLen + pos
  // }

  function zigZagLen (numRows: number): number {
    const zigLen = numRows
    const zagLen = numRows - 2 // minus 2 for the top and bottom of prev and next column
    return zigLen + zagLen
  }
}
