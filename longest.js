function longest(s1, s2) {
    let finalString = [];
    let s3 = s1 + s2;
    let s4 = s3.split("").sort()
    for (let i = 0; i <= s4.length; i++) {
        if (!finalString.includes(s4[i])) {
            finalString.push(s4[i])
        }
    }
    return finalString.join('');
}