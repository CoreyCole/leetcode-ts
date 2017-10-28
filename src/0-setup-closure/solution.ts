// Import index.ts to load type information of Closure Library.
import * as closure from 'closure-library.ts'
// Call register() to enable `goog.requrie()`.
closure.register()
// Then `googl.require` returns the namespace!
const Queue = goog.require('goog.structs.Queue')
// Type information of Closure Library is available in TypeScript.

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
