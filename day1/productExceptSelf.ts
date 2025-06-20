// AI did this again, I have no idea how this was the logical conclusion.
function productExceptSelf(nums: number[]): number[] {
  const result: number[] = [];

  // Left-to-right prefix pass
  result[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // Right-to-left suffix pass
  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= nums[i];
  }

  return result;
}


console.log(productExceptSelf([1,2,3,4]));    // [24,12,8,6]
console.log(productExceptSelf([0,1,2,3]));    // [6,0,0,0]