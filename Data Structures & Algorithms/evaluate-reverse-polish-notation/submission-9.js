class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const overall = [];
        const operatorFunctions = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b),
        };
        const operators = Object.keys(operatorFunctions);

        for (let i = 0; i < tokens.length; i++) {
            if (operators.indexOf(tokens[i]) === -1) {
                overall.push(tokens[i]);
                continue;
            }

            const outcome = operatorFunctions[tokens[i]](Number(overall[overall.length - 2]), Number(overall[overall.length - 1]));
            overall.pop();
            overall.pop();
            overall.push(outcome);
        }

        return overall[0];
    }
}
