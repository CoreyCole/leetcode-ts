const negative = (num: number): boolean => num < 0

const isEven = (num: number) => num % 2 === 0

const isOdd = (num: number) => !isEven(num)

export { negative, isEven, isOdd }
