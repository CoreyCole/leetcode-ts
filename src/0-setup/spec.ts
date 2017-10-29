import { setup } from './solution'

describe('0) setup', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(setup.sum2(1, 2)).toBe(3)
  })
  it('adds 1 + 3 to equal 4', () => {
    expect(setup.sum2(1, 3)).toBe(4)
  })
  it('adds 2 + 3 to equal 5', () => {
    expect(setup.sum2(2, 3)).toBe(5)
  })
})
