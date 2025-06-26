//  My Attempt
function evalRPN(tokens: string[]): number {
    let stack: number[] = [];
    for(let i = 0; i < tokens.length; i++) {
        if(isNaN(Number(tokens[i]))) {
            let rightInt = stack.pop();
            let leftInt = stack.pop();
            let equation = `${rightInt} ${tokens[i]} ${leftInt}`;
            console.log(equation);
            stack.push(Math.floor(eval(equation)));
            console.log('result: ', Math.floor(eval(equation)));
            // console.log('current stack: ', stack);
        } else {
            stack.push(Number(tokens[i]));
            // console.log('current stack: ', stack);
        }
    }
    return stack[0];
}

console.log(evalRPN(["2", "1", "+", "3", "*"])); // → ((2 + 1) * 3) = 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // → (4 + (13 / 5)) = 6
console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // → 22

// AI's, as you can see, they use a switch to handle operatiors, SIMPLE YET CLEVER!!!
function evalRPNAI(tokens: string[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    if (!isNaN(Number(token))) {
      stack.push(Number(token));
    } else {
      const right = stack.pop()!;
      const left = stack.pop()!;
      let result: number;

      switch (token) {
        case '+':
          result = left + right;
          break;
        case '-':
          result = left - right;
          break;
        case '*':
          result = left * right;
          break;
        case '/':
          result = Math.trunc(left / right); // truncate toward 0
          break;
        default:
          throw new Error(`Invalid token: ${token}`);
      }

      stack.push(result);
    }
  }

  return stack[0];
}

console.log(evalRPNAI(["2", "1", "+", "3", "*"])); // → ((2 + 1) * 3) = 9
console.log(evalRPNAI(["4", "13", "5", "/", "+"])); // → (4 + (13 / 5)) = 6
console.log(evalRPNAI(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])); // → 22