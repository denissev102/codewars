function invert(array) {
    if (array === []){
      return []
    } else {
      for (let i = 0; i < array.length; i++) {
        array[i] *= -1
      }
    } return array
 }