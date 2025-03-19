function betterThanAverage(classPoints, yourPoints) {
    let totalScore = classPoints.reduce((acc, num) => acc + num);
    let classAverage = totalScore / classPoints.length;
    if (classAverage < yourPoints) {
        return true
    } else {
        return false
    }
}
