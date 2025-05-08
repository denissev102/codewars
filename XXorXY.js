function chromosomeCheck(sperm) {
    if (sperm.toLowerCase() == "xx") {
        return 'Congratulations! You\'re going to have a daughter.'
    } if (sperm.toLowerCase() == "xy") {
        return 'Congratulations! You\'re going to have a son.'
    }
}