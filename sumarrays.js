function sum(numbers) {
    if (numbers) {
        return numbers.reduce((a, b) => a + b, 0)
    } else return 0
}