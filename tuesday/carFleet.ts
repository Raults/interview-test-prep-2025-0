// while all positions aren't target, inc them by their respective speeds, if any position reaches another, positions become 1 position and move at the lower speed
function carFleet(target: number, position: number[], speed: number[]): number {
    // Step 1: Pair up positions and speeds
    const cars: [number, number][] = [];
    for (let i = 0; i < position.length; i++) {
        cars.push([position[i], speed[i]]);
    }

    // Step 2: Sort cars by position descending (closer to target = first)
    cars.sort((a, b) => b[0] - a[0]);

    // Step 3: Use a stack to simulate fleets
    const stack: number[] = [];

    for (const [pos, spd] of cars) {
        const time = (target - pos) / spd;

        // Step 4: Determine if this car forms a new fleet
        if (
        stack.length === 0 || 
        time > stack[stack.length - 1] // takes longer to arrive → can't catch
        ) {
        stack.push(time);
        }
        // else: this car merges with the fleet ahead (do nothing)
    }

    return stack.length; // Number of distinct fleets
}

console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
// → 3

console.log(carFleet(10, [3], [3]));
// → 1

console.log(carFleet(100, [0, 2, 4], [4, 2, 1]));
// → 1
