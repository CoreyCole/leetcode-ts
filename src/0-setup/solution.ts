import { Queue } from 'typescript-collections'

export namespace setup {
  export function sum2 (a: number, b: number): number {
    const q = new Queue<number>()
    q.enqueue(a)
    q.enqueue(b)
    let result = 0
    while (!q.isEmpty()) {
      result += q.dequeue()
    }
    return result
  }
}
