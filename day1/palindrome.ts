//My solution
function isPalindrome(input: string): boolean {
    for (let i = 0, j = input.length - 1; i <= j; i++, j--) {
        if (input[i] !== input[j]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('aba'));
console.log(isPalindrome('abc'));

// gift from AI for alphanumerics
function isAlphaNumeric(char: string): boolean {
  const code = char.charCodeAt(0);
  return (
    (code >= 48 && code <= 57) ||  // 0-9
    (code >= 65 && code <= 90) ||  // A-Z
    (code >= 97 && code <= 122)    // a-z
  );
}

// AI Solution
function isPalindromeAI(input: string): boolean {
    let i = 0;
    let j = input.length - 1;

    while (i < j) {
        while (i < j && !isAlphaNumeric(input[i])) i++; 
        while (i < j && !isAlphaNumeric(input[j])) j--;

        if (input[i].toLowerCase() !== input[j].toLowerCase()) {
            return false;
        }

        i++;
        j++;
    }
    return true;
}

console.log(isPalindromeAI("A man, a plan, a canal: Panama"));