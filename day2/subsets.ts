// AI gave me this answer and I walked through it so I could get a grip on how it worked
function subsets(nums: number[]): number[][] { // nums.length = 3
  const result: number[][] = [];
  function backtrack(index: number, current: number[]) {
    result.push([...current]); // result = [[]] // result = [[],[1]] // result = [[],[1],[1,2]]
    for(let i = index; i < nums.length; i++) { // index = 0 // index = 1 // index = 2
        current.push(nums[i]); // current = [nums[0]] = [1] // current = [nums[0],nums[1]] = [1,2] // current = [nums[0],nums[1],nums[2]] = [1,2,3]
        backtrack(i + 1, current); // backtrack(1, [1]) // backtrack(2,[1,2]) // backtrack(3,[1,2,3])
        current.pop()
    }
  }

  backtrack(0, []);
  return result;
}

const result = subsets([1, 2, 3]);
console.log(JSON.stringify(result, null, 2));

// subsets([1, 2]) → [[], [1], [2], [1,2]]
// subsets([1, 2, 3]) → 
// [
//   [],
//   [1], [2], [3],
//   [1,2], [1,3], [2,3],
//   [1,2,3]
// ]