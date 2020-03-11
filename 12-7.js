const factorial = (num) => {
  total = 1;

  for (let i=1; i <= num; i++) {
    if (num === 1) {
      return total;
    }

    total *= i

  }
  return total
}

console.log(factorial(5));