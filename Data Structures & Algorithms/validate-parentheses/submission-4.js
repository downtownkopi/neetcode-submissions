class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const pairs = { '(': ')', '{': '}', '[': ']' };
        const stack = [];

        for (let i = 0; i < s.length; i++) {
            if (s[i] in pairs) stack.push(s[i]);
            else {
                if (pairs[stack[stack.length - 1]] !== s[i] || !stack.length) return false;
                else stack.pop();
            }
        }

        return stack.length === 0;
    }
}
