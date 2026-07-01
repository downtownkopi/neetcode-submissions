class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        const str = strs.join('</><>');
        return strs.length > 0 ? `<>${strs.join('</><>')}</>` : '';
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str.length === 0) return [];
        return str.slice(2,-3).split('</><>');
    }
}
