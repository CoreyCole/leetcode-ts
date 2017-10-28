import { Queue } from 'typescript-collections'

const sum = (a: number, b: number) => {
  const q = new Queue<number>()
  q.enqueue(a)
  q.enqueue(b)
  let result = 0
  while (!q.isEmpty()) {
    result += q.dequeue()
  }
  return result
}

export { sum }
