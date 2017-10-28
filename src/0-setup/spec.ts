import { sum } from './solution'

describe('0) setup', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('adds 1 + 3 to equal 4', () => {
    expect(sum(1, 3)).toBe(4)
  })

  it('adds 2 + 3 to equal 5', () => {
    expect(sum(2, 3)).toBe(5)
  })
})
