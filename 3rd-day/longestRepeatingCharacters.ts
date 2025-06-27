function lengthOfLongestRepeatingCharacters(s: string): number {
    let maxLengthCount = 0;
    let iterationCount = 1;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i+1]) {
            iterationCount += 1;
            maxLengthCount = Math.max(maxLengthCount, iterationCount);
        } else {
            iterationCount = 1;
        }
    }

    return Math.max(maxLengthCount, iterationCount);
}

console.log(lengthOfLongestSubstring('gsdsssbb'));