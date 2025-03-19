function sumArray(array) {
    if (array) {
        let sortedArray = array.sort((low, high) => low - high);
        let newArray = sortedArray.slice(1, -1);
        let sum = newArray.reduce((acc, num) => acc + num, 0);
        return sum
    } return 0
}