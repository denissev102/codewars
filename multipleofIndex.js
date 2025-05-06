function multipleOfIndex(array) {
    return array.filter((n,i) => n % i === 0 || n === 0)
  }