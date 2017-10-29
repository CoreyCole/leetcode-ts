import { LinkedList } from 'typescript-collections'

import { makeLinkedListFromArray } from '../lib/shared'
import { q2 } from './solution'

describe('Question 2: Add Two Numbers', () => {
  describe('addTwo', () => {
    it('should add the digits of two linked lists with equal lengths', () => {
      const ll1 = makeLinkedListFromArray([2,4,3])
      const ll2 = makeLinkedListFromArray([5,6,4])
      const solutionLL = makeLinkedListFromArray([7,0,8])
      const sum1 = q2.addTwo(ll1, ll2)
      const sum2 = q2.addTwo(ll2, ll1)
      expect(sum1.equals(solutionLL)).toBe(true)
      expect(sum2.equals(solutionLL)).toBe(true)
      expect(sum1.equals(sum2)).toBe(true)
    })
    it('should add the digits of two linked lists with different lengths', () => {
      const ll1 = makeLinkedListFromArray([2,4,3])
      const ll2 = makeLinkedListFromArray([5,6,4,2])
      const solutionLL = makeLinkedListFromArray([7,0,8,2])
      const sum1 = q2.addTwo(ll1, ll2)
      const sum2 = q2.addTwo(ll2, ll1)
      expect(sum1.equals(solutionLL)).toBe(true)
      expect(sum2.equals(solutionLL)).toBe(true)
      expect(sum1.equals(sum2)).toBe(true)
    })
    it('should add 0', () => {
      const ll1 = makeLinkedListFromArray([2,4,3])
      const ll2 = makeLinkedListFromArray([0])
      const solutionLL = makeLinkedListFromArray([2,4,3])
      const sum1 = q2.addTwo(ll1, ll2)
      const sum2 = q2.addTwo(ll2, ll1)
      expect(sum1.equals(solutionLL)).toBe(true)
      expect(sum2.equals(solutionLL)).toBe(true)
      expect(sum1.equals(sum2)).toBe(true)
    })
  })
})
