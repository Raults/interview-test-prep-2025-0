function firstUniqChar(s: string): number {
    const map: Record <string, number> = {};

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // my way:
        if (map.hasOwnProperty(char)) {
            map[char]++;
        } else {
            map[char] = 1;
        }

        // AI way:
        // map[char] = (map[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (map[char] === 1) {
            return i;
        }
    }

    return -1; // should never hit with valid input
}

console.log(firstUniqChar("leetcode"));      // 0   (l is first non-repeating)
console.log(firstUniqChar("loveleetcode"));  // 2   (v)
console.log(firstUniqChar("aabb")); 