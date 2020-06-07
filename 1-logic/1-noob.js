function toAccounting (n) {
  if (n < 0) {
    return '(' + Math.abs(n) + ')'
  } else if (n >= 0) {
    return n
  }
}

console.log(toAccounting(0))
console.log(toAccounting(10))
console.log(toAccounting(-5))
