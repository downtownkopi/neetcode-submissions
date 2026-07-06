class Solution {
    isValid(s) {
        const pairs = { '(': ')', '{': '}', '[': ']' };
        const stack = [];

        for (const char of s) {
            if (char in pairs) {
                stack.push(char);
            } else {
                if (!stack.length || pairs[stack[stack.length - 1]] !== char) {
                    return false;
                }
                stack.pop();
            }
        }

        return stack.length === 0;
    }
}