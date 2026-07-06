class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const start = ['(', '{', '['];
        const end = [')', '}', ']'];
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            if (start.indexOf(s[i]) !== -1) stack.push(s[i]);
            else {
                if (start.indexOf(stack[stack.length - 1]) === end.indexOf(s[i])) stack.pop();
                else stack.push(s[i]);
            }
        }

        return stack.length === 0;
    }
}
