const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1).reduce(a => a);
