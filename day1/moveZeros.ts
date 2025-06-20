// AI had to help me comprehend this so I don't get any credit :C
function moveZeroes(nums: number[]): void {
    let insertAt: number = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
             nums[insertAt++] = nums[i];
        }
    }

    while (insertAt < nums.length) {
        nums[insertAt++] = 0;
    }
}

// moveZeroes([0,1,0,3,12]) → [1,3,12,0,0]
// moveZeroes([0,0,1])     → [1,0,0]
// moveZeroes([1,2,3])     → [1,2,3]

console.log(moveZeroes([0,1,0,3,12]));
console.log(moveZeroes([0,0,1]));
console.log(moveZeroes([1,2,3]));