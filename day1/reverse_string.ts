// My Attempt
function reverseString(input: string): string {
  const stringAr = input.split('');
  let reverseString: string[] = [];
  for(let i=0;i<stringAr.length;i++) {
    reverseString.unshift(stringAr[i]);
  }
  return reverseString.join('');
}

const abc = 'abc';
console.log(abc);
console.log(reverseString(abc));

//AI Suggestion
function reverseStringAI(input: string): string {
  let reverseString = ''
  for(let i = input.length - 1; i >= 0; i--) {
    reverseString += input[i];
  }
  return reverseString;
}

const def = 'def';
console.log(def);
console.log(reverseStringAI(def));
