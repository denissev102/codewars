function doubleChar(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
      newStr = newStr + str[i] + str[i]
    } return newStr
  }