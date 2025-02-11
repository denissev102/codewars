let isAnagram = function (test, original) {
    let t = test.toLowerCase().split('').sort().join('');
    let o = original.toLowerCase().split('').sort().join('');
    if (t === o) {
        return true
    } else return false
};