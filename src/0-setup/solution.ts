import { Queue } from 'typescript-collections'

const sum = (a: number, b: number) => {
  const q = new Queue<number>()
  q.enqueue(a)
  q.enqueue(b)
  let sum: number = 0
  while (!q.isEmpty()) {
    sum += q.dequeue()
  }
  return sum
}

export { sum }
