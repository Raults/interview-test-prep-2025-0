function dailyTemperatures(temperatures: number[]): number[] {
    let stack: number[] = [];
    let dayCount = 0;
    let listLength = temperatures.length

    for (let i = 0, j = 0; i < listLength; i++) {
        if (i + 1 < listLength) {
            while (temperatures[i] >= temperatures[j]) {
                dayCount++;
                j++;
                if (j === listLength) {
                    dayCount = 0;
                    continue
                }
            }
        }
        stack.push(dayCount);
        dayCount = 0;
        j = i + 1;
    }
    return stack;
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// → [1, 1, 4, 2, 1, 1, 0, 0]

console.log(dailyTemperatures([30, 40, 50, 60]));
// → [1, 1, 1, 0]

console.log(dailyTemperatures([30, 60, 90]));
// → [1, 1, 0]

function dailyTemperaturesAI(temperatures: number[]): number[] {
  const result: number[] = new Array(temperatures.length).fill(0);
  const stack: number[] = []; // store indices, not values

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const prevIndex = stack.pop()!;
      result[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return result;
}

console.log(dailyTemperaturesAI([73, 74, 75, 71, 69, 72, 76, 73]));
// → [1, 1, 4, 2, 1, 1, 0, 0]

console.log(dailyTemperaturesAI([30, 40, 50, 60]));
// → [1, 1, 1, 0]

console.log(dailyTemperaturesAI([30, 60, 90]));
// → [1, 1, 0]
