const strSplitter = (str, delimiter) => {
  const arr = [];

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === delimiter) {
      arr.push(str.slice(0, i))
    }
  }
  return arr
}

console.log(strSplitter("02/20/2020", "/"))