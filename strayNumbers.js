function stray(numbers) {
    let nums = numbers.sort()
    if (nums[0] === nums[1]) {
      return nums[nums.length-1]
    } else return nums[0]
  }