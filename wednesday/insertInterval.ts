function insert(intervals: number[][], insert: number[]): number[][] {
    intervals.push(insert);

    intervals.sort((a, b) => a[0] - b[0]);

    const merged: number[][] = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const prev = merged[merged.length - 1];
        const curr = intervals[i];

        if (curr[0] <= prev[1]) {
            merged[merged.length - 1][1] = Math.max(curr[1], prev[1]);
        } else {
            merged.push(curr);
        }
    }
    
    return merged;
}

console.log(insert([[1,3],[6,9]], [2,5]));
// ➞ [[1,5],[6,9]]

console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
// ➞ [[1,2],[3,10],[12,16]]
