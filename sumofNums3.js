function getSum(a, b){
    let total= 0;
    let max = Math.max(a,b)
    let min = Math.min(a,b)
    for (let i = min; i <= max; i++) {
      total+=i
    } return total
 }