import { LinkedList } from 'typescript-collections'

/**
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * Example:
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * 342 + 465 = 807
 */
function addTwo (l1: LinkedList<number>, l2: LinkedList<number>): LinkedList<number> {
  const result = new LinkedList<number>()
  const l = l1.size() > l2.size() ? l1.size() : l2.size()

  let carryOver = 0
  for (let i = 0; i < l; i++) {
    const sum = carryOver + getSum(i, l1, l2)
    carryOver = getCarryOver(sum)
    result.add(sum % 10)
  }

  return result
}

function getSum (i: number, l1: LinkedList<number>, l2: LinkedList<number>) {
  return (l1.elementAtIndex(i) || 0) + (l2.elementAtIndex(i) || 0)
}

function getCarryOver (sum: number) {
  if (sum === 10) {
    return 1
  } else if (sum > 10) {
    return sum % 10
  } else {
    return 0
  }
}

export { addTwo }
