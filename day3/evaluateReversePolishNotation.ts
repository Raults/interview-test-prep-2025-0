function evalRPN(tokens: string[]): number {
    let popCount = 0;
    let mathStack: number[] = [];
    for(let i = 0; i < tokens.length; i++) {
        const num = Number(tokens[i]);
        if(isNaN(num)) {
            
            popCount = mathStack.length - popCount;
        } else {
            mathStack.push(num);
            popCount++;
        }
    }
}
