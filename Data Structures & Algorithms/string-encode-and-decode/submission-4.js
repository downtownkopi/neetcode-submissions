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
        console.log(`str.length: ${str.length}`)
        if (str.length === 0) return [];

        const arr = str.split('</><>');
        arr[0] = arr[0].slice(2);
        arr[arr.length - 1] = arr[arr.length - 1].slice(0, -3);
        return arr;
    }
}
