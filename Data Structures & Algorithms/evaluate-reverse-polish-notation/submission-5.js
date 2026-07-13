class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const operations = ['+', '-', '*', '/'];
        const overall = [];
        const toBeOperated = [null, null];

        for (let i = 0; i < tokens.length; i++) {
            if (operations.indexOf(tokens[i]) === -1) {
                overall.push(tokens[i]);
                continue;
            }

            toBeOperated[1] = Number(overall[overall.length - 1]);
            overall.pop();
            toBeOperated[0] = Number(overall[overall.length - 1]);
            overall.pop();

            switch (tokens[i]) {
                case '+':
                    overall.push(toBeOperated[0] + toBeOperated[1]);
                    break;
                case '-':
                    overall.push(toBeOperated[0] - toBeOperated[1]);
                    break;
                case '*':
                    overall.push(toBeOperated[0] * toBeOperated[1]);
                    break;
                case '/':
                    overall.push(Math.trunc(toBeOperated[0] / toBeOperated[1]));
                    break;
            }
        }

        return overall[0];
    }
}
