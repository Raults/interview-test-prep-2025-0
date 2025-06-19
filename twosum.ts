// My Solution
function twoSum(nums: number[], target: number): number[] {
  for (let i = 0, j = i + 1; i < nums.length - 1;) {
    if (nums[i] + nums[j] === target) {
        return [i, j];
    } else {
        if (j === nums.length -1) {
            i++;
            j = i + 1;
        } else {
            j++;
        }
    }
  }
  return [-1, -1];
}

console.log(twoSum([2, 7, 11, 15], 9)); // returns [0, 1] (because 2 + 7 = 9)

// AI Solution
function twoSumAI(nums: number[], target: number): number[] {
  const map: Record<number, number> = {}; // value -> index

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i];
    }

    map[num] = i;
  }

  return [-1, -1]; // should never hit with valid input
}

// I was supposed to use a hash map T_T