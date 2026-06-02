class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let letters = {};
        for (const char of s) {
            letters[char] = (letters[char] || 0) + 1;
        }
        for (const char of t) {
            if (!letters[char]) return false;
            letters[char]--;
        }
        return true;
    }
}