const nTri = (num) => {
  let sum = 0

  for (let i = num; i >= 1; i-- ) {
    sum += i
  }

  return sum
}

console.log(nTri(4));