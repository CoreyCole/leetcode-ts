const isNegative = (num: number): boolean => num < 0

const isEven = (num: number) => num % 2 === 0

const isOdd = (num: number) => !isEven(num)

const arrayEquals = (arr1: any[], arr2: any[]) => {
  if (arr1.length !== arr2.length) {
    return false
  }
  const l = arr1.length
  for (let i = 0; i < l; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

export {
  isNegative,
  isEven,
  isOdd,
  arrayEquals
}
