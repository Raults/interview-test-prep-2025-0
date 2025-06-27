// my attempt
function isPalindrome(word: string): number {
    if (!word) return 0;

    let maxLength = 1; 
    let checkString = '';

    for (let i = 0; i < word.length; i++) {
        checkString += word[i];
        let middleCharLeft = Math.floor(checkString.length / 2);
        let middleCharRight = Math.floor(checkString.length / 2);
        if (checkString.length % 2 === 0) {
            middleCharRight + 1;
        }
        
        let tempLength = 0;
        while (0 <= middleCharLeft) {
            if (checkString[middleCharLeft] === checkString[middleCharRight]) {
                tempLength++;
                maxLength = Math.max(maxLength, tempLength);
            }
            middleCharLeft--;
            middleCharRight++;
        }
    }

    return maxLength;
}

console.log(isPalindrome('ababm'));

// AI
function longestPalindrome(s: string): number {
    if (s.length < 1) return 0;

    let maxLength = 0;

    function expandAroundCenter(left: number, right: number): number {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    }

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i);       // odd length
        const len2 = expandAroundCenter(i, i + 1);   // even length
        maxLength = Math.max(maxLength, len1, len2);
    }

    return maxLength;
}

// 🔍 Example tests
console.log(longestPalindrome("babad")); // 3 ("bab" or "aba")
console.log(longestPalindrome("cbbd"));  // 2 ("bb")
console.log(longestPalindrome("a"));     // 1
