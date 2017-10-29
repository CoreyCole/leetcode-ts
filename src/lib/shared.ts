const isNegative = (num: number): boolean => num < 0

const isPositive = (num: number): boolean => num > 0

const isEven = (num: number): boolean => num % 2 === 0

const isOdd = (num: number): boolean => !isEven(num)

const arrayEquals = (arr1: any[], arr2: any[]): boolean => {
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

const isPalindrome = (s: string): boolean => {
  const firstChar = s.charAt(0)
  const lastChar = s.charAt(s.length - 1)
  console.log(s, firstChar, lastChar)
  if (s.length === 1) {
    return true
  } else if (firstChar !== lastChar) {
    return false
  } else {
    return s.length === 2 ? true : isPalindrome(s.substring(1, s.length - 1))
  }
}

export {
  isNegative,
  isPositive,
  isEven,
  isOdd,
  arrayEquals,
  isPalindrome
}
