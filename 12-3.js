const strRev = (str) => {
  newStr = ''
  for (let i = str.length-1; i >= 0; i--) {
    newStr += str[i]
  }
 return newStr
}

console.log(strRev('String'));