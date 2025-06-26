// My answer (no sort)
function mergeIntervals(intervals: number[][]): number[][] {
    let stack: number[][] = [];
    for (let i = 0; i < intervals.length; i++) {
        if ( i + 1 < intervals.length && intervals[i][1] > intervals[i+1][0]) {
            stack.push([intervals[i][0],intervals[i+1][1]]);
            i++;
        } else {
            stack.push(intervals[i]);
        }
    }
    return stack;
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));
// → [[1,6],[8,10],[15,18]]

// AI's Answer adds sort
function mergeIntervalsAI(intervals: number[][]): number[][] {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const merged: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const prev = merged[merged.length - 1];
    const curr = intervals[i];

    if (curr[0] <= prev[1]) {
      // Merge: extend the previous interval's end
      prev[1] = Math.max(prev[1], curr[1]);
    } else {
      merged.push(curr);
    }
  }

  return merged;
}

console.log(mergeIntervalsAI([[1,3],[2,6],[8,10],[15,18]]));
// → [[1,6],[8,10],[15,18]]