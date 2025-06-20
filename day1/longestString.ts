// My way - this way is O(n²) because of .includes()
function lengthOfLongestSubstring(s: string): number {
    let subString: string = '';
    let longestStringLength = 0;
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (subString.includes(char)) {
            if(longestStringLength < subString.length) longestStringLength = subString.length ;
            subString = char;
        } else {
            subString += char;
        }
    }

    return longestStringLength;
}

console.log(lengthOfLongestSubstring("abcabcbb")); // 3 → "abc"
console.log(lengthOfLongestSubstring("bbbbb"));    // 1 → "b"
console.log(lengthOfLongestSubstring("pwwkew"));   // 3 → "wke"
console.log(lengthOfLongestSubstring("abba"));   // 2 → "ab" or "ba"
console.log(lengthOfLongestSubstring(""));         // 0

// AI way - this way is O(n)
function lengthOfLongestSubstringAI(s: string): number {
  const seen: Record<string, number> = {};
  let maxLen = 0;
  let start = 0; // start of current window

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (seen[char] >= start) {
      // char was seen in the current window
      start = seen[char] + 1;
    }

    seen[char] = i;
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
}

console.log(lengthOfLongestSubstringAI("abcabcbb")); // 3 → "abc"
console.log(lengthOfLongestSubstringAI("bbbbb"));    // 1 → "b"
console.log(lengthOfLongestSubstringAI("pwwkew"));   // 3 → "wke"
console.log(lengthOfLongestSubstringAI("abba"));   // 2 → "ab" or "ba"
console.log(lengthOfLongestSubstringAI(""));         // 0
