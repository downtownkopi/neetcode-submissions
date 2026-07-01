class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */

    isPalindrome(s) {
        let lower = s.toLowerCase();
        let left = 0;
        let right = s.length - 1;

        while (left <= right) {
            if (!(/^[a-zA-Z0-9]$/.test(lower[left]))) {
                left++;
                continue;
            }
            if (!(/^[a-zA-Z0-9]$/.test(lower[right]))) {
                right--;
                continue;
            }

            if (lower[left] !== lower[right]) return false;

            left++;
            right--;
        }

        return true;
    }
}
