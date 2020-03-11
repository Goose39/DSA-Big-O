const fSequ = (num) => {
  let arr = []

  for (let i = 0; i <= num; i++) {
    if (i < 2 ) {
      arr.push(1)
    } else arr.push(arr[i-1] + arr[i-2])
  }
  return arr
}

console.log(fSequ(7));