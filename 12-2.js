const powerCalculator = (base, exp) => {
  let total = base

  for (let i = 1; i < exp; i++) {
    total *= base
  }

  return console.log(total)
}

powerCalculator(10, 3);