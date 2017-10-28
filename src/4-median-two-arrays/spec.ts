import { medianTwoArrays } from './solution'

describe('4) medianTwoArrays', () => {
  it('should return median of [1,3] and [2] => 2.0', () => {
    const n1 = [1,3]
    const n2 = [2]
    const solution = 2.0
    expect(medianTwoArrays(n1,n2)).toBe(solution)
  })

  it('should return median of [1,2] and [3,4] => 2.5', () => {
    const n1 = [1,2]
    const n2 = [3,4]
    const solution = 2.5
    expect(medianTwoArrays(n1,n2)).toBe(solution)
  })

  it('should return median of [3,4,5] and [1,4,6] => 4.0', () => {
    const n1 = [3,4,5]
    const n2 = [1,4,6]
    const solution = 4.0
    expect(medianTwoArrays(n1,n2)).toBe(solution)
  })

  it('should return median of [1,2,3] and [3,4] => 3.0', () => {
    const n41 = [1,2,3]
    const n42 = [3,4]
    const solution = 3.0
    expect(medianTwoArrays(n41,n42)).toBe(solution)
  })
})
