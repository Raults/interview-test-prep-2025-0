// I realized what data structures I needed, but now how they should be built. I couldn't grasp the concept of the algorithm without AI explaining it to me and then running through the logic
function isValid(s: string): boolean {
  const map: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  const stack: string[] = [];

  for (const char of s) {
    if (char in map) {
      const top = stack.pop();
      if (top !== map[char]) return false;
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0; // ✅ all openers matched
}

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([)]"));
console.log(isValid("{[]}"));


// isValid("()") → true
// isValid("()[]{}") → true
// isValid("(]") → false
// isValid("([)]") → false
// isValid("{[]}") → true