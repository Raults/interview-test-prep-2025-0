// AI gave me this answer and I walked through it so I could get a grip on how it worked, again
function permute(nums: number[]): number[][] {
  const result: number[][] = [];

  function backtrack(current: number[], used: boolean[]) {
    if (current.length === nums.length) { //1/ [].length != [1,2].length //2/ [1] != //3/ [1,2] is true
      result.push([...current]); //3/ result = [[1,2]]
      return;
    }

    // Try every number in nums
    for (let i = 0; i < nums.length; i++) { //5/ i = 2 so the loop breaks and we never add 1 to 2, the fuck did I miss? // AI helped me, we're already a loop deep so we break it and go back to the first loop at this point.
      if (used[i]) continue; //1/ used[0] === false //2/ used[0] === true //3/ used[1] === false //4/ used[1] === true 

      // choose
      used[i] = true; //1/ used = [true,false] //3/ used = [true,true]
      current.push(nums[i]); //1/ current = [num[0]] = [1] //3/ current = [num[0],num[2]] = [1,2] // 

      // explore
      backtrack(current, used); //1/ backtrack([1],[true,false]) //3/ backtrack([1,2],[true,true]) //

      // un-choose (backtrack)
      current.pop(); //3/ current = [2]
      used[i] = false; //3/ i === 0, used === [false,true]
    }
  }

  // start recursion
  backtrack([], Array(nums.length).fill(false)); //1/ backtrack([], [false,false])
  return result;
}


// permute([1, 2]) → [
//   [1, 2],
//   [2, 1]
// ]

// permute([1, 2, 3]) → [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1]
// ]
