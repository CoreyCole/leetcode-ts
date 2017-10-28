import { LinkedList } from 'typescript-collections'

import { addTwo } from './solution'

describe('2) addTwoNumbers', () => {
  it('should add the digits of two linked lists with equal lengths', () => {
    const l1 = [2,4,3]
    const l2 = [5,6,4]
    const solution = [7,0,8]
    const ll1 = new LinkedList<number>()
    const ll2 = new LinkedList<number>()
    const solutionLL = new LinkedList<number>()
    for (let n of l1) {
      ll1.add(n)
    }
    for (let n of l2) {
      ll2.add(n)
    }
    for (let n of solution) {
      solutionLL.add(n)
    }

    const sum1 = addTwo(ll1, ll2)
    expect(sum1.equals(solutionLL)).toBeTruthy()
    const sum2 = addTwo(ll2, ll1)
    expect(sum2.equals(solutionLL)).toBeTruthy()
  })

  it('should add the digits of two linked lists with different lengths', () => {
    const l1 = [2,4,3]
    const l2 = [5,6,4,2]
    const solution = [7,0,8,2]
    const ll1 = new LinkedList<number>()
    const ll2 = new LinkedList<number>()
    const solutionLL = new LinkedList<number>()
    for (let n of l1) {
      ll1.add(n)
    }
    for (let n of l2) {
      ll2.add(n)
    }
    for (let n of solution) {
      solutionLL.add(n)
    }

    const sum1 = addTwo(ll1, ll2)
    expect(sum1.equals(solutionLL)).toBeTruthy()
    const sum2 = addTwo(ll2, ll1)
    expect(sum2.equals(solutionLL)).toBeTruthy()
  })

  it('should add 0', () => {
    const l1 = [2,4,3]
    const l2 = [0]
    const solution = [2,4,3]
    const ll1 = new LinkedList<number>()
    const ll2 = new LinkedList<number>()
    const solutionLL = new LinkedList<number>()
    for (let n of l1) {
      ll1.add(n)
    }
    for (let n of l2) {
      ll2.add(n)
    }
    for (let n of solution) {
      solutionLL.add(n)
    }

    const sum1 = addTwo(ll1, ll2)
    expect(sum1.equals(solutionLL)).toBeTruthy()
    const sum2 = addTwo(ll2, ll1)
    expect(sum2.equals(solutionLL)).toBeTruthy()
  })
})
