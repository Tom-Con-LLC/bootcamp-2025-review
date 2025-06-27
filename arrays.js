const nums = [5, 7, 11, 15, 99];
// length 5
// highestIndex 4

console.log(nums[2]); // 11 because 11 is stored at the second index of the nums array

// Normal iteration of an array
for (let i = 0; i < nums.length; i += 1) {
  console.log(nums[i]);
}

// One possible way to iterate through an array backwards
for (let i = 0; i < nums.length; i += 1) {
  console.log(nums[nums.length - i - 1]);
}

// Second possible way to iterate through an array backwards
for (let i = nums.length - 1; i >= 0; i -= 1) {
  console.log(nums[i]);
}
