function factorial(n) {
    let total = 1;
    if (n < 0 || n > 12) {
        throw new RangeError()
    }
    while (n > 0) {
        total *= n--
    } return total
}