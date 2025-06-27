function topKFrequent(nums: number[], k: number): number[] {
    let numCount: Record<number,number> = {};
    let middle = Math.floor(nums.length / 2);
    nums.sort((a, b) => a - b);

    // AI did this with just freqMap[num] = (freqMap[num] || 0) + 1;
    for (let i = 0, j = nums.length; i <= middle; i++, j--) {
        if (!numCount[(nums[i])]) numCount[(nums[i])] = 0;
        if (!numCount[(nums[j])]) numCount[(nums[j])] = 0;
        if (i !== j) numCount[(nums[j])]++;
        numCount[(nums[i])]++;
    }
}


function topKFrequentAI(nums: number[], k: number): number[] {
    const freqMap: Record<number, number> = {};

    // Step 1: Build frequency map
    for (const num of nums) {
        freqMap[num] = (freqMap[num] || 0) + 1;
    }

    // Step 2: Bucket sort based on frequency
    const buckets: number[][] = Array(nums.length + 1).fill(0).map(() => []);
    for (const num in freqMap) {
        const freq = freqMap[+num];
        buckets[freq].push(+num);
    }

    // Step 3: Collect top k frequent elements
    const result: number[] = [];
    for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
        for (const num of buckets[i]) {
            result.push(num);
            if (result.length === k) break;
        }
    }

    return result;
}
