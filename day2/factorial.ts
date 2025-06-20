// Right on first try, I'm so smart
function factorial(n: number): number {
    if (n > 0) {
        return n * factorial(n - 1);
    }
    return 1;
}

console.log(factorial(5)); // 5 * 4 * 3 * 2 * 1
console.log(factorial(0)); // base case