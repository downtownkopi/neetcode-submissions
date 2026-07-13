class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operations = ['+', '-', '*', '/'];
        const overall = [];

        const operators = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b),
        };

        for (let i = 0; i < tokens.length; i++) {
            if (operations.indexOf(tokens[i]) === -1) {
                overall.push(tokens[i]);
                continue;
            }

            const operation = operators[tokens[i]](Number(overall[overall.length - 2]), Number(overall[overall.length - 1]));
            overall.pop();
            overall.pop();
            overall.push(operation);
        }

        return overall[0];
    }
}
