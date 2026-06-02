class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const sLength = s.length;
        if (sLength !== t.length) {
            return false;
        }

        const sMap = new Map();
        for (const char of s) sMap.set(char, (sMap.get(char) || 0) + 1);

        for (const char of t) {
            if (!sMap.has(char)) return false;
            sMap.set(char, sMap.get(char) - 1);
            if (sMap.get(char) === 0) sMap.delete(char);
        }

        return sMap.size === 0;
    }
}
