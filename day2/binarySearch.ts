// My answer, right, but only O(n)
function binarySearch(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    if(nums[left] === target) {
        return left;
    } else if (nums[right] === target) {
        return right;
    }
  }

  return -1;
}

console.log( binarySearch([1, 2, 3, 4, 5], 4));
console.log( binarySearch([1, 2, 3, 4, 5], 6));

// AI answer, right, but O(log n)
function binarySearchAI(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
        return mid;
        } else if (target > nums[mid]) {
        left = mid + 1; // search right half
        } else {
        right = mid - 1; // search left half
        }
    }

    return -1;
}

console.log( binarySearchAI([1, 2, 3, 4, 5], 4));
console.log( binarySearchAI([1, 2, 3, 4, 5], 6));

// binarySearch([1, 2, 3, 4, 5], 4) → 3 
// binarySearch([1, 2, 3, 4, 5], 6) → -1
