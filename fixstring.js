function solve(s){
    let lowerC = 0;
    let upperC = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] == s[i].toLowerCase()) {
        lowerC++
      } else if (s[i] == s[i].toUpperCase()) {
        upperC++
      }
    } if (lowerC > upperC) {
      return s.toLowerCase()
    } else if (lowerC < upperC) {
      return s.toUpperCase()
      } else return s.toLowerCase()
 }