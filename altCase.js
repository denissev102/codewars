String.prototype.toAlternatingCase = function () {
  return this.split("").map(word => word === word.toUpperCase() ? word.toLowerCase() : word.toUpperCase()).join('')
}